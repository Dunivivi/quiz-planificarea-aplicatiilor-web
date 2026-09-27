import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EXAMS, MODULES, findModule } from '../../data/modules';
import { QuizService } from '../../services/quiz.service';
import { DurationPipe } from '../../shared/duration.pipe';

@Component({
  selector: 'app-history',
  imports: [RouterLink, DatePipe, DurationPipe],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  private readonly quiz = inject(QuizService);

  protected readonly history = this.quiz.history;
  protected readonly confirmClear = signal(false);
  protected readonly findModule = findModule;

  /** Statistici pe fiecare modul (doar cele cu cel puțin un test). */
  protected readonly perModule = computed(() =>
    [...MODULES, ...EXAMS].map((m) => {
      const results = this.history().filter((r) => r.moduleId === m.id);
      const avg = results.length
        ? Math.round(results.reduce((s, r) => s + r.percent, 0) / results.length)
        : 0;
      return {
        module: m,
        attempts: results.length,
        best: results.length ? Math.max(...results.map((r) => r.percent)) : 0,
        avg,
      };
    }).filter((x) => x.attempts > 0),
  );

  protected clear(): void {
    this.quiz.clearHistory();
    this.confirmClear.set(false);
  }

  protected levelClass(percent: number): string {
    if (percent >= 80) return 'badge--success';
    if (percent >= 50) return 'badge--warning';
    return 'badge--danger';
  }
}
