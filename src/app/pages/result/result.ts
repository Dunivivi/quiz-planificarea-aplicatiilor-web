import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { findModule } from '../../data/modules';
import { QuizService } from '../../services/quiz.service';
import { DurationPipe } from '../../shared/duration.pipe';
import { gradeFor } from '../../shared/grade';
import { ScoreRing } from '../../shared/score-ring';

type Filter = 'all' | 'wrong' | 'correct';

@Component({
  selector: 'app-result',
  imports: [RouterLink, ScoreRing, DurationPipe],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
  private readonly quiz = inject(QuizService);
  private readonly router = inject(Router);

  protected readonly letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  protected readonly session = this.quiz.lastSession;
  protected readonly module = computed(() => findModule(this.session()?.moduleId ?? ''));
  protected readonly filter = signal<Filter>('all');
  protected readonly findModule = findModule;

  /** La examene: scorul pe fiecare modul inclus. */
  protected readonly breakdown = computed(() => {
    const s = this.session();
    const includes = this.module()?.includes;
    if (!s || !includes) return [];
    return includes.map((id) => {
      const qs = s.questions.filter((q) => q.source === id);
      const correct = qs.filter((q) => q.picked === q.correct).length;
      return {
        module: findModule(id)!,
        correct,
        total: qs.length,
        percent: qs.length ? Math.round((correct / qs.length) * 100) : 0,
      };
    });
  });

  protected readonly stats = computed(() => {
    const s = this.session();
    if (!s) return null;
    const total = s.questions.length;
    const correct = s.questions.filter((q) => q.picked === q.correct).length;
    const percent = Math.round((correct / total) * 100);
    return {
      total,
      correct,
      wrong: total - correct,
      percent,
      duration: Math.round(((s.finishedAt ?? Date.now()) - s.startedAt) / 1000),
      grade: gradeFor(percent),
    };
  });

  protected readonly reviewed = computed(() => {
    const questions = (this.session()?.questions ?? []).map((q, i) => ({ ...q, number: i + 1 }));
    switch (this.filter()) {
      case 'wrong':
        return questions.filter((q) => q.picked !== q.correct);
      case 'correct':
        return questions.filter((q) => q.picked === q.correct);
      default:
        return questions;
    }
  });

  constructor() {
    if (!this.session()) this.router.navigate(['/']);
  }

  protected retry(): void {
    const s = this.session();
    if (!s) return;
    this.quiz.start(s.moduleId, s.questions.length, s.timeLimit ?? 0);
    this.router.navigate(['/quiz']);
  }
}
