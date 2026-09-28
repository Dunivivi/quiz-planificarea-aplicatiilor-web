import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EXAMS, MODULES, findModule } from '../../data/modules';
import { QuizModule } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';

/** Doar litere (inclusiv diacritice), spații și cratimă; minim 2 caractere. */
const NAME_PATTERN = /^[\p{L}][\p{L} '-]{1,39}$/u;

/** „ion  popescu” → „Ion Popescu” */
function tidy(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase('ro')
    .replace(/(^|[\s-])\p{L}/gu, (m) => m.toLocaleUpperCase('ro'));
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly quiz = inject(QuizService);
  private readonly router = inject(Router);

  protected readonly modules = MODULES;
  protected readonly exams = EXAMS;
  protected readonly findModule = findModule;

  protected readonly selected = signal<QuizModule | null>(null);
  protected readonly count = signal(10);
  protected readonly nume = signal(this.quiz.lastStudent()?.nume ?? '');
  protected readonly prenume = signal(this.quiz.lastStudent()?.prenume ?? '');
  protected readonly submitted = signal(false);
  protected readonly numeValid = computed(() => NAME_PATTERN.test(this.nume().trim()));
  protected readonly prenumeValid = computed(() => NAME_PATTERN.test(this.prenume().trim()));
  /** Secunde pe întrebare; 0 = fără temporizator. */
  protected readonly timeLimit = signal(0);
  protected readonly timerOptions = [0, 15, 25, 30, 60];

  /** Variantele rapide de număr de întrebări (examenele au mai multe). */
  protected readonly presets = computed(() =>
    this.selected()?.includes ? [10, 20, 30, 40, 60] : [5, 10, 15, 20, 30, 50],
  );

  /** Pentru examene: câte întrebări vin din fiecare modul. */
  protected readonly perPart = computed(() => {
    const parts = this.selected()?.includes?.length;
    if (!parts) return null;
    const base = Math.floor(this.count() / parts);
    return this.count() % parts ? `${base}–${base + 1}` : `${base}`;
  });

  private readonly setupPanel = viewChild<ElementRef<HTMLElement>>('setup');

  /** Testul început și neterminat (dacă există). */
  protected readonly ongoing = computed(() => {
    const s = this.quiz.session();
    if (!s) return null;
    return {
      module: findModule(s.moduleId),
      answered: s.questions.filter((q) => q.picked !== null).length,
      total: s.questions.length,
    };
  });

  protected readonly totalQuestions = MODULES.reduce((sum, m) => sum + m.questions.length, 0);
  protected readonly testsTaken = computed(() => this.quiz.history().length);

  protected best(m: QuizModule) {
    return this.quiz.bestPercent(m.id);
  }

  protected attempts(m: QuizModule) {
    return this.quiz.attempts(m.id);
  }

  protected unseen(m: QuizModule) {
    return this.quiz.unseenCount(m.id);
  }

  protected select(m: QuizModule): void {
    this.selected.set(m);
    this.count.set(m.includes ? 20 : 10);
    this.timeLimit.set(m.includes ? 25 : 0); // la examene, implicit 25 de secunde
    // după randare, derulăm la panoul de configurare
    setTimeout(() =>
      this.setupPanel()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    );
  }

  protected setCount(value: number): void {
    const max = this.selected()?.questions.length ?? 100;
    const n = Math.round(Number(value) || 1);
    this.count.set(Math.min(Math.max(n, 1), max));
  }

  protected start(): void {
    const m = this.selected();
    this.submitted.set(true);
    if (!m || !this.numeValid() || !this.prenumeValid()) return;
    this.quiz.start(m.id, this.count(), this.timeLimit(), {
      nume: tidy(this.nume()),
      prenume: tidy(this.prenume()),
    });
    this.router.navigate(['/quiz']);
  }

  /** Durata estimată a testului, în minute. */
  protected readonly estimate = computed(() =>
    this.timeLimit()
      ? Math.ceil((this.count() * this.timeLimit()) / 60)
      : Math.ceil(this.count() * 0.75),
  );

  protected resume(): void {
    this.router.navigate(['/quiz']);
  }

  protected discard(): void {
    this.quiz.quit();
  }
}
