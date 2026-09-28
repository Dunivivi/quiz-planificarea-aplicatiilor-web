# QuizLab PAW

Teste grilă pentru cursul **Planificarea aplicațiilor Web** (S.04.O.019) — Angular 22, fără backend.
Aceeași aplicație ca `../quiz-programare-web-frontend`, cu alte întrebări: cele 18 teme ale cursului + caietul de sarcini, grupate în 11 module × 100 de întrebări.

## Pornire

```bash
npm install
npm start          # http://localhost:4200
```

## Module

| Modul | Teme |
| --- | --- |
| Internetul, WWW și HTTP | 1, 2 |
| Browsere, securitate și DevTools | 3, 4 |
| Aplicații Web: concepte și etape | 5 + proiectul final |
| Caietul de sarcini | 6 + exemplul „Biblioteca online a colegiului” |
| Prototipul, macheta și instrumentele | 7, 18 |
| Interfața și navigarea | 8, 9 |
| Tipografie, grafică și culori | 10, 11 |
| Formate media și regulile designului | 12, 13 |
| Publicare, găzduire și deploy | 14, 16 |
| Promovarea și mentenanța | 15 |
| HTML: structura documentului | 17 |

Cam 70% din întrebări vin direct din prezentări, restul sunt suplimentare, la același nivel.

**Evaluări** (întrebările se împart egal între module): **Examen 29.09** (temele 1–7: până la caietul de sarcini + prototipul, macheta și instrumentele de prototipare), Bazele Web, Planificarea, Designul, Lansarea și Examenul final (toate temele).

Restul funcțiilor (fără repetări, temporizator, istoric, temă dark) — vezi `../quiz-programare-web-frontend/README.md`.

## Adaugi întrebări

Întrebările sunt în `src/app/data/*.questions.ts`; modulele și evaluările în `src/app/data/modules.ts`.

## Salvarea rezultatelor în Google Sheets

Înainte de fiecare test sau examen, elevul își scrie **Nume** și **Prenume**. La final, rezultatul se trimite
automat în Google Sheets, în tab-ul **Planificare**: data, tipul (modul/examen), testul, numele, corecte, procent,
nota, durata, timpul pe întrebare, răspunsurile și informații despre dispozitiv (tip, sistem, browser, ecran,
limbă, fus orar, IP, ID dispozitiv).

Se folosește același script Google Apps Script ca la quiz-ul PHP ([`google-apps-script/Code.gs`](google-apps-script/Code.gs));
URL-ul și numele tab-ului sunt în `src/app/config.ts`.
