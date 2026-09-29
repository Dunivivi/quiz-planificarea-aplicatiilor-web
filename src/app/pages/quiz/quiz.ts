import {
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { findModule } from '../../data/modules';
import { QuizService } from '../../services/quiz.service';
import { IntegrityService } from '../../services/integrity.service';
import { SheetsService } from '../../services/sheets.service';

@Component({
  selector: 'app-quiz',
  imports: [DecimalPipe],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  host: {
    '(document:keydown)': 'onKey($event)',
  },
})
export class Quiz {
  protected readonly quiz = inject(QuizService);
  private readonly sheets = inject(SheetsService);
  private readonly integrity = inject(IntegrityService);
  private readonly router = inject(Router);

  protected readonly letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  protected readonly confirmQuit = signal(false);

  private readonly nextButton = viewChild<ElementRef<HTMLButtonElement>>('nextBtn');

  protected readonly session = this.quiz.session;
  protected readonly question = this.quiz.currentQuestion;
  protected readonly module = computed(() => findModule(this.session()?.moduleId ?? ''));
  /** La examene arătăm din ce modul vine întrebarea curentă. */
  protected readonly source = computed(() => {
    const q = this.question();
    return this.module()?.includes && q ? findModule(q.source) : null;
  });

  protected readonly answered = computed(() => this.question()?.picked != null);
  protected readonly isCorrect = computed(() => {
    const q = this.question();
    return !!q && q.picked === q.correct;
  });
  /** Ora curentă, actualizată de câteva ori pe secundă (pentru temporizator). */
  private readonly now = signal(Date.now());

  protected readonly timeLimit = computed(() => this.session()?.timeLimit ?? 0);

  /** Secunde rămase la întrebarea curentă (null = fără temporizator). */
  protected readonly remaining = computed(() => {
    const s = this.session();
    if (!s?.timeLimit) return null;
    const elapsed = (this.now() - s.questionStartedAt) / 1000;
    return Math.max(0, s.timeLimit - elapsed);
  });

  protected readonly timedOut = computed(() => this.question()?.picked === -1);

  protected readonly isLast = computed(() => {
    const s = this.session();
    return !!s && s.current === s.questions.length - 1;
  });

  constructor() {
    // Dacă nu există niciun test pornit, ne întoarcem la pagina principală
    if (!this.session()) {
      this.router.navigate(['/']);
    }

    // Temporizator: actualizăm `now` la fiecare 250ms și oprim intervalul la ieșirea din pagină
    const timer = setInterval(() => this.now.set(Date.now()), 250);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));

    // urmărim ieșirile din pagină, copierile și lipirile cât timp testul e deschis
    this.integrity.attach();
    inject(DestroyRef).onDestroy(() => this.integrity.detach());

    // Când timpul ajunge la 0 și încă nu s-a răspuns, marcăm întrebarea ca expirată
    effect(() => {
      if (this.remaining() === 0 && !this.answered()) {
        this.quiz.timeout();
      }
    });

    // După ce se răspunde, mutăm focusul pe butonul „Următoarea” (util pentru tastatură)
    effect(() => {
      if (this.answered()) {
        setTimeout(() => this.nextButton()?.nativeElement.focus());
      }
    });
  }

  protected pick(index: number): void {
    this.integrity.answered((this.session()?.current ?? 0) + 1);
    this.quiz.answer(index);
  }

  protected next(): void {
    const finished = this.quiz.next();
    if (finished) {
      // trimitem rezultatul în Google Sheets, în fundal; pagina de rezultat arată starea
      const result = this.quiz.history()[0];
      if (result) this.sheets.send(result, this.quiz.lastSession());
      this.router.navigate(['/rezultat']);
    }
  }

  protected quit(): void {
    this.quiz.quit();
    this.router.navigate(['/']);
  }

  /** Scurtături: 1-4 sau A-D pentru răspuns, Enter pentru următoarea întrebare. */
  protected onKey(event: KeyboardEvent): void {
    const q = this.question();
    if (!q || event.metaKey || event.ctrlKey || event.altKey) return;

    if (!this.answered()) {
      const key = event.key.toUpperCase();
      let index = Number(key) - 1;
      if (Number.isNaN(index)) index = this.letters.indexOf(key);
      if (index >= 0 && index < q.options.length) {
        event.preventDefault();
        this.pick(index);
      }
    } else if (event.key === 'Enter' && document.activeElement !== this.nextButton()?.nativeElement) {
      event.preventDefault();
      this.next();
    }
  }
}
