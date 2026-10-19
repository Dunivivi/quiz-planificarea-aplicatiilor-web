import { Question } from '../models/question';

/**
 * Întrebări noi despre caietul de sarcini „Biblioteca online a colegiului”
 * (cerințe funcționale, nefuncționale, tehnice, recepție etc.), de dificultate amestecată.
 * Sunt folosite ca întrebări prioritare în „Examen 20.10” (70% din test).
 */
export const CAIET_SARCINI_NOU_QUESTIONS: Question[] = [
  {
    question:
      'Prin ce structură a instituției este Colegiul Tehnologic din Chișinău beneficiarul aplicației „Biblioteca online a colegiului”?',
    options: [
      'Prin biblioteca instituției',
      'Prin serviciul TI al colegiului',
      'Prin direcțiunea colegiului',
      'Prin consiliul elevilor',
    ],
    correct: 0,
    explanation:
      'Secțiunea 1.1: Beneficiar este Colegiul Tehnologic din Chișinău, prin biblioteca instituției.',
  },
  {
    question:
      'Care este adresa Web planificată a aplicației, conform paginii de titlu a caietului de sarcini?',
    options: [
      'https://colegiu.md/biblioteca',
      'https://biblioteca.colegiu.md',
      'https://biblioteca-online.md',
      'https://catalog.colegiu.md',
    ],
    correct: 1,
    explanation: 'Pagina de titlu indică adresa Web planificată https://biblioteca.colegiu.md.',
  },
  {
    question:
      'Câți bibliotecari sunt prevăzuți ca utilizatori ai aplicației, conform secțiunii 1.4?',
    options: ['1 persoană', '3 persoane', '2 persoane', '5 persoane'],
    correct: 2,
    explanation:
      'Secțiunea 1.4: Bibliotecarul (2 persoane); administratorul aplicației este 1 persoană, din serviciul TI.',
  },
  {
    question: 'Cine este „Executantul” în tabelul de noțiuni al caietului de sarcini?',
    options: [
      'Colegiul care comandă și recepționează lucrarea',
      'Bibliotecarul care folosește Aplicația',
      'Administratorul din serviciul TI al colegiului',
      'Persoana fizică sau juridică ce elaborează Aplicația în baza contractului semnat',
    ],
    correct: 3,
    explanation:
      'Tabelul 1.1: Executantul elaborează Aplicația în baza contractului; instituția care comandă este Beneficiarul.',
  },
  {
    question:
      'Cum este descrisă o „Publicație” în tabelul de noțiuni, în raport cu exemplarele ei?',
    options: [
      'Titlu din fondul bibliotecii, descris o singură dată în catalog, care poate avea mai multe exemplare',
      'Unitate fizică identificată prin cod de inventar unic',
      'Orice carte împrumutată unui cititor',
      'Fiecare copie fizică are propria fișă de publicație în catalog',
    ],
    correct: 0,
    explanation:
      'Tabelul 1.1: publicația este titlul, descris o singură dată; exemplarul este unitatea fizică, cu cod de inventar unic.',
  },
  {
    question: 'Ce este o „Rezervare”, conform tabelului de noțiuni?',
    options: [
      'Eliberarea unui exemplar unui cititor pe un termen stabilit',
      'Blocarea temporară a unui exemplar disponibil în favoarea unui cititor, până la ridicarea lui de la bibliotecă',
      'Un împrumut nerestituit după expirarea termenului',
      'Înregistrarea automată a acțiunilor utilizatorilor',
    ],
    correct: 1,
    explanation:
      'Tabelul 1.1: rezervarea blochează temporar un exemplar disponibil; eliberarea pe termen este împrumutul.',
  },
  {
    question:
      'Câte persoane are categoria „Administratorul aplicației” și din ce serviciu face parte?',
    options: [
      '2 persoane, din biblioteca colegiului',
      '1 persoană, din direcțiunea colegiului',
      '1 persoană, din serviciul TI al colegiului',
      '70 de persoane, din corpul didactic',
    ],
    correct: 2,
    explanation:
      'Secțiunea 1.4: Administratorul aplicației este 1 persoană, din serviciul TI; el gestionează conturile, rolurile și jurnalul.',
  },
  {
    question:
      'Ce cerință concretă decurge din Legea nr. 142/2023 privind securitatea cibernetică, conform tabelului 1.2?',
    options: [
      'Publicarea textului integral al publicațiilor în catalog',
      'Catalogul accesibil fără autentificare și fără plată',
      'Contrast minim și navigare completă de la tastatură',
      'Transmiterea cifrată a datelor (HTTPS), parole doar ca amprentă criptografică și jurnalizarea evenimentelor de securitate',
    ],
    correct: 3,
    explanation:
      'Tabelul 1.2, rândul 3: HTTPS, parole ca amprentă criptografică, jurnalizarea evenimentelor de securitate.',
  },
  {
    question:
      'Ce interzice Legea nr. 139/2010 privind dreptul de autor, conform cerinței care decurge din ea în tabelul 1.2?',
    options: [
      'Publicarea textului integral al publicațiilor protejate',
      'Publicarea datelor bibliografice ale publicațiilor',
      'Publicarea copertei în catalog',
      'Căutarea publicațiilor după autor',
    ],
    correct: 0,
    explanation:
      'Tabelul 1.2: în catalog se publică datele bibliografice și coperta, dar nu textul integral al publicațiilor protejate.',
  },
  {
    question:
      'Ce date de intrare folosește cititorul la pasul 2 al fluxului „Rezervarea și împrumutul unei publicații” (autentificarea)?',
    options: [
      'Titlu, autor sau cuvânt-cheie',
      'Număr matricol și parolă',
      'Codul de inventar al exemplarului',
      'Adresa de e-mail și codul ISBN',
    ],
    correct: 1,
    explanation:
      'Tabelul 3.1, pasul 2: date de intrare - număr matricol și parolă; rezultat - sesiune activă.',
  },
  {
    question: 'Ce este „jurnalizarea”, conform tabelului de noțiuni?',
    options: [
      'Înregistrarea manuală a împrumuturilor pe fișe de hârtie',
      'Transmiterea cifrată a datelor între browser și server',
      'Înregistrarea automată a evenimentelor: data și ora, utilizatorul, acțiunea, obiectul afectat',
      'Blocarea temporară a unui exemplar disponibil',
    ],
    correct: 2,
    explanation:
      'Tabelul 1.1: jurnalizarea este înregistrarea automată a evenimentelor, cu data și ora, utilizatorul, acțiunea și obiectul afectat.',
  },
  {
    question:
      'Ce valoare maximă are timpul mediu de eliberare a unei publicații rezervate la ghișeu, conform obiectivului O3?',
    options: ['30 de secunde', '5 minute', '10 minute', '2 minute'],
    correct: 3,
    explanation:
      'Obiectivul O3: timpul mediu de eliberare a unei publicații rezervate nu depășește 2 minute.',
  },
  {
    question: 'Care obiectiv urmărește retragerea din uz a registrului pe hârtie?',
    options: ['O4', 'O1', 'O3', 'O5'],
    correct: 0,
    explanation:
      'Obiectivul O4: evidența împrumuturilor și a restanțelor se ține exclusiv în Aplicație; registrul pe hârtie este retras din uz.',
  },
  {
    question:
      'Care dintre problemele din situația curentă decurge direct din lipsa unei notificări automate?',
    options: [
      'Elevul nu poate vedea coperta publicației',
      'Restanțele se depistează târziu, la inventarierea anuală',
      'Fișierul XLSX are prea puține rânduri',
      'Bibliotecarul nu poate înregistra împrumuturi',
    ],
    correct: 1,
    explanation:
      'Secțiunea 2.1: restanțele se depistează târziu, la inventarierea anuală, pentru că nu există nicio notificare automată.',
  },
  {
    question: 'Ce se întâmplă cu fișierul de calcul existent (XLSX, aproximativ 5 200 de rânduri)?',
    options: [
      'Rămâne exclusiv la bibliotecar, iar catalogul se reintroduce manual',
      'Se șterge înainte de punerea în funcțiune',
      'Se predă Executantului la semnarea contractului și este sursa migrării datelor',
      'Se publică elevilor ca anexă a caietului de sarcini',
    ],
    correct: 2,
    explanation:
      'Secțiunea 2.1: fișierul se predă Executantului la semnarea contractului și constituie sursa migrării (capitolul 8, Anexa B).',
  },
  {
    question:
      'Cine poate vedea istoricul de împrumut al unui cititor, conform cerinței care decurge din Legea nr. 133/2011?',
    options: [
      'Orice vizitator al catalogului public',
      'Toți cititorii autentificați',
      'Doar administratorul aplicației',
      'Doar cititorul respectiv și bibliotecarul',
    ],
    correct: 3,
    explanation:
      'Tabelul 1.2, rândul 1: istoricul de împrumut este vizibil doar cititorului respectiv și bibliotecarului.',
  },
  {
    question:
      'Când este notificat cititorul înainte de termenul de restituire și prin ce mijloc, conform fluxului din tabelul 3.1?',
    options: [
      'Cu 3 zile înainte de expirare, prin mesaj de e-mail',
      'Cu 1 zi înainte de expirare, prin SMS',
      'Cu 7 zile înainte de expirare, prin e-mail',
      'La expirarea termenului, prin mesaj în Aplicație',
    ],
    correct: 0,
    explanation: 'Tabelul 3.1, pasul 6: mesaj de e-mail cu 3 zile înainte de expirare.',
  },
  {
    question:
      'Ce se întâmplă cu rezervarea în momentul în care bibliotecarul eliberează exemplarul la ghișeu (pasul 5 din flux)?',
    options: [
      'Rămâne activă până expiră după 48 de ore',
      'Se închide, iar în locul ei se înregistrează împrumutul',
      'Este anulată, iar exemplarul revine în starea „disponibil”',
      'Se transformă în restanță',
    ],
    correct: 1,
    explanation:
      'Tabelul 3.1, pasul 5: împrumut înregistrat, termen 14 zile, rezervarea se închide.',
  },
  {
    question:
      'Ce calculează automat Aplicația când bibliotecarul înregistrează restituirea unui exemplar (pasul 7)?',
    options: [
      'Numărul de rezervări active ale cititorului',
      'Data următoarei rezervări',
      'Întârzierea',
      'Costul penalizării în lei',
    ],
    correct: 2,
    explanation:
      'Tabelul 3.1, pasul 7: exemplar disponibil, împrumut închis, întârzierea calculată automat.',
  },
  {
    question:
      'Care dintre următoarele NU este una dintre stările posibile ale unui exemplar, conform tabelului 3.2?',
    options: ['Disponibil', 'Rezervat', 'Retras', 'Pierdut'],
    correct: 3,
    explanation:
      'Tabelul 3.2: starea exemplarului poate fi disponibil, rezervat, împrumutat sau retras; „pierdut” nu apare.',
  },
  {
    question:
      'Care obiect informațional are atributele „credențiale, rolul, data ultimei autentificări”?',
    options: ['Utilizator', 'Cititor', 'Eveniment jurnalizat', 'Rezervare'],
    correct: 0,
    explanation:
      'Tabelul 3.2, obiectul 6: Utilizator. Cititorul are nume, prenume, număr matricol, grupa sau catedra, e-mail și starea contului.',
  },
  {
    question: 'De ce sunt „Publicație” și „Exemplar” două obiecte informaționale distincte?',
    options: [
      'Pentru că exemplarul are mai multe atribute decât publicația',
      'Publicația se descrie o singură dată, iar fiecare exemplar are cod de inventar și stare proprie',
      'Pentru că publicațiile nu pot fi rezervate, doar exemplarele de revistă',
      'Pentru ca fiecare cititor să aibă propria copie a descrierii',
    ],
    correct: 1,
    explanation:
      'Tabelele 1.1 și 3.2: descrierea bibliografică este una, iar exemplarele (cu cod de inventar unic și stare) se rezervă și se împrumută separat.',
  },
  {
    question: 'Cui este accesibilă componenta „Rapoarte”, conform tabelului 4.1?',
    options: [
      'Tuturor, fără autentificare',
      'Cititorilor autentificați',
      'Bibliotecarului și administratorului',
      'Numai administratorului',
    ],
    correct: 2,
    explanation:
      'Tabelul 4.1, componenta 5: Rapoarte - accesibilă bibliotecarului și administratorului.',
  },
  {
    question:
      'Conform tabelului din tema 6, cine răspunde pentru bugetul și termenele asumate prin caietul de sarcini?',
    options: [
      'Executantul, care citește documentul',
      'Analistul TI, redactorul documentului',
      'Bibliotecarul, ca utilizator principal',
      'Conducătorul instituției, care aprobă documentul prin semnătură',
    ],
    correct: 3,
    explanation:
      'Tema 6: conducătorul instituției aprobă documentul prin semnătură și răspunde pentru buget și termene.',
  },
  {
    question:
      'Un cititor rezervă un exemplar marți la ora 14:00. Până când este valabilă rezervarea, conform pasului 3 din fluxul de lucru?',
    options: [
      'Joi, ora 14:00',
      'Miercuri, ora 14:00',
      'Vineri, ora 14:00',
      'Marți, la sfârșitul zilei',
    ],
    correct: 0,
    explanation:
      'Tabelul 3.1, pasul 3: rezervarea este valabilă 48 de ore, adică până joi la 14:00.',
  },
  {
    question:
      'Un împrumut este eliberat pe 1 martie. Conform fluxului din tabelul 3.1, care sunt termenul de restituire și data notificării prin e-mail?',
    options: [
      'Termen 14 martie; notificare pe 11 martie',
      'Termen 15 martie; notificare pe 12 martie',
      'Termen 15 martie; notificare pe 14 martie',
      'Termen 29 martie; notificare pe 26 martie',
    ],
    correct: 1,
    explanation:
      'Pasul 5: termen 14 zile (1 + 14 = 15 martie); pasul 6: notificare cu 3 zile înainte, deci 12 martie.',
  },
  {
    question:
      'La recepție, beneficiarul cere executantului și o aplicație mobilă nativă pentru bibliotecă. Ce este corect, conform secțiunilor 1.1 și 2.2?',
    options: [
      'Executantul trebuie s-o livreze, deoarece biblioteca se folosește de pe telefon',
      'Cerința se acceptă verbal, dacă ambele părți sunt de acord',
      'Cerința nu este inclusă; orice modificare se face în scris, prin act adițional semnat de ambele părți',
      'Aplicația mobilă nativă face parte din cele 12 luni de garanție',
    ],
    correct: 2,
    explanation:
      'Secțiunea 2.2 exclude aplicația mobilă nativă, iar 1.1 spune că ce nu e în caiet nu se poate pretinde și modificările se fac prin act adițional.',
  },
  {
    question:
      'Într-o lună se înregistrează 400 de împrumuturi. Câte dintre ele trebuie să pornească de la o rezervare online pentru a respecta obiectivul O2?',
    options: ['Cel puțin 160', 'Cel puțin 200', 'Cel puțin 300', 'Cel puțin 240'],
    correct: 3,
    explanation:
      'Obiectivul O2: cel puțin 60 % dintre împrumuturile lunare pornesc de la o rezervare online; 60 % din 400 = 240.',
  },
  {
    question:
      'O publicație are 3 exemplare: unul „rezervat”, unul „împrumutat” și unul „disponibil”. Câte exemplare disponibile indică catalogul public pentru ea?',
    options: ['1', '0', '2', '3'],
    correct: 0,
    explanation:
      'Catalogul indică numărul de exemplare disponibile în timp real (O1); doar exemplarul în starea „disponibil” se numără.',
  },
  {
    question:
      'Care dintre perechile acțiune - rol este corectă, conform tabelului 4.2 al drepturilor rolurilor?',
    options: [
      'Vizitatorul poate vizualiza istoricul propriu de împrumut',
      'Bibliotecarul poate genera rapoarte',
      'Cititorul poate înregistra împrumuturi și restituiri',
      'Bibliotecarul poate consulta jurnalul de evenimente',
    ],
    correct: 1,
    explanation:
      'Tabelul 4.2: generarea rapoartelor - bibliotecar și administrator; jurnalul este doar al administratorului.',
  },
  {
    question:
      'Care dintre următoarele informații NU face parte din datele afișate pentru fiecare publicație în catalog, conform CF 01.01?',
    options: [
      'Prețul de achiziție al publicației',
      'Cota publicației',
      'ISBN-ul',
      'Numărul de exemplare disponibile la momentul consultării',
    ],
    correct: 0,
    explanation:
      'CF 01.01 enumeră titlul, autorii, editura, anul, ISBN, domeniul, limba, cota, numărul total de exemplare și numărul celor disponibile; prețul nu apare.',
  },
  {
    question: 'Câte rezultate se afișează pe o pagină în catalogul public, conform CF 01.04?',
    options: ['10', '25', '20', '50'],
    correct: 2,
    explanation:
      'CF 01.04 prevede afișarea paginată, câte 20 de rezultate pe pagină, cu ordonare după titlu, autor și an.',
  },
  {
    question: 'Ce obligativitate are CF 01.07 și ce cere această cerință?',
    options: [
      'M — fișa publicației afișează exact 5 publicații din același domeniu',
      'R — fișa publicației afișează o listă de până la 5 publicații din același domeniu',
      'R — fișa publicației afișează o listă de cel mult 20 de publicații recente',
      'O — fișa publicației afișează publicațiile împrumutate de același cititor',
    ],
    correct: 1,
    explanation:
      'CF 01.07 este recomandată (R) și cere o listă de până la 5 publicații din același domeniu pe fișa publicației.',
  },
  {
    question: 'Care dintre următoarele criterii de căutare NU este prevăzut de CF 01.02?',
    options: [
      'Căutarea după titlu',
      'Căutarea după ISBN',
      'Căutarea după cuvinte-cheie din descriere',
      'Căutarea după cota exemplarului',
    ],
    correct: 3,
    explanation:
      'CF 01.02 permite căutarea după titlu, autor, ISBN și cuvinte-cheie din descriere, nu după cotă.',
  },
  {
    question: 'De ce cere CF 01.03 ca filtrele aplicate să se reflecte în adresa paginii?',
    options: [
      'Pentru ca filtrele să fie păstrate în jurnalul de evenimente',
      'Pentru ca rezultatele să fie afișate câte 20 pe pagină',
      'Pentru ca filtrele să funcționeze și fără autentificare',
      'Pentru ca rezultatul filtrării să poată fi transmis prin legătură',
    ],
    correct: 3,
    explanation:
      'Conform CF 01.03, filtrele sunt reflectate în adresă tocmai pentru ca rezultatul să poată fi trimis prin legătură.',
  },
  {
    question:
      'Ce se afișează în fișa publicației, conform CF 01.05, pentru un exemplar care este împrumutat?',
    options: [
      'Numele cititorului care l-a împrumutat',
      'Data la care expiră termenul de restituire',
      'Data la care a fost eliberat',
      'Numărul de prelungiri ale împrumutului',
    ],
    correct: 1,
    explanation:
      'CF 01.05 cere afișarea datei la care expiră termenul de restituire; datele cititorului nu apar în catalogul public.',
  },
  {
    question:
      'Un vizitator aplică în catalog trei filtre și nu obține niciun rezultat. Ce trebuie să facă Aplicația, conform CF 01.06?',
    options: [
      'Să afișeze un mesaj explicit și să propună eliminarea filtrelor aplicate',
      'Să afișeze automat toate publicațiile din catalog',
      'Să elimine tăcut filtrele și să reia căutarea',
      'Să afișeze o pagină goală, fără mesaj',
    ],
    correct: 0,
    explanation:
      'CF 01.06 cere un mesaj explicit și propunerea de eliminare a filtrelor atunci când căutarea nu returnează rezultate.',
  },
  {
    question:
      'Un vizitator neautentificat dorește să rezerve un exemplar direct din catalogul public. Ce rezultă din document?',
    options: [
      'Poate, dar rezervarea expiră după 24 de ore',
      'Poate, dacă exemplarul este în starea „disponibil”',
      'Nu poate: catalogul public nu permite operațiuni asupra exemplarelor, iar rezervarea cere rolul Cititor',
      'Poate, dar numai cu aprobarea bibliotecarului',
    ],
    correct: 2,
    explanation:
      'Secțiunea 5.1 precizează că Catalogul public nu permite nicio operațiune, iar în tabelul 4.2 Vizitatorul are „nu” la rezervare.',
  },
  {
    question: 'Cu ce date se poate autentifica un cititor, conform CF 02.01?',
    options: [
      'Doar cu numele și prenumele, împreună cu parola',
      'Cu numărul matricol sau adresa de e-mail instituțională, împreună cu parola',
      'Cu adresa de e-mail personală și un cod primit prin SMS',
      'Doar cu numărul matricol, fără parolă',
    ],
    correct: 1,
    explanation:
      'CF 02.01 prevede autentificarea cu număr matricol sau e-mail instituțional și parolă.',
  },
  {
    question:
      'Un cititor primește pe e-mail o legătură de restabilire a parolei, o folosește după 30 de minute și schimbă parola. După încă 10 minute o deschide a doua oară. Ce se întâmplă, conform CF 02.02?',
    options: [
      'Legătura funcționează, deoarece este valabilă 60 de minute',
      'Legătura funcționează, dar doar pentru vizualizarea contului',
      'Legătura nu mai funcționează, deoarece valabilitatea ei este de doar 15 minute',
      'A doua utilizare nu mai este posibilă, deoarece legătura este utilizabilă o singură dată',
    ],
    correct: 3,
    explanation:
      'Conform CF 02.02, legătura este valabilă 60 de minute, dar poate fi folosită o singură dată.',
  },
  {
    question:
      'Un cititor rezervă un exemplar luni la ora 10:00 și nu se prezintă să-l ridice. Ce se întâmplă, conform CF 02.03?',
    options: [
      'Marți la 10:00 rezervarea expiră, iar exemplarul rămâne blocat până decide bibliotecarul',
      'Joi la 10:00 rezervarea expiră, iar cititorul este blocat 15 minute',
      'Miercuri la 10:00 rezervarea expiră automat, iar exemplarul revine în starea „disponibil”',
      'Rezervarea rămâne activă până când cititorul o anulează',
    ],
    correct: 2,
    explanation:
      'CF 02.03 păstrează rezervarea 48 de ore; apoi expiră automat, iar exemplarul redevine „disponibil”.',
  },
  {
    question: 'Care dintre următoarele cerințe funcționale are obligativitatea O (opțională)?',
    options: [
      'CF 02.08 — lista personală „De citit”',
      'CF 01.07 — publicații din același domeniu',
      'CF 03.06 — numărul restanțelor la deschiderea componentei',
      'CF 05.04 — raportul „Fondul de carte pe domenii”',
    ],
    correct: 0,
    explanation:
      'CF 02.08 este singura opțională (O) dintre ele; CF 01.07, CF 03.06 și CF 05.04 sunt recomandate (R).',
  },
  {
    question:
      'Un cititor are 3 rezervări active, dar una dintre ele expiră automat după 48 de ore. Poate el face o nouă rezervare imediat după aceea, conform CF 02.04?',
    options: [
      'Nu, deoarece limita se aplică rezervărilor făcute în ultimele 24 de ore',
      'Nu, deoarece limita de 3 rezervări se aplică pe toată durata contului',
      'Da, deoarece mai are doar 2 rezervări active, iar limita este de 3',
      'Da, dar numai cu acordul bibliotecarului',
    ],
    correct: 2,
    explanation:
      'CF 02.04 limitează doar rezervările active simultan; după expirare rămân 2 active, deci o nouă rezervare este permisă.',
  },
  {
    question:
      'Pentru ce perioadă afișează contul cititorului istoricul împrumuturilor, conform CF 02.05?',
    options: [
      'Ultimele 24 de luni',
      'Ultimele 12 luni',
      'Ultimele 6 luni',
      'Întreaga existență a contului',
    ],
    correct: 0,
    explanation:
      'CF 02.05 cere afișarea istoricului împrumuturilor din ultimele 24 de luni, într-o secțiune distinctă.',
  },
  {
    question:
      'Care dintre cititorii de mai jos poate prelungi termenul unui împrumut, conform CF 02.06?',
    options: [
      'Cel care a prelungit deja acel împrumut o dată',
      'Cel a cărui publicație este rezervată de alt cititor',
      'Cel care are o restanță la o altă publicație',
      'Cel care solicită prima prelungire pentru o publicație nerezervată de alții și nu are restanțe',
    ],
    correct: 3,
    explanation:
      'CF 02.06 permite prelungirea cu 7 zile, o singură dată pe împrumut, doar dacă publicația nu e rezervată de altcineva și cititorul nu are restanțe.',
  },
  {
    question: 'Când transmite Aplicația mesaje automate de e-mail cititorului, conform CF 02.07?',
    options: [
      'Cu 7 zile înainte de expirarea termenului și la fiecare 7 zile după depășire',
      'Cu 3 zile înainte de expirarea termenului și în ziua în care termenul a fost depășit',
      'Doar în ziua în care termenul a fost depășit',
      'Numai la cererea bibliotecarului',
    ],
    correct: 1,
    explanation:
      'CF 02.07 prevede două mesaje automate: cu 3 zile înainte de expirare și în ziua depășirii termenului.',
  },
  {
    question: 'Ce elemente are, conform introducerii secțiunii 5, fiecare cerință funcțională?',
    options: [
      'Un identificator unic, un grad de obligativitate (M, R sau O) și o descriere',
      'Un identificator unic, un termen de execuție și un cost estimat',
      'Un număr de pagină, un autor și o descriere',
      'Un grad de obligativitate, o dată de recepție și un responsabil',
    ],
    correct: 0,
    explanation:
      'Secțiunea 5 precizează: identificator unic, grad de obligativitate M/R/O și o descriere verificabilă la recepție.',
  },
  {
    question:
      'Cum identifică bibliotecarul exemplarul și cititorul la înregistrarea unui împrumut, conform CF 03.01?',
    options: [
      'Exemplarul prin ISBN, iar cititorul prin adresa de e-mail',
      'Exemplarul prin cotă, iar cititorul doar prin număr matricol',
      'Exemplarul după titlu, iar cititorul după parolă',
      'Exemplarul prin codul de inventar, iar cititorul după nume sau număr matricol',
    ],
    correct: 3,
    explanation:
      'CF 03.01 cere codul de inventar al exemplarului și identificarea cititorului după nume sau număr matricol.',
  },
  {
    question: 'Ce lanț de trasabilitate ilustrează cursul pentru cerința CF 05.03?',
    options: [
      'Cerința CF 05.03, contractul, factura finală',
      'Cerința CF 05.03, scenariul de testare CF 05.03, rândul CF 05.03 din procesul-verbal de recepție',
      'Cerința CF 05.03, prețul ofertei, jurnalul de evenimente',
      'Cerința CF 05.03, manualul utilizatorului, garanția',
    ],
    correct: 1,
    explanation:
      'Același identificator leagă cerința, scenariul de testare și rândul din procesul-verbal, ceea ce asigură trasabilitatea.',
  },
  {
    question:
      'Un cititor a returnat un exemplar cu 7 zile după termen. Ce face automat Aplicația la înregistrarea restituirii, conform CF 03.02?',
    options: [
      'Blochează contul cititorului pentru 15 minute',
      'Trimite exemplarul în starea „casat”',
      'Calculează numărul de zile de întârziere și trece exemplarul în starea „disponibil”',
      'Calculează întârzierea, dar lasă starea exemplarului neschimbată până la confirmarea administratorului',
    ],
    correct: 2,
    explanation:
      'CF 03.02: la restituire, introdusă prin codul de inventar, Aplicația calculează întârzierea și trece exemplarul în „disponibil”.',
  },
  {
    question:
      'Un cititor are o restanță de 35 de zile și vrea să împrumute o carte nouă. Ce se întâmplă conform CF 03.03?',
    options: [
      'Aplicația permite împrumutul, dar cu un termen redus la 7 zile',
      'Aplicația refuză împrumutul fără a afișa niciun motiv',
      'Aplicația refuză împrumutul și afișează motivul, cu lista publicațiilor nerestituite',
      'Aplicația permite împrumutul și trimite un e-mail administratorului',
    ],
    correct: 2,
    explanation:
      'CF 03.03: pentru restanțe mai vechi de 30 de zile, refuzul este obligatoriu, cu motiv și lista publicațiilor nerestituite.',
  },
  {
    question:
      'Un cititor are o restanță de 20 de zile. Ce impune CF 03.03 în privința unui împrumut nou?',
    options: [
      'Impune refuzul, deoarece orice restanță blochează împrumuturile',
      'Nu impune refuzul, deoarece restanța nu este mai veche de 30 de zile',
      'Impune refuzul doar dacă cititorul este cadru didactic',
      'Impune blocarea contului pentru 15 minute',
    ],
    correct: 1,
    explanation:
      'CF 03.03 se aplică restanțelor mai vechi de 30 de zile; una de 20 de zile nu declanșează refuzul prevăzut de această cerință.',
  },
  {
    question:
      'Ce trebuie indicat obligatoriu când bibliotecarul marchează o rezervare ca „anulată”, conform CF 03.04?',
    options: [
      'Numele administratorului care aprobă',
      'Data expirării termenului de restituire',
      'Numărul matricol al bibliotecarului',
      'Motivul anulării',
    ],
    correct: 3,
    explanation:
      'CF 03.04: rezervările pot fi marcate „eliberată” sau „anulată”, cu indicarea motivului anulării; lista este ordonată după data creării.',
  },
  {
    question:
      'Singurul exemplar al unei publicații este marcat de bibliotecar ca pierdut. Ce se întâmplă cu publicația în catalog, conform CF 03.05?',
    options: [
      'Rămâne vizibilă în catalog, iar exemplarul iese din numărul celor disponibile',
      'Este ștearsă automat din catalog',
      'Rămâne vizibilă, iar exemplarul este considerat în continuare disponibil',
      'Este ascunsă din catalog până la cumpărarea unui exemplar nou',
    ],
    correct: 0,
    explanation:
      'CF 03.05 cere ca exemplarul să iasă din numărul celor disponibile, iar publicația să rămână vizibilă; marcarea se face cu motiv și dată.',
  },
  {
    question:
      'Ce afișează Aplicația bibliotecarului la deschiderea componentei „Gestiunea împrumuturilor”, conform CF 03.06?',
    options: [
      'Lista tuturor cititorilor cu cont activ',
      'Numărul restanțelor curente și al rezervărilor care expiră în ziua respectivă',
      'Numărul împrumuturilor din ultimele 24 de luni',
      'Raportul „Cele mai solicitate 20 de publicații”',
    ],
    correct: 1,
    explanation:
      'CF 03.06 (recomandată) cere afișarea numărului restanțelor curente și al rezervărilor care expiră în ziua respectivă.',
  },
  {
    question: 'Ce cere CF 04.01 privind gestionarea publicațiilor și a exemplarelor?',
    options: [
      'Adăugarea, modificarea și retragerea lor prin interfață Web, fără cunoștințe de programare și fără intervenție directă în baza de date',
      'Adăugarea lor numai de către dezvoltator, direct în baza de date',
      'Adăugarea și ștergerea lor definitivă prin interfață Web',
      'Modificarea lor numai prin import dintr-un fișier CSV',
    ],
    correct: 0,
    explanation:
      'CF 04.01 impune administrarea prin interfață Web, fără programare și fără acces direct la baza de date.',
  },
  {
    question:
      'Bibliotecarul importă un fișier CSV cu 200 de linii, dintre care 5 conțin erori. Ce prevede CF 04.02?',
    options: [
      'Importul se oprește la prima eroare și nu se importă nimic',
      'Importul continuă, iar liniile eronate se șterg fără raport',
      'Importul continuă, iar la final se afișează numărul liniilor importate și lista celor respinse, cu motivul fiecăreia',
      'Importul continuă, iar raportul indică doar numărul liniilor respinse, fără motive',
    ],
    correct: 2,
    explanation:
      'CF 04.02: liniile cu erori nu întrerup importul; raportul final cuprinde liniile importate și cele respinse, cu motiv pentru fiecare.',
  },
  {
    question: 'Câte roluri poate avea un utilizator la un moment dat, conform CF 04.03?',
    options: [
      'Cel mult două',
      'Oricâte, dacă le atribuie administratorul',
      'Trei, câte unul pentru fiecare componentă accesibilă',
      'Unul singur',
    ],
    correct: 3,
    explanation:
      'CF 04.03 stabilește patru roluri (Vizitator, Cititor, Bibliotecar, Administrator) și precizează că un utilizator are un singur rol la un moment dat.',
  },
  {
    question: 'Care dintre următoarele operațiuni se jurnalizează conform CF 04.04?',
    options: [
      'Toate căutările făcute în catalogul public',
      'Doar ștergerile de conturi',
      'Vizualizările fișelor de publicații de către vizitatori',
      'Autentificările, modificările catalogului și operațiunile de împrumut',
    ],
    correct: 3,
    explanation:
      'CF 04.04 jurnalizează autentificările, modificările catalogului și operațiunile de împrumut, cu data și ora, utilizatorul, acțiunea și obiectul afectat.',
  },
  {
    question:
      'O publicație are două exemplare împrumutate. Bibliotecarul încearcă s-o șteargă. Ce se întâmplă, conform CF 04.05?',
    options: [
      'Publicația este ștearsă, iar împrumuturile rămân fără titlu',
      'Publicația este ștearsă după 48 de ore',
      'Ștergerea este refuzată, cu afișarea motivului; publicațiile scoase din uz se retrag, nu se șterg',
      'Ștergerea este permisă dacă o confirmă bibliotecarul a doua oară',
    ],
    correct: 2,
    explanation:
      'CF 04.05 refuză ștergerea publicațiilor cu exemplare împrumutate sau rezervate, iar cele scoase din uz se retrag.',
  },
  {
    question:
      'Cine poate dezactiva contul unui cititor și ce se întâmplă cu istoricul lui, conform CF 04.06?',
    options: [
      'Administratorul; istoricul de împrumut nu se șterge',
      'Bibliotecarul; istoricul de împrumut se șterge',
      'Administratorul; istoricul de împrumut se șterge după 12 luni',
      'Cititorul însuși; istoricul rămâne vizibil doar lui',
    ],
    correct: 0,
    explanation:
      'CF 04.06: Administratorul poate dezactiva contul fără a-i șterge istoricul de împrumut.',
  },
  {
    question: 'Care câmp al formularului de publicație din secțiunea 5.4 este opțional?',
    options: ['Editura', 'Descrierea', 'Cota', 'Domeniul'],
    correct: 1,
    explanation:
      'Conform secțiunii 5.4, descrierea, ISBN-ul și coperta sunt opționale; editura, cota și domeniul sunt obligatorii.',
  },
  {
    question:
      'Care dintre limbile de mai jos NU figurează în lista de selecție a câmpului „limbă” din formularul de publicație?',
    options: ['Germana', 'Rusa', 'Franceza', 'Alta'],
    correct: 0,
    explanation: 'Lista câmpului limbă conține: română, rusă, engleză, franceză, alta.',
  },
  {
    question:
      'Bibliotecarul dorește să exporte raportul „Împrumuturi într-o perioadă” în format XLSX. Ce spune CF 05.01?',
    options: [
      'Raportul poate fi exportat în CSV, PDF și XLSX',
      'Raportul poate fi exportat doar în formatele CSV și PDF',
      'Raportul nu poate fi exportat deloc',
      'Raportul poate fi exportat doar în PDF',
    ],
    correct: 1,
    explanation:
      'CF 05.01 prevede exportul în CSV și PDF; XLSX nu este menționat, deci nu face parte din cerință.',
  },
  {
    question:
      'Raportul „Restanțe la zi” (CF 05.02) conține trei restanțe, cu întârzieri de 5, 40 și 12 zile. În ce ordine se afișează?',
    options: [
      '5, 12, 40 zile',
      '12, 5, 40 zile',
      'În ordinea alfabetică a cititorilor',
      '40, 12, 5 zile',
    ],
    correct: 3,
    explanation:
      'CF 05.02 cere ordonarea descrescătoare după numărul de zile de întârziere, deci 40, 12, 5.',
  },
  {
    question:
      'Pentru ce interval se generează raportul „Cele mai solicitate 20 de publicații”, conform CF 05.03?',
    options: [
      'Pentru o lună aleasă de utilizator',
      'Pentru ultimele 24 de luni',
      'Pentru un an de studii ales',
      'Pentru un interval de date ales liber, cu filtrare după domeniu',
    ],
    correct: 2,
    explanation: 'CF 05.03 cere generarea raportului pentru un an de studii ales.',
  },
  {
    question: 'Ce afișează raportul „Fondul de carte pe domenii”, conform CF 05.04?',
    options: [
      'Numărul de cititori activi pentru fiecare domeniu',
      'Lista restanțelor ordonată după întârziere',
      'Numărul de titluri și de exemplare pentru fiecare domeniu',
      'Cele 20 de publicații cele mai solicitate din fiecare domeniu',
    ],
    correct: 2,
    explanation:
      'CF 05.04 (recomandată) afișează numărul de titluri și de exemplare pentru fiecare domeniu.',
  },
  {
    question:
      'Conform codificării din curs, aplicată caietului bibliotecii, ce indică partea numerică „05” din identificatorul CF 05.03?',
    options: [
      'Numărul cerinței în cadrul componentei',
      'Tipul cerinței: funcțională sau nefuncțională',
      'Gradul de obligativitate al cerinței',
      'Componenta la care se referă cerința (aici, Rapoarte)',
    ],
    correct: 3,
    explanation:
      'În CF 05.03, „CF” e tipul cerinței, „05” componenta (5.5 Rapoarte), iar „03” numărul cerinței, care nu se refolosește niciodată.',
  },
  {
    question:
      'În cerința „CF 03.05 · M · Candidatul autentificat trebuie să poată încărca actele de studii în format PDF, un fișier de cel mult 10 MB, iar la depășirea limitei sistemul afișează mesajul «Fișier prea mare»”, ce element al anatomiei unei cerințe este „cel mult 10 MB”?',
    options: [
      'Actorul',
      'Valoarea măsurabilă',
      'Comportamentul la excepție',
      'Gradul de obligativitate',
    ],
    correct: 1,
    explanation:
      'Conform cursului, valoarea măsurabilă este cifra care face cerința verificabilă; „Fișier prea mare” este comportamentul la excepție.',
  },
  {
    question:
      'De ce este o cerință slabă formularea „Administratorul gestionează conținutul și utilizatorii”, conform cursului?',
    options: [
      'Conține două cerințe într-una; dacă prima e gata și a doua nu, cerința nu poate fi nici acceptată, nici respinsă',
      'Impune o soluție tehnică, adică un anumit limbaj de programare',
      'Nu are actor, deoarece nu precizează cine face acțiunea',
      'Folosește o valoare măsurabilă prea mică',
    ],
    correct: 0,
    explanation:
      'Cursul o reformulează în două cerințe separate (CF 05 și CF 06): una pentru știri, alta pentru conturi și roluri.',
  },
  {
    question:
      'Conform CNF 02, în cât timp trebuie să returneze rezultatul o interogare în catalog pentru un fond de 20 000 de înregistrări?',
    options: [
      'Cel mult 1 secundă',
      'Cel mult 3 secunde',
      'Cel mult 5 secunde',
      'Cel mult 10 secunde',
    ],
    correct: 0,
    explanation:
      'CNF 02 (Performanța căutării) cere rezultatul în cel mult 1 secundă pentru un fond de 20 000 de înregistrări.',
  },
  {
    question:
      'Ce condiție adaugă CNF 03 (Capacitate) pentru cei cel puțin 100 de utilizatori simultani?',
    options: [
      'Pagina de start se afișează în cel mult 10 secunde',
      'Valorile din CNF 01 și CNF 02 nu se depășesc nici sub această încărcare',
      'Disponibilitatea scade sub 99 % în orele de vârf',
      'Căutarea este dezactivată pentru utilizatorii neautentificați',
    ],
    correct: 1,
    explanation:
      'CNF 03 cere ca Aplicația să deservească cel puțin 100 de utilizatori simultan fără depășirea valorilor din CNF 01 și CNF 02.',
  },
  {
    question: 'Când se execută lucrările de mentenanță planificată, conform CNF 04?',
    options: [
      'În intervalul 07:00 – 22:00, cu anunț cu 24 de ore înainte',
      'Oricând, fără anunț, dacă durează sub o oră',
      'În afara intervalului 07:00 – 22:00, cu anunț cu 48 de ore înainte',
      'Doar duminica, cu anunț cu 7 zile înainte',
    ],
    correct: 2,
    explanation:
      'CNF 04 cere ca mentenanța planificată să se execute în afara intervalului 07:00 – 22:00 și să fie anunțată cu 48 de ore înainte.',
  },
  {
    question:
      'Care dintre următoarele browsere NU este menționat în cerința de compatibilitate CNF 05?',
    options: ['Safari', 'Mozilla Firefox', 'Microsoft Edge', 'Opera'],
    correct: 3,
    explanation:
      'CNF 05 enumeră Google Chrome, Mozilla Firefox, Microsoft Edge și Safari, ultimele două versiuni stabile ale fiecăruia; Opera nu apare.',
  },
  {
    question: 'Care sunt punctele de rupere cerute de cerința de responsivitate CNF 06?',
    options: [
      '576, 768, 992 și 1200 px',
      '320, 640, 1024 și 1920 px',
      '480, 768, 1024 și 1440 px',
      '576, 720, 960 și 1280 px',
    ],
    correct: 0,
    explanation:
      'CNF 06 cere puncte de rupere la 576, 768, 992 și 1200 px, pentru lățimi între 320 px și 1920 px.',
  },
  {
    question: 'Cum trebuie păstrate parolele conturilor, conform CNF 08 (Securitatea conturilor)?',
    options: [
      'În clar, într-un câmp protejat de acces',
      'Exclusiv sub formă de amprentă criptografică cu sare',
      'Criptate reversibil, cu o cheie păstrată în aplicație',
      'Sub formă de text codificat în Base64',
    ],
    correct: 1,
    explanation:
      'CNF 08 cere ca parolele să se păstreze exclusiv sub formă de amprentă criptografică cu sare, cu minimum 8 caractere.',
  },
  {
    question:
      'Cine poate vedea istoricul de împrumut al unui cititor, conform CNF 10 (Protecția datelor personale)?',
    options: [
      'Toți cititorii autentificați',
      'Orice vizitator al paginilor publice',
      'Doar cititorul respectiv, bibliotecarul și administratorul',
      'Doar administratorul',
    ],
    correct: 2,
    explanation:
      'CNF 10 limitează vizibilitatea istoricului la cititorul respectiv, bibliotecar și administrator; datele personale nu apar în paginile publice.',
  },
  {
    question:
      'Câte acțiuni cel mult sunt necesare pentru a ajunge la orice publicație din catalog, pornind de la pagina de start, conform CNF 12 (Utilizabilitate)?',
    options: ['2', '5', '7', '3'],
    correct: 3,
    explanation:
      'CNF 12 cere ca orice publicație din catalog să se atingă în cel mult 3 acțiuni de la pagina de start.',
  },
  {
    question: 'Cum trebuie afișate erorile de validare, conform CNF 13 (Mesaje de eroare)?',
    options: [
      'Într-o fereastră unică la începutul paginii, cu codul erorii serverului',
      'Lângă câmpul care le-a provocat, în limba română, cu indicarea a ceea ce trebuie corectat',
      'În limba engleză, preluate direct de la server',
      'Doar în jurnalul aplicației, fără afișare utilizatorului',
    ],
    correct: 1,
    explanation:
      'CNF 13 cere mesaje lângă câmp, în română, cu indicarea corecturii, și interzice afișarea mesajelor tehnice ale serverului.',
  },
  {
    question: 'Ce limită de greutate are o pagină, conform CNF 01?',
    options: ['500 KB', '5 MB', '2 MB', '10 MB'],
    correct: 2,
    explanation:
      'CNF 01 prevede, pe lângă timpul de afișare, că greutatea unei pagini nu depășește 2 MB.',
  },
  {
    question: 'Care dintre următoarele cerințe este nefuncțională (CNF)?',
    options: [
      'Bibliotecarul înregistrează returnarea unei publicații',
      'Administratorul creează conturi de bibliotecar',
      'Cititorul rezervă o publicație disponibilă',
      'Pagina fișei publicației se afișează complet în cel mult 2 secunde la 10 Mbit/s',
    ],
    correct: 3,
    explanation:
      'Doar ultima formulare descrie calitatea (viteza) cu valoare măsurabilă; celelalte descriu funcții ale Aplicației (CF).',
  },
  {
    question:
      'Care dintre următoarele cerințe este una tehnică (TEH), nu funcțională sau nefuncțională de calitate?',
    options: [
      'Copii de rezervă zilnice, automate, păstrate 30 de zile',
      'Bibliotecarul marchează o publicație ca restituită',
      'Sesiunea expiră după 30 de minute de inactivitate',
      'Orice publicație din catalog se atinge în cel mult 3 acțiuni',
    ],
    correct: 0,
    explanation:
      'Copiile de rezervă țin de infrastructură și găzduire și sunt în TEH 05; sesiunea e în CNF 08, accesul în 3 acțiuni în CNF 12, iar returnarea e o funcție (CF).',
  },
  {
    question:
      'Ce impune beneficiarul în ceea ce privește tehnologia de realizare, conform introducerii capitolului 7?',
    options: [
      'Impune un anumit limbaj de programare și un SGBD',
      'Nu impune tehnologia: executantul alege limbajul, cadrul și SGBD-ul, respectând cerințele din tabelul 7.1',
      'Impune doar sistemul de gestiune a bazei de date',
      'Impune cadrul de lucru, dar lasă liber limbajul',
    ],
    correct: 1,
    explanation:
      'Capitolul 7 spune că beneficiarul nu impune tehnologia; restricțiile decurg din infrastructura colegiului și din întreținerea ulterioară de către serviciul TI.',
  },
  {
    question: 'Ce nu se acceptă, conform TEH 02, în alegerea tehnologiilor?',
    options: [
      'Soluții care presupun plăți recurente neincluse în ofertă',
      'Tehnologii cu sursă deschisă',
      'Tehnologii cu licență deja deținută de beneficiar',
      'Soluții bazate pe o bază de date relațională',
    ],
    correct: 0,
    explanation:
      'TEH 02 cere tehnologii cu sursă deschisă sau cu licență deținută și exclude plățile recurente neincluse în ofertă.',
  },
  {
    question: 'Conform TEH 05, cum se probează procedura de restaurare a copiilor de rezervă?',
    options: [
      'Lunar, de către serviciul TI al colegiului',
      'Zilnic, automat, fără verificare',
      'O dată, în prezența beneficiarului, înainte de recepția finală',
      'După expirarea garanției',
    ],
    correct: 2,
    explanation:
      'TEH 05 cere ca procedura de restaurare să fie probată o dată, în prezența beneficiarului, înainte de recepția finală.',
  },
  {
    question:
      'Ce format de imagini cere TEH 07, ca soluție de rezervă pentru browserele care nu acceptă formatele moderne?',
    options: ['BMP', 'TIFF', 'GIF animat', 'JPEG'],
    correct: 3,
    explanation:
      'TEH 07 cere WebP sau AVIF, cu variantă alternativă JPEG, și încărcare amânată în listele lungi.',
  },
  {
    question:
      'Ce obligativitate are TEH 11 (autentificarea cu contul instituțional unic al colegiului)?',
    options: [
      'O (opțională)',
      'M (obligatorie)',
      'R (recomandată)',
      'Nu are obligativitate indicată',
    ],
    correct: 0,
    explanation: 'În tabelul 7.1, TEH 11 are obligativitatea O, deci este opțională.',
  },
  {
    question:
      'Pe numele cui se înregistrează domeniul biblioteca.colegiu.md și certificatul TLS, conform TEH 04?',
    options: [
      'Pe numele executantului',
      'Pe numele beneficiarului',
      'Pe numele serviciului de găzduire',
      'Pe numele bibliotecarului',
    ],
    correct: 1,
    explanation:
      'TEH 04 cere înregistrarea pe numele beneficiarului, cu datele de acces transmise la recepția finală.',
  },
  {
    question:
      'Din ce aproximativ 5 200 de înregistrări migrate, cât este numărul maxim de erori acceptat de CONT 02 (rata de cel mult 1 %)?',
    options: ['Aproximativ 5', 'Aproximativ 520', 'Aproximativ 52', 'Aproximativ 1 000'],
    correct: 2,
    explanation:
      '1 % din circa 5 200 de înregistrări înseamnă circa 52; erorile se corectează de Executant după verificarea beneficiarului (CONT 02).',
  },
  {
    question:
      'Cine furnizează titlurile paginilor și textele fixe ale interfeței, conform CONT 01, și în ce termen?',
    options: [
      'Executantul, în 10 zile de la semnarea contractului',
      'Beneficiarul, în 45 de zile de la semnarea contractului',
      'Executantul, înainte de recepția finală',
      'Beneficiarul, în 10 zile de la semnarea contractului',
    ],
    correct: 3,
    explanation:
      'CONT 01 pune în sarcina beneficiarului furnizarea titlurilor și a textelor fixe în 10 zile de la semnarea contractului.',
  },
  {
    question: 'Cine poate retrage un anunț deja publicat, conform fluxului de publicare ADM 01?',
    options: [
      'Administratorul',
      'Orice cititor autentificat',
      'Doar executantul',
      'Numai bibliotecarul care l-a redactat',
    ],
    correct: 0,
    explanation:
      'ADM 01: bibliotecarul redactează și publică, iar administratorul poate retrage orice anunț publicat.',
  },
  {
    question:
      'În ce limbă și în ce format se transmit documentele de documentare, conform introducerii capitolului 9?',
    options: [
      'În română și rusă, doar PDF',
      'În limba română, în format editabil și PDF',
      'În limba engleză, doar format editabil',
      'În limba română, doar format tipărit',
    ],
    correct: 1,
    explanation:
      'Capitolul 9 cere ca toate documentele să fie redactate în română și transmise în format editabil și PDF.',
  },
  {
    question: 'Ce conține DOC 04, document livrat în cadrul cerințelor de documentare?',
    options: [
      'Ghidul de instalare și configurare',
      'Manualul utilizatorului cu capturi de ecran',
      'Modelul bazei de date: schema tabelelor, cu descrierea câmpurilor și a legăturilor',
      'Scenariile de testare cu rezultatele lor',
    ],
    correct: 2,
    explanation:
      'DOC 04 este Modelul bazei de date; ghidul de instalare e DOC 03, manualele DOC 01 și DOC 02, scenariile de testare DOC 05.',
  },
  {
    question:
      'În ce termen se remediază neconformitățile constatate la recepție, conform capitolului 10?',
    options: [
      '3 zile lucrătoare, fără reverificare',
      '15 zile calendaristice, cu semnarea condiționată a procesului-verbal',
      'După expirarea garanției',
      '10 zile lucrătoare, după care se repetă verificarea punctelor respective',
    ],
    correct: 3,
    explanation:
      'Capitolul 10 prevede remedierea în 10 zile lucrătoare și repetarea verificării punctelor respective.',
  },
  {
    question:
      'La verificarea CF 04.02 se importă un CSV de 100 de linii, dintre care 5 cu erori deliberate. Aplicația importă 96 de linii, iar raportul indică 4 linii respinse. Care este rezultatul verificării?',
    options: [
      'Neîndeplinită: criteriul cere 95 de linii importate și exact cele 5 linii respinse cu motivul fiecăreia',
      'Îndeplinită: numărul de linii importate este aproape de cel cerut',
      'Îndeplinită parțial, iar procesul-verbal se poate semna',
      'Neaplicabilă, deoarece fișierul conține erori deliberate',
    ],
    correct: 0,
    explanation:
      'Criteriul de trecere pentru CF 04.02 este strict: 95 de linii importate și raport cu exact cele 5 linii respinse; altfel cerința M e neîndeplinită.',
  },
  {
    question: 'De ce se face verificarea CF 02.03 într-un mediu de testare cu ceasul modificat?',
    options: [
      'Pentru a testa viteza serverului la încărcare mare',
      'Pentru a simula trecerea celor 48 de ore fără a aștepta efectiv',
      'Pentru a verifica afișarea paginii în alte fusuri orare',
      'Pentru a evita folosirea datelor reale ale cititorilor',
    ],
    correct: 1,
    explanation:
      'Modificarea ceasului permite verificarea expirării automate a rezervării după 48 de ore, cu exemplarul revenit în starea „disponibil”.',
  },
  {
    question:
      'O cerință din caietul de sarcini este formulată astfel: „Rezervarea se anulează automat și cititorul primește o notificare, iar bibliotecarul poate prelungi rezervarea.” Ce ar trebui făcut conform notei metodice?',
    options: [
      'Cerința se păstrează, deoarece e completă',
      'Se adaugă cuvântul „parțial” în criteriul de trecere',
      'Cerința trebuie despărțită în mai multe, fiecare cu un identificator unic și o singură idee',
      'Se mută în anexe',
    ],
    correct: 2,
    explanation:
      'Nota metodică: dacă la recepție răspunsul poate fi „parțial”, cerința conține mai multe idei și trebuie despărțită în două sau mai multe.',
  },
  {
    question:
      'Un defect din perioada de garanție împiedică utilizarea Aplicației. În ce termen trebuie remediat gratuit de Executant, conform capitolului 11?',
    options: ['10 zile lucrătoare', '10 zile calendaristice', '12 luni', '3 zile lucrătoare'],
    correct: 3,
    explanation:
      'Garanția prevede 3 zile lucrătoare pentru defecțiunile care împiedică utilizarea și 10 zile lucrătoare pentru celelalte neconformități.',
  },
  {
    question:
      'Anexa B (fișierul de calcul cu fondul de carte existent) este referită în CONT 02, dar lipsește din documentul predat. Ce consecință are, conform regulii despre anexe?',
    options: [
      'Cerința CONT 02, care se sprijină pe ea, nu mai poate fi aplicată sau verificată',
      'Cerința CONT 02 rămâne neschimbată',
      'Se anulează întregul caiet de sarcini',
      'Executantul alege singur datele de migrat',
    ],
    correct: 0,
    explanation:
      'Regula din curs: o anexă invocată, dar lipsă, anulează cerința care se sprijină pe ea; de aceea fiecare anexă trebuie atașată efectiv.',
  },
  {
    question:
      'Care dintre aceste formulări respectă regula din nota metodică „se cere rezultatul, nu mijlocul”?',
    options: [
      'Căutarea se va realiza cu cadrul X, versiunea 5',
      'Căutarea în catalog funcționează fără diacritice și indiferent de majuscule',
      'Catalogul va fi stocat obligatoriu în baza de date Y',
      'Interfața va fi scrisă în limbajul Z',
    ],
    correct: 1,
    explanation:
      'A doua formulare descrie rezultatul verificabil (cf. CF 01.02); celelalte impun mijlocul tehnic fără motiv.',
  },
];
