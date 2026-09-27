/** O întrebare din setul unui modul. */
export interface Question {
  /** Textul întrebării. */
  question: string;
  /** Opțional: un fragment de cod afișat sub întrebare. */
  code?: string;
  /** Variantele de răspuns (de obicei 4). */
  options: string[];
  /** Indexul variantei corecte din `options` (începe de la 0). */
  correct: number;
  /** Scurtă explicație afișată după ce utilizatorul răspunde. */
  explanation: string;
}
