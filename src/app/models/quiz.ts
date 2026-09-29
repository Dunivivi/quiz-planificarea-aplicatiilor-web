import { Question } from './question';

/** Un modul de quiz (ex: HTML) cu setul lui de întrebări. */
export interface QuizModule {
  id: string;
  name: string;
  /** Textul scurt din pătrățelul colorat (ex: "JS"). */
  short: string;
  description: string;
  /** Culoarea de accent a modulului. */
  color: string;
  questions: Question[];
  /**
   * Doar pentru examene: id-urile modulelor incluse.
   * Întrebările examenului sunt întrebările acestor module, puse una după alta.
   */
  includes?: string[];
}

/** O întrebare din testul în desfășurare (cu variantele deja amestecate). */
export interface SessionQuestion {
  /** Poziția întrebării în setul modulului. */
  index: number;
  /** Id-ul modulului din care provine întrebarea (util la examene). */
  source: string;
  question: string;
  code?: string;
  explanation: string;
  /** Variantele, în ordinea în care sunt afișate. */
  options: string[];
  /** Indexul variantei corecte în `options` (după amestecare). */
  correct: number;
  /** Ce a ales utilizatorul (null = încă nu a răspuns, -1 = a expirat timpul). */
  picked: number | null;
}

/** Elevul care dă testul. */
export interface Student {
  nume: string;
  prenume: string;
}

/** Starea trimiterii rezultatului în Google Sheets. */
export type SyncStatus = 'pending' | 'sent' | 'error' | 'disabled';

/** Testul curent. Se salvează în localStorage ca să poată fi reluat după refresh. */
export interface QuizSession {
  moduleId: string;
  questions: SessionQuestion[];
  current: number;
  startedAt: number;
  finishedAt?: number;
  /** Secunde pentru fiecare întrebare (0 = fără limită de timp). */
  timeLimit: number;
  student?: Student;
  /** Când a început întrebarea curentă — pentru temporizator (continuă și după refresh). */
  questionStartedAt: number;
}

/** Rezumatul unui test terminat, păstrat în istoric. */
export interface QuizResult {
  id: string;
  moduleId: string;
  total: number;
  correct: number;
  percent: number;
  date: number;
  durationSec: number;
  nume?: string;
  prenume?: string;
  timeLimit?: number;
  /** Ieșiri din pagină, copieri, lipiri — doar pentru tabelul profesorului. */
  signals?: string;
  sync?: SyncStatus;
}
