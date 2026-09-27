import { QuizModule } from '../models/quiz';
import { APLICATII_WEB_QUESTIONS } from './aplicatii-web.questions';
import { BROWSERE_SECURITATE_QUESTIONS } from './browsere-securitate.questions';
import { CAIET_SARCINI_QUESTIONS } from './caiet-sarcini.questions';
import { HTML_STRUCTURA_QUESTIONS } from './html-structura.questions';
import { INTERFATA_NAVIGARE_QUESTIONS } from './interfata-navigare.questions';
import { INTERNET_HTTP_QUESTIONS } from './internet-http.questions';
import { MEDIA_DESIGN_QUESTIONS } from './media-design.questions';
import { PROMOVARE_MENTENANTA_QUESTIONS } from './promovare-mentenanta.questions';
import { PROTOTIPARE_QUESTIONS } from './prototipare.questions';
import { PUBLICARE_DEPLOY_QUESTIONS } from './publicare-deploy.questions';
import { TIPOGRAFIE_CULORI_QUESTIONS } from './tipografie-culori.questions';

/**
 * Modulele de bază — temele cursului „Planificarea aplicațiilor Web”,
 * grupate câte una-două pe modul.
 */
export const MODULES: QuizModule[] = [
  {
    id: 'internet-http',
    name: 'Internetul, WWW și HTTP',
    short: 'T1-2',
    description: 'Tema 1–2: rețeaua Internet, serviciul WWW, URL, cereri și răspunsuri HTTP.',
    color: '#2563eb',
    questions: INTERNET_HTTP_QUESTIONS,
  },
  {
    id: 'browsere-securitate',
    name: 'Browsere, securitate și DevTools',
    short: 'T3-4',
    description: 'Tema 3–4: browsere Web, certificate SSL/TLS, HTTPS și instrumentele pentru dezvoltatori.',
    color: '#7c3aed',
    questions: BROWSERE_SECURITATE_QUESTIONS,
  },
  {
    id: 'aplicatii-web',
    name: 'Aplicații Web: concepte și etape',
    short: 'T5',
    description: 'Tema 5: tipuri de aplicații Web, etapele elaborării și proiectul final.',
    color: '#0891b2',
    questions: APLICATII_WEB_QUESTIONS,
  },
  {
    id: 'caiet-sarcini',
    name: 'Caietul de sarcini',
    short: 'T6',
    description: 'Tema 6 + exemplul „Biblioteca online a colegiului”: structură, cerințe, recepție.',
    color: '#b45309',
    questions: CAIET_SARCINI_QUESTIONS,
  },
  {
    id: 'prototipare',
    name: 'Prototipul, macheta și instrumentele',
    short: 'T7',
    description: 'Tema 7 și 18: wireframe, machetă, prototip și instrumente de prototipare.',
    color: '#db2777',
    questions: PROTOTIPARE_QUESTIONS,
  },
  {
    id: 'interfata-navigare',
    name: 'Interfața și navigarea',
    short: 'T8-9',
    description: 'Tema 8–9: interfața, pagina de start și sistemele de navigare.',
    color: '#059669',
    questions: INTERFATA_NAVIGARE_QUESTIONS,
  },
  {
    id: 'tipografie-culori',
    name: 'Tipografie, grafică și culori',
    short: 'T10-11',
    description: 'Tema 10–11: fonturi, lizibilitate, grafică și utilizarea culorilor în design.',
    color: '#e11d48',
    questions: TIPOGRAFIE_CULORI_QUESTIONS,
  },
  {
    id: 'media-design',
    name: 'Formate media și regulile designului',
    short: 'T12-13',
    description: 'Tema 12–13: formate grafice, audio, video și principiile unui design bun.',
    color: '#9333ea',
    questions: MEDIA_DESIGN_QUESTIONS,
  },
  {
    id: 'publicare-deploy',
    name: 'Publicare, găzduire și deploy',
    short: 'T14-16',
    description: 'Tema 14 și 16: domenii, hosting, publicare, GitHub Pages și Netlify.',
    color: '#4f46e5',
    questions: PUBLICARE_DEPLOY_QUESTIONS,
  },
  {
    id: 'promovare-mentenanta',
    name: 'Promovarea și mentenanța',
    short: 'T15',
    description: 'Tema 15: SEO, promovare, analiză și întreținerea aplicației Web.',
    color: '#ca8a04',
    questions: PROMOVARE_MENTENANTA_QUESTIONS,
  },
  {
    id: 'html-structura',
    name: 'HTML: structura documentului',
    short: 'T17',
    description: 'Tema 17: structura unui document HTML, head, body și elementele semantice.',
    color: '#ea580c',
    questions: HTML_STRUCTURA_QUESTIONS,
  },
];

/** Creează un examen din mai multe module de bază. */
function exam(def: Omit<QuizModule, 'questions'> & { includes: string[] }): QuizModule {
  const parts = def.includes.map((id) => MODULES.find((m) => m.id === id)!);
  return { ...def, questions: parts.flatMap((m) => m.questions) };
}

/** Examenele combină mai multe module; întrebările se împart egal între ele. */
export const EXAMS: QuizModule[] = [
  exam({
    id: 'exam-29-09',
    name: 'Examen 29.09',
    short: '29.09',
    description: 'Examen model: temele 1–7, de la Internet și HTTP până la caietul de sarcini, prototip și machetă.',
    color: '#dc2626',
    includes: ['internet-http', 'browsere-securitate', 'aplicatii-web', 'caiet-sarcini', 'prototipare'],
  }),
  exam({
    id: 'exam-baze',
    name: 'Evaluare 1 · Bazele Web',
    short: 'E1',
    description: 'Internetul, HTTP, browserele și securitatea.',
    color: '#2563eb',
    includes: ['internet-http', 'browsere-securitate'],
  }),
  exam({
    id: 'exam-planificare',
    name: 'Evaluare 2 · Planificarea',
    short: 'E2',
    description: 'De la idee la documentație: etapele aplicației, caietul de sarcini și prototipul.',
    color: '#b45309',
    includes: ['aplicatii-web', 'caiet-sarcini', 'prototipare'],
  }),
  exam({
    id: 'exam-design',
    name: 'Evaluare 3 · Designul',
    short: 'E3',
    description: 'Interfață, navigare, tipografie, culori, formate media și regulile designului.',
    color: '#db2777',
    includes: ['interfata-navigare', 'tipografie-culori', 'media-design'],
  }),
  exam({
    id: 'exam-lansare',
    name: 'Evaluare 4 · Lansarea',
    short: 'E4',
    description: 'Structura HTML, publicarea, deploy-ul, promovarea și mentenanța.',
    color: '#4f46e5',
    includes: ['html-structura', 'publicare-deploy', 'promovare-mentenanta'],
  }),
  exam({
    id: 'exam-final',
    name: 'Examen final',
    short: 'ALL',
    description: 'Toate temele cursului — pentru recapitularea finală.',
    color: '#0f766e',
    includes: MODULES.map((m) => m.id),
  }),
];

/** Caută un modul sau un examen după id. */
export function findModule(id: string): QuizModule | undefined {
  return MODULES.find((m) => m.id === id) ?? EXAMS.find((e) => e.id === id);
}
