import { Injectable, inject } from '@angular/core';
import { SHEETS_WEBAPP_URL, SHEET_TAB } from '../config';
import { findModule } from '../data/modules';
import { QuizResult, QuizSession } from '../models/quiz';
import { collectDevice, deviceColumns } from '../utils/device';
import { QuizService } from './quiz.service';

/**
 * Trimite rezultatul în Google Sheets, printr-o aplicație Google Apps Script.
 * Nu avem backend propriu: scriptul rulează în contul Google al profesorului
 * și adaugă un rând nou în tab-ul SHEET_TAB.
 */
@Injectable({ providedIn: 'root' })
export class SheetsService {
  private readonly quiz = inject(QuizService);

  readonly enabled = SHEETS_WEBAPP_URL.trim().length > 0;

  async send(result: QuizResult, session: QuizSession | null): Promise<boolean> {
    if (!this.enabled) {
      this.quiz.setSync(result.id, 'disabled');
      return false;
    }

    this.quiz.setSync(result.id, 'pending');
    const module = findModule(result.moduleId);
    const device = await collectDevice();
    const payload = {
      sheet: SHEET_TAB,
      id: result.id,
      row: {
        Data: new Date(result.date).toLocaleString('ro-RO'),
        Tip: module?.includes ? 'Examen' : 'Modul',
        Test: module?.name ?? result.moduleId,
        Nume: result.nume ?? '',
        Prenume: result.prenume ?? '',
        Corecte: `${result.correct}/${result.total}`,
        Procent: `${result.percent}%`,
        Nota: Math.max(1, Math.round(result.percent / 10)),
        'Durata (sec)': result.durationSec,
        'Timp/întrebare': result.timeLimit ? `${result.timeLimit}s` : 'fără',
        Răspunsuri: session ? details(session) : '',
        Semnale: result.signals ?? '',
        ...deviceColumns(device),
      },
    };

    try {
      // text/plain = „cerere simplă”: browserul nu mai face verificarea CORS preliminară,
      // pe care Apps Script nu o suportă.
      const response = await fetch(SHEETS_WEBAPP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      const json = await response.json().catch(() => ({ ok: response.ok }));
      const ok = response.ok && json.ok !== false;
      this.quiz.setSync(result.id, ok ? 'sent' : 'error');
      return ok;
    } catch {
      this.quiz.setSync(result.id, 'error');
      return false;
    }
  }
}

/** Răspunsurile pe scurt: „1. ✓ | 2. ✗ (timp expirat) | …” */
function details(session: QuizSession): string {
  return session.questions
    .map((q, i) => {
      const mark = q.picked === q.correct ? '✓' : '✗';
      const note = q.picked === -1 ? ' (timp expirat)' : '';
      return `${i + 1}. ${mark}${note} ${q.question.slice(0, 60)}`;
    })
    .join(' | ');
}
