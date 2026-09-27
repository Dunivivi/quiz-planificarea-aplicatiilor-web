import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'QuizLab PAW',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'quiz',
    title: 'Test în desfășurare · QuizLab PAW',
    loadComponent: () => import('./pages/quiz/quiz').then((m) => m.Quiz),
  },
  {
    path: 'rezultat',
    title: 'Rezultat · QuizLab PAW',
    loadComponent: () => import('./pages/result/result').then((m) => m.Result),
  },
  {
    path: 'istoric',
    title: 'Istoric · QuizLab PAW',
    loadComponent: () => import('./pages/history/history').then((m) => m.History),
  },
  { path: '**', redirectTo: '' },
];
