import { Injectable, computed, inject, signal } from '@angular/core';
import { findModule } from '../data/modules';
import { QuizModule, QuizResult, QuizSession, SessionQuestion, Student, SyncStatus } from '../models/quiz';
import { shuffle } from '../utils/shuffle';
import { StorageService } from './storage.service';

const SESSION_KEY = 'session';
const LAST_KEY = 'last';
const HISTORY_KEY = 'history';
const SEEN_KEY = 'seen';
const STUDENT_KEY = 'student';

/** Pentru fiecare modul: indexurile întrebărilor deja primite. */
type SeenMap = Record<string, number[]>;

/**
 * Toată logica de quiz:
 * - alege întrebări random (întâi pe cele pe care nu le-ai văzut încă)
 * - amestecă variantele de răspuns
 * - ține scorul și salvează totul în localStorage
 */
@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly storage = inject(StorageService);

  /** Testul în desfășurare (sau null). */
  readonly session = signal<QuizSession | null>(this.storage.get(SESSION_KEY, null));
  /** Ultimul test terminat — folosit pe pagina de rezultat. */
  readonly lastSession = signal<QuizSession | null>(this.storage.get(LAST_KEY, null));
  /** Istoricul tuturor testelor (cel mai nou primul). */
  readonly history = signal<QuizResult[]>(this.storage.get(HISTORY_KEY, []));
  /** Ultimul nume introdus, ca să nu fie scris din nou. */
  readonly lastStudent = signal<Student | null>(this.storage.get(STUDENT_KEY, null));

  readonly currentQuestion = computed(() => {
    const s = this.session();
    return s ? s.questions[s.current] : null;
  });

  readonly correctCount = computed(() => countCorrect(this.session()));

  /** Câte întrebări nevăzute mai are un modul. */
  unseenCount(moduleId: string): number {
    const total = findModule(moduleId)?.questions.length ?? 0;
    const seen = this.storage.get<SeenMap>(SEEN_KEY, {})[moduleId] ?? [];
    return total - seen.length;
  }

  /** Pornește un test nou cu `count` întrebări din modulul (sau examenul) ales. */
  start(moduleId: string, count: number, timeLimit: number, student: Student): void {
    const module = findModule(moduleId);
    if (!module) return;

    this.lastStudent.set(student);
    this.storage.set(STUDENT_KEY, student);

    const picked = this.pickQuestions(module, count);

    const questions: SessionQuestion[] = picked.map(({ index, source }) => {
      const q = module.questions[index];
      // amestecăm variantele, dar ținem minte unde a ajuns cea corectă
      const order = shuffle(q.options.map((_, i) => i));
      return {
        index,
        source,
        question: q.question,
        code: q.code,
        explanation: q.explanation,
        options: order.map((i) => q.options[i]),
        correct: order.indexOf(q.correct),
        picked: null,
      };
    });

    const now = Date.now();
    this.saveSession({
      moduleId,
      questions,
      current: 0,
      startedAt: now,
      timeLimit,
      questionStartedAt: now,
      student,
    });
  }

  /** A expirat timpul la întrebarea curentă: o marcăm ca greșită. */
  timeout(): void {
    this.answer(-1);
  }

  /** Utilizatorul alege o variantă la întrebarea curentă (-1 = timp expirat). */
  answer(optionIndex: number): void {
    const s = this.session();
    if (!s || s.questions[s.current].picked !== null) return;

    const questions = s.questions.map((q, i) =>
      i === s.current ? { ...q, picked: optionIndex } : q,
    );
    this.saveSession({ ...s, questions });
  }

  /** Trece la întrebarea următoare. Returnează true dacă testul s-a terminat. */
  next(): boolean {
    const s = this.session();
    if (!s) return true;

    if (s.current < s.questions.length - 1) {
      this.saveSession({ ...s, current: s.current + 1, questionStartedAt: Date.now() });
      return false;
    }
    this.finish();
    return true;
  }

  /** Renunță la testul curent fără să-l salveze în istoric. */
  quit(): void {
    this.saveSession(null);
  }

  setSync(resultId: string, sync: SyncStatus): void {
    const history = this.history().map((r) => (r.id === resultId ? { ...r, sync } : r));
    this.history.set(history);
    this.storage.set(HISTORY_KEY, history);
  }

  clearHistory(): void {
    this.history.set([]);
    this.lastSession.set(null);
    this.storage.remove(HISTORY_KEY);
    this.storage.remove(LAST_KEY);
    this.storage.remove(SEEN_KEY);
  }

  /** Cel mai bun procent obținut la un modul (sau null dacă nu există teste). */
  bestPercent(moduleId: string): number | null {
    const results = this.history().filter((r) => r.moduleId === moduleId);
    return results.length ? Math.max(...results.map((r) => r.percent)) : null;
  }

  attempts(moduleId: string): number {
    return this.history().filter((r) => r.moduleId === moduleId).length;
  }

  // ------------------------------------------------------------------

  private finish(): void {
    const s = this.session();
    if (!s) return;

    const finished: QuizSession = { ...s, finishedAt: Date.now() };
    const correct = countCorrect(finished);
    const result: QuizResult = {
      id: crypto.randomUUID(),
      moduleId: s.moduleId,
      total: s.questions.length,
      correct,
      percent: Math.round((correct / s.questions.length) * 100),
      date: finished.finishedAt!,
      durationSec: Math.round((finished.finishedAt! - s.startedAt) / 1000),
      nume: s.student?.nume,
      prenume: s.student?.prenume,
      timeLimit: s.timeLimit,
      sync: 'pending',
    };

    this.lastSession.set(finished);
    this.storage.set(LAST_KEY, finished);

    const history = [result, ...this.history()].slice(0, 100);
    this.history.set(history);
    this.storage.set(HISTORY_KEY, history);

    this.saveSession(null);
  }

  /**
   * Alege întrebările testului.
   * - modul simplu: `count` întrebări random din tot setul
   * - examen: `count` se împarte egal între modulele incluse
   *   (ex: 20 întrebări, 4 module → câte 5 din fiecare)
   */
  private pickQuestions(module: QuizModule, count: number): { index: number; source: string }[] {
    if (!module.includes) {
      const all = module.questions.map((_, i) => i);
      return shuffle(this.pickFromPool(module.id, all, count)).map((index) => ({
        index,
        source: module.id,
      }));
    }

    // Pentru examen: fiecare modul inclus ocupă un „interval” de indexuri în lista comună
    let offset = 0;
    const parts = module.includes.map((id) => {
      const size = findModule(id)?.questions.length ?? 0;
      const part = { id, pool: Array.from({ length: size }, (_, i) => offset + i) };
      offset += size;
      return part;
    });

    // împărțim egal; restul (dacă nu se împarte exact) merge la module alese random
    const base = Math.floor(count / parts.length);
    const extra = new Set(shuffle(parts.map((_, i) => i)).slice(0, count % parts.length));

    const result = parts.flatMap((part, i) => {
      const n = base + (extra.has(i) ? 1 : 0);
      return this.pickFromPool(module.id, part.pool, n).map((index) => ({
        index,
        source: part.id,
      }));
    });
    return shuffle(result);
  }

  /**
   * Alege `count` indexuri random din `pool`. Întrebările deja văzute pe acest
   * dispozitiv sunt folosite doar când nu mai sunt destule nevăzute — astfel
   * testele consecutive au cât mai puține întrebări comune.
   */
  private pickFromPool(key: string, pool: number[], count: number): number[] {
    const seenMap = this.storage.get<SeenMap>(SEEN_KEY, {});
    const seen = new Set(seenMap[key] ?? []);

    const unseen = shuffle(pool.filter((i) => !seen.has(i)));
    let picked = unseen.slice(0, count);

    if (picked.length < count) {
      // s-au terminat întrebările nevăzute din acest set: completăm din cele
      // văzute și începem un „ciclu” nou
      const rest = shuffle(pool.filter((i) => seen.has(i))).slice(0, count - picked.length);
      picked = [...picked, ...rest];
      pool.forEach((i) => seen.delete(i));
    }

    picked.forEach((i) => seen.add(i));
    seenMap[key] = [...seen];
    this.storage.set(SEEN_KEY, seenMap);

    return picked;
  }

  private saveSession(session: QuizSession | null): void {
    this.session.set(session);
    if (session) this.storage.set(SESSION_KEY, session);
    else this.storage.remove(SESSION_KEY);
  }
}

function countCorrect(session: QuizSession | null): number {
  return session?.questions.filter((q) => q.picked === q.correct).length ?? 0;
}
