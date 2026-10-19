import { Question } from '../models/question';

/**
 * Întrebări generale despre caietul de sarcini: ce este, structura, cerințe funcționale și
 * nefuncționale, cum se formulează o cerință bună, acceptare și recepție. Nu depind de un anumit
 * document-exemplu. Dificultate amestecată, inclusiv Adevărat/Fals și scenarii.
 * Sunt folosite ca întrebări prioritare în „Examen 20.10” (70% din test).
 */
export const CAIET_SARCINI_NOU_QUESTIONS: Question[] = [
  {
    question:
      'Caietul de sarcini este documentul prin care beneficiarul descrie complet și verificabil ce trebuie să facă aplicația, în ce condiții și cum se va verifica rezultatul.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Aceasta este definiția caietului de sarcini din curs.',
  },
  {
    question:
      'Caietul de sarcini poate fi o înțelegere verbală între beneficiar și executant, dacă ambele părți sunt de acord.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Este un document scris și aprobat, nu o discuție, un e-mail sau o listă de dorințe.',
  },
  {
    question:
      'Caietul de sarcini se anexează la contract și devine baza recepției lucrării, de aceea este numit adesea „contractul tehnic”.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Ce nu este în caietul de sarcini nu se poate pretinde la recepție.',
  },
  {
    question:
      'Caietul de sarcini este redactat de executant, iar beneficiarul doar îl citește și îl semnează.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Îl redactează beneficiarul împreună cu analistul TI; executantul îl citește, cere clarificări în scris și își întemeiază oferta pe el.',
  },
  {
    question:
      'Rolul analistului TI este să transforme nevoile beneficiarului în cerințe numerotate și verificabile.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Analistul răspunde de claritatea și verificabilitatea cerințelor.',
  },
  {
    question:
      'Un executant poate da un preț real pentru „un site frumos”, fără alte precizări, la fel de bine ca pentru un set de cerințe numerotate.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation: 'Fals. Fără cerințe precise costul și termenul nu pot fi estimate corect.',
  },
  {
    question:
      'Structura unui caiet de sarcini merge de la context (informație generală, situația curentă, fluxurile de lucru) la cerințe și abia apoi la criteriile de acceptare.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Cerințele nu pot fi înțelese fără contextul care le precede.',
  },
  {
    question:
      'Într-un caiet de sarcini serios, cerințele propriu-zise ocupă cea mai mare parte a textului, iar contextul este doar o scurtă introducere.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Cerințele ocupă mai puțin de jumătate din text; restul este contextul fără care ele nu se pot înțelege.',
  },
  {
    question:
      'Tabelul de noțiuni și abrevieri se include pentru ca beneficiarul și executantul să înțeleagă la fel termenii folosiți.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Dacă părțile nu folosesc aceleași cuvinte, restul documentului pierde valoarea.',
  },
  {
    question:
      'Obiectivele aplicației trebuie formulate ca dorințe generale („aplicație modernă și plăcută”), pentru a lăsa executantului libertate.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Obiectivele trebuie să fie măsurabile, astfel încât îndeplinirea lor să poată fi verificată.',
  },
  {
    question:
      'Capitolul despre situația curentă descrie ce există deja și ce probleme trebuie rezolvate, iar secțiunea despre limitele lucrării arată ce intră și ce nu intră în ofertă.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Delimitarea evită pretenții asupra unor elemente care nu au fost ofertate.',
  },
  {
    question:
      'Descrierea fluxurilor de lucru vine înaintea cerințelor funcționale, pentru că din activitățile procesului automatizat se nasc cerințele.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Înainte de a cere funcții, caietul descrie procesul.',
  },
  {
    question:
      'Obiectele informaționale (de exemplu Utilizator, Comandă, Produs într-un magazin online) sunt entitățile despre care aplicația păstrează date și stau la baza modelului bazei de date.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Ele se descriu cu atributele lor principale.',
  },
  {
    question:
      'Actele normative aplicabile se menționează într-un caiet de sarcini doar ca recomandări, fără a decurge din ele cerințe concrete.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Cerințele legislației în vigoare nu se negociază și pentru fiecare act se arată cerința concretă care decurge din el.',
  },
  {
    question:
      'Cerințele funcționale descriu ce trebuie să facă aplicația, iar cele nefuncționale descriu cât de bine o face.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Aceasta este distincția de bază dintre cele două tipuri.',
  },
  {
    question:
      'Cerințele funcționale se scriu într-un text continuu, fără identificatori, pentru a fi mai ușor de citit.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Se scriu într-un tabel, fiecare cu identificator unic, grad de obligativitate și descriere.',
  },
  {
    question:
      'Cerințele funcționale se grupează pe componente, iar fiecare componentă primește o scurtă descriere înainte de tabelul ei de cerințe.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Descrierea spune ce face componenta și cui este accesibilă.',
  },
  {
    question:
      'Pentru fiecare componentă se indică și câmpurile formularelor, cu tipul lor și mențiunea obligatoriu sau opțional, precum și valorile listelor de selecție.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Aceste detalii fac formularele verificabile.',
  },
  {
    question:
      'Gradul de obligativitate arată ce se negociază și ce nu: o cerință obligatorie trebuie îndeplinită pentru recepție, una „de dorit” nu blochează recepția.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Gradul de obligativitate (obligatoriu, de dorit, informativ) stabilește importanța cerinței.',
  },
  {
    question:
      'Enunțul „Administratorul gestionează conținutul și utilizatorii” este o cerință funcțională bine scrisă.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Conține două cerințe într-una; trebuie despărțită, de exemplu într-o cerință pentru conținut și una pentru conturi.',
  },
  {
    question:
      'O cerință funcțională bine scrisă conține actorul, acțiunea și obiectul, valoarea măsurabilă și comportamentul la excepție.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Exemplu: cine încarcă, ce fișier, ce limită și ce mesaj apare când limita este depășită.',
  },
  {
    question:
      'O cerință funcțională trebuie să precizeze și biblioteca software care o va implementa, pentru a nu exista neclarități.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Cerința spune ce rezultat se așteaptă, nu cum se implementează; soluția rămâne la executant.',
  },
  {
    question:
      'Formularea „Interfața trebuie să fie intuitivă” este o cerință funcțională verificabilă.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Este vagă și subiectivă; adjectivul trebuie înlocuit cu o cifră sau cu o listă închisă.',
  },
  {
    question:
      'Cerința „Pagina de start se afișează în cel mult 3 secunde” este o cerință funcțională.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation: 'Fals. Descrie calitatea funcționării (performanța), deci este nefuncțională.',
  },
  {
    question:
      'O cerință nefuncțională trebuie formulată cu o valoare măsurabilă și cu condițiile de măsurare, altfel nu poate fi verificată la recepție.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. „Rapid” fără valoare și condiții nu se poate proba.',
  },
  {
    question:
      'Beneficiarul impune tehnologia de realizare numai când există un motiv real, de exemplu infrastructura existentă sau întreținerea de către propriul serviciu TI.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Altfel se cere rezultatul, nu mijlocul.',
  },
  {
    question:
      'Cerințele de conținut și de administrare stabilesc, printre altele, harta paginilor, cine furnizează textele, rolurile de administrare și fluxul de publicare.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Ele spun ce conținut va avea aplicația și cine îl va întreține după livrare.',
  },
  {
    question:
      'Documentația cerută executantului (manuale, ghid de instalare, model al bazei de date) și instruirea personalului nu fac parte din caietul de sarcini.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Cerințele de documentare și instruire sunt un capitol al caietului, iar livrabilele se verifică la recepție.',
  },
  {
    question:
      'Un criteriu de acceptare spune condiția exactă prin care o cerință se consideră îndeplinită: valoare, unitate și mod de măsurare.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Pe baza lui se scrie scenariul de testare.',
  },
  {
    question:
      'Criteriile de acceptare se redactează la sfârșitul proiectului, după ce aplicația este gata.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Se scriu odată cu cerințele; altfel recepția devine o discuție despre gusturi.',
  },
  {
    question:
      'Lanțul de verificare este: cerința, criteriul de acceptare, scenariul de testare, proba și procesul-verbal de recepție.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Procesul-verbal consemnează dacă fiecare cerință este îndeplinită sau neîndeplinită.',
  },
  {
    question:
      'O anexă invocată în text, dar care nu este atașată documentului, nu afectează cerința care se sprijină pe ea.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. O anexă invocată, dar lipsă, anulează cerința care se sprijină pe ea; fiecare anexă trebuie numerotată, referită și atașată.',
  },
  {
    question:
      'Greșelile din caietul de sarcini se corectează cel mai ieftin după livrare, în perioada de garanție.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Se corectează în faza de redactare, unde corectura este gratuită; după aceea apar lucrări refuzate și modificări plătite de două ori.',
  },
  {
    question:
      'Procesul-verbal de recepție poate fi semnat numai dacă sunt îndeplinite și cerințele opționale, nu doar cele obligatorii.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Se verifică în primul rând cerințele obligatorii; cele opționale sau recomandate nu blochează recepția.',
  },
  {
    question:
      'Conducătorul instituției este cel care transformă nevoile în cerințe numerotate și redactează cerințele tehnice.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Aceasta este sarcina analistului TI; conducătorul aprobă documentul prin semnătură.',
  },
  {
    question:
      'Pentru un magazin online au fost scrise patru cerințe: (1) Clientul poate filtra produsele după preț. (2) Confirmarea plății cu cardul apare în cel mult 5 secunde. (3) Administratorul poate adăuga produse noi în catalog. (4) Interfața se afișează fără derulare orizontală la lățimi între 320 și 1920 px. Câte dintre ele sunt cerințe nefuncționale?',
    options: ['1 (doar cerința 2)', '3 (cerințele 1, 2 și 4)', '2 (cerințele 2 și 4)', '4 (toate)'],
    correct: 2,
    explanation:
      'Cerințele 2 și 4 descriu cât de bine (rapid, adaptat ecranelor) funcționează aplicația; 1 și 3 descriu ce face aplicația, deci sunt funcționale.',
  },
  {
    question:
      'Autorul unui caiet de sarcini pentru site-ul unei clinici verifică ce a scris în capitolul „Cerințe de conținut și de administrare”. Care dintre informațiile de mai jos NU își are locul acolo?',
    options: [
      'Resursele minime ale serverului și spațiul de stocare necesar',
      'Harta paginilor și cine furnizează textele pentru fiecare',
      'Volumul de conținut migrat din vechiul site și cine face migrarea',
      'Fluxul de publicare: cine scrie, cine aprobă, cine publică',
    ],
    correct: 0,
    explanation:
      'Resursele serverului țin de găzduire, deci de cerințele tehnice. Harta paginilor, migrarea conținutului și fluxul de publicare sunt cerințe de conținut și administrare.',
  },
  {
    question:
      'Într-un caiet de sarcini pentru site-ul unei clinici se descrie cum se fac acum programările (telefonic, într-un registru de hârtie) și ce probleme apar din cauza asta. În ce capitol se scrie această descriere?',
    options: [
      'Cerințe funcționale',
      'Criteriile de acceptare',
      'Anexe',
      'Situația curentă și limitele lucrării',
    ],
    correct: 3,
    explanation:
      'Descrierea a ceea ce există deja, cu problemele ei, este conținutul capitolului despre situația curentă; ea explică de ce sunt necesare cerințele care urmează.',
  },
  {
    question:
      'Formularul de înscriere al unei școli are 60 de câmpuri, fiecare cu tip și cu valori posibile pentru listele de selecție. Tabelul e prea voluminos pentru corpul documentului, dar cerințele funcționale se referă direct la el. Unde se pune corect?',
    options: [
      'În capitolul de obiective, ca să fie vizibil',
      'Într-o anexă numerotată, atașată documentului și referită din cerințe',
      'În tabelul de noțiuni',
      'Nu se include; executantul îl va stabili singur',
    ],
    correct: 1,
    explanation:
      'Materialul prea voluminos, dar invocat de cerințe, se pune în anexe; anexa trebuie să fie numerotată, referită din text și atașată efectiv.',
  },
  {
    question:
      'Autorul caietului pentru un magazin online vrea să precizeze că în formularul de comandă câmpul „Telefon” este obligatoriu și are exact 9 cifre. Unde trebuie scrisă această informație, conform modului de descriere a componentelor funcționale?',
    options: [
      'În tabelul de noțiuni și abrevieri',
      'În obiectivele aplicației',
      'În criteriile de acceptare, și nu în altă parte',
      'În descrierea componentei „Comenzi”, la câmpurile formularului (tip și obligatoriu/opțional)',
    ],
    correct: 3,
    explanation:
      'Descrierea fiecărei componente include câmpurile formularelor, cu tipul lor și mențiunea obligatoriu/opțional, înaintea tabelului de cerințe.',
  },
  {
    question:
      'Care dintre cerințele de mai jos NU poate fi declarată, la recepție, îndeplinită sau neîndeplinită fără interpretări?',
    options: [
      'Coșul păstrează produsele adăugate timp de 7 zile, chiar dacă browserul a fost închis',
      'Interfața magazinului trebuie să fie modernă și plăcută',
      'Toate paginile se servesc prin HTTPS',
      'Pagina de start cântărește cel mult 2 MB',
    ],
    correct: 1,
    explanation:
      '„Modernă și plăcută” depinde de gust, nu are valoare măsurabilă. Celelalte au valori sau condiții care se pot proba.',
  },
  {
    question:
      'La o recepție se constată două lucruri: un test din lista de teste nu corespunde nicio cerință din caiet, iar o cerință obligatorie nu are niciun test. Ce înseamnă acest lucru?',
    options: [
      'Testul verifică ceva ce nu a fost cerut, iar cerința fără test nu poate fi verificată: îi lipsește criteriul de acceptare',
      'Nu e nicio problemă: testele pot fi mai multe decât cerințele, iar cerințele nu au nevoie de teste',
      'Doar testul fără cerință e o problemă; cerința fără test se consideră îndeplinită',
      'Sunt doar greșeli de formatare, fără legătură cu trasabilitatea',
    ],
    correct: 0,
    explanation:
      'Trasabilitatea leagă cerința de testul și de criteriul de acceptare. Fără criteriu, cerința obligatorie nu se poate verifica, iar un test fără cerință verifică ceva necontractat.',
  },
  {
    question:
      'Regula din caiet: procesul-verbal de recepție se semnează numai dacă toate cerințele obligatorii sunt îndeplinite. La recepție: toate cele 40 de cerințe obligatorii sunt îndeplinite, iar din 6 cerințe „de dorit” două nu sunt îndeplinite. Ce se întâmplă?',
    options: [
      'Nu se poate semna până nu se îndeplinesc și cele două cerințe „de dorit”',
      'Nu se poate semna până nu se refac testele pentru toate cele 46 de cerințe',
      'Procesul-verbal se poate semna, pentru că regula privește doar cerințele obligatorii',
      'Se poate semna doar dacă beneficiarul renunță la prețul cerințelor neîndeplinite',
    ],
    correct: 2,
    explanation:
      'Numai cerințele obligatorii condiționează semnarea; cele „de dorit” nu blochează recepția.',
  },
  {
    question:
      'Obiectivul unui magazin online este formulat astfel: „Creșterea numărului de comenzi online cu 30 %”. Ce îi lipsește pentru a fi cu adevărat măsurabil?',
    options: [
      'Soluția tehnică prin care se atinge creșterea',
      'Valoarea de referință și termenul de măsurare (30 % față de ce și până când)',
      'Un identificator de cerință de tip CF',
      'Rolul de utilizator care face comenzile',
    ],
    correct: 1,
    explanation:
      'Un obiectiv măsurabil are o valoare, o bază de comparație și un moment al verificării. Soluția tehnică nu aparține obiectivului.',
  },
  {
    question:
      'Care este ordinea logică a etapelor realizării unei aplicații Web, cu livrabilele lor?',
    options: [
      'Elaborarea → analiza și proiectarea → testarea → instruirea și recepția finală',
      'Analiza și proiectarea → elaborarea → recepția finală → testarea',
      'Instruirea → elaborarea → analiza și proiectarea → recepția finală',
      'Analiza și proiectarea (machete, model de date) → elaborarea → migrarea datelor și testarea → instruirea și recepția finală',
    ],
    correct: 3,
    explanation:
      'Se proiectează înainte de a construi, se testează ce s-a construit, iar instruirea și recepția finală încheie lucrarea.',
  },
  {
    question:
      'De ce descrie un caiet de sarcini fluxurile de lucru (procesul) înainte de cerințele funcționale?',
    options: [
      'Pentru că din pașii procesului, cu actorii, datele de intrare și de ieșire, se nasc cerințele funcționale',
      'Pentru că fluxurile sunt cerințe mai importante decât cele funcționale',
      'Pentru că așa se reduce numărul de pagini al documentului',
      'Pentru că executantul alege tehnologia pe baza fluxurilor',
    ],
    correct: 0,
    explanation:
      'Cerințele funcționale automatizează un proces; ca să fie complete, trebuie mai întâi descris procesul.',
  },
  {
    question:
      'Termenele unui contract se calculează în zile calendaristice de la semnare. Contractul s-a semnat pe 1 septembrie 2026, iar etapa 2 are termen de 60 de zile. Livrarea ei s-a făcut pe 3 noiembrie 2026. Care este situația?',
    options: [
      'Întârziere de 2 zile: termenul a fost 1 noiembrie (două luni)',
      'Livrare în termen: termenul a fost 4 noiembrie',
      'Întârziere de 3 zile: termenul a fost 31 octombrie',
      'Întârziere de 33 de zile',
    ],
    correct: 2,
    explanation:
      'De la 1 septembrie, 30 de zile ajung la 1 octombrie, iar încă 30 la 31 octombrie. Livrarea din 3 noiembrie are 3 zile de întârziere.',
  },
  {
    question:
      'Trei firme oferă pentru același site prețuri de 3 000, 9 000 și 20 000 de euro. Beneficiarul le-a dat doar mesajul „vrem un site frumos și modern”. Care este cauza principală a diferenței?',
    options: [
      'Lipsa unor cerințe numerotate și verificabile: fiecare firmă a interpretat altfel ce are de făcut',
      'Firmele au tarife orare foarte diferite',
      'Beneficiarul a ales prea multe firme',
      'Prețul nu depinde de volumul lucrării',
    ],
    correct: 0,
    explanation:
      'Fără un caiet de sarcini cu cerințe clare, fiecare ofertant estimează altceva, iar ofertele nu se pot compara.',
  },
  {
    question:
      'Cerința „Site-ul trebuie să fie accesibil” este vagă. Care dintre reformulări o face verificabilă?',
    options: [
      'Interfața trebuie să fie ușor de folosit de orice persoană',
      'Site-ul va fi făcut de o echipă cu experiență în accesibilitate',
      'Accesibilitatea va fi apreciată de beneficiar la recepție',
      'Interfața respectă WCAG 2.1 nivel AA; un flux complet de comandă se parcurge doar de la tastatură, iar trei pagini trec verificarea cu un instrument automat',
    ],
    correct: 3,
    explanation:
      'Reformularea corectă numește standardul și modul de verificare. Celelalte variante rămân subiective sau vorbesc despre echipă, nu despre rezultat.',
  },
  {
    question:
      'Pentru site-ul unei școli, caietul spune doar: „Conținutul se administrează prin interfață Web, fără cunoștințe de programare.” Redactorii vor să publice anunțuri, iar directorul vrea să aprobe comunicatele oficiale. Ce lipsește din cerințele de administrare?',
    options: [
      'Alegerea limbajului de programare al CMS-ului',
      'Fluxul de publicare (cine scrie, cine aprobă, cine publică) și drepturile fiecărui rol',
      'Valoarea timpului de încărcare a paginilor',
      'Lista browserelor suportate',
    ],
    correct: 1,
    explanation:
      'Cerințele de administrare includ rolurile și drepturile lor și fluxul de publicare; fără ele nu se știe cine poate publica ce.',
  },
  {
    question:
      'Într-un tabel al drepturilor rolurilor pentru un magazin online, o linie este probabil o greșeală de proiectare. Care?',
    options: [
      'Vizitatorul poate consulta catalogul de produse',
      'Clientul autentificat își poate vedea propriul istoric de comenzi',
      'Vizitatorul neautentificat poate crea conturi și atribui roluri',
      'Administratorul poate gestiona conturile utilizatorilor',
    ],
    correct: 2,
    explanation:
      'Atribuirea rolurilor este un drept de administrare; unui vizitator anonim nu i se acordă. Celelalte drepturi sunt firești pentru rolurile respective.',
  },
  {
    question:
      'Analiza publicului-țintă al unei aplicații arată că aproape toți utilizatorii o vor accesa de pe telefon, adesea cu conexiune slabă. Ce efect ar trebui să aibă asta asupra caietului de sarcini?',
    options: [
      'Nu are efect, deoarece publicul nu influențează cerințele',
      'Apar cerințe de responsivitate (lățimi mici de ecran) și de performanță (pagini ușoare, timp de încărcare măsurabil)',
      'Se impune o aplicație mobilă nativă, cu un anumit limbaj',
      'Se elimină cerințele de securitate, pentru că telefoanele sunt sigure',
    ],
    correct: 1,
    explanation:
      'Publicul-țintă și modul lui de acces determină cerințele de calitate: afișare corectă pe ecrane mici și încărcare rapidă.',
  },
  {
    question:
      'Beneficiarul vrea să scoată din caiet cerința privind protecția datelor personale, ca să reducă prețul. Cerința decurge din legea în vigoare. Ce este corect?',
    options: [
      'Cerința nu poate fi eliminată: cerințele care decurg din legislație nu sunt negociabile',
      'Se poate elimina dacă executantul este de acord',
      'Se poate elimina dacă cerința e marcată opțională',
      'Se poate elimina dacă aplicația este folosită doar intern',
    ],
    correct: 0,
    explanation:
      'Legislația în vigoare aduce cerințe obligatorii; părțile nu le pot negocia sau renunța la ele prin acord.',
  },
  {
    question:
      'Se discută modelul de date al unui magazin online. Care dintre elementele de mai jos NU este un obiect informațional?',
    options: ['Comanda', 'Produsul', 'Butonul „Adaugă în coș”', 'Clientul'],
    correct: 2,
    explanation:
      'Obiectele informaționale sunt entitățile despre care aplicația păstrează date (Comandă, Produs, Client). Butonul este un element de interfață.',
  },
  {
    question:
      'La recepție, executantul spune că „căutarea funcționează bine”, iar beneficiarul că „e prea lentă”. Ce ar fi evitat disputa?',
    options: [
      'Un executant mai experimentat',
      'Un contract mai lung',
      'Recepția făcută fără prezența beneficiarului',
      'O cerință cu valoare măsurabilă și un criteriu de acceptare cu mod de verificare',
    ],
    correct: 3,
    explanation:
      'Fără criteriu de acceptare, recepția devine o discuție despre păreri. Cu valoare și mod de verificare, rezultatul se constată obiectiv.',
  },
  {
    question:
      'Pentru cerința „căutarea funcționează corect indiferent de diacritice”, care este un criteriu de acceptare bine formulat?',
    options: [
      'Dezvoltatorul confirmă că a testat căutarea',
      'Se face o căutare oarecare și, dacă returnează ceva, cerința e îndeplinită',
      'Beneficiarul apreciază subiectiv calitatea căutării',
      'Se execută 10 căutări prestabilite, dintre care 4 fără diacritice; toate returnează înregistrările așteptate',
    ],
    correct: 3,
    explanation:
      'Un criteriu bun precizează modul de verificare (teste prestabilite) și condiția de trecere, fără subiectivitate.',
  },
  {
    question:
      'Un magazin online trebuie să proceseze plata comenzii; fără această funcție aplicația nu își atinge scopul. Ce grad de obligativitate are cerința, și ce urmează pentru recepție?',
    options: [
      'De dorit: lipsa ei nu influențează recepția',
      'Informativă: descrie doar o obligație a beneficiarului',
      'Obligatorie: trebuie îndeplinită pentru ca recepția să poată fi semnată',
      'Nu are nevoie de grad de obligativitate',
    ],
    correct: 2,
    explanation:
      'O funcție fără de care aplicația nu își atinge scopul este obligatorie, iar neîndeplinirea ei împiedică recepția.',
  },
  {
    question:
      'Cerința „Pagina de start se afișează în cel mult 3 secunde” e testată de dezvoltator (1 secundă, rețea locală, memorie cache încălzită) și de beneficiar (5 secunde, telefon, internet slab). Ce lipsește din cerință?',
    options: [
      'Tehnologia folosită pentru pagina de start',
      'Condițiile de măsurare: viteza conexiunii și starea memoriei cache (eventual și dispozitivul)',
      'Numele dezvoltatorului responsabil',
      'Un grad de obligativitate mai mare',
    ],
    correct: 1,
    explanation:
      'O valoare măsurabilă trebuie însoțită de condițiile în care se măsoară; altfel fiecare obține alt rezultat.',
  },
  {
    question:
      '„Cel puțin 50 % dintre comenzile lunare se fac online, măsurat la 6 luni după lansare” este, într-un caiet de sarcini:',
    options: [
      'Un obiectiv măsurabil din informația generală',
      'O cerință tehnică de găzduire',
      'O cerință funcțională a componentei „Comenzi”',
      'O anexă a documentului',
    ],
    correct: 0,
    explanation:
      'Obiectivele descriu efectul dorit al aplicației și se verifică după o perioadă de utilizare; nu sunt funcții și nici condiții tehnice.',
  },
  {
    question:
      'Beneficiarul se întreabă de ce caietul include secțiunea „Ce nu include lucrarea” (de exemplu aplicația mobilă nativă sau integrarea cu plățile). Care este rolul ei?',
    options: [
      'Arată că executantul nu vrea să facă lucrarea',
      'Crește numărul de cerințe obligatorii',
      'Delimitează lucrarea: evită așteptările false și pretențiile necontractate, aceste elemente putând fi o etapă ulterioară',
      'Înlocuiește criteriile de acceptare',
    ],
    correct: 2,
    explanation: 'Limitele lucrării clarifică ce se ofertează și ce nu, protejând ambele părți.',
  },
  {
    question:
      'Regula din caiet: garanția este de 12 luni de la semnarea procesului-verbal de recepție finală, iar în garanție defectele se remediază gratuit. Contractul s-a semnat pe 1 martie 2026, procesul-verbal pe 1 iunie 2026, iar un defect apare pe 15 aprilie 2027. Cum se tratează?',
    options: [
      'Este în garanție (aproximativ 10 luni de la procesul-verbal) și se remediază gratuit',
      'Nu mai este în garanție, pentru că au trecut peste 12 luni de la contract',
      'Se remediază contra cost, pentru că garanția curge de la livrare',
      'Garanția nu se aplică defectelor apărute după primul an calendaristic',
    ],
    correct: 0,
    explanation:
      'Garanția curge de la procesul-verbal de recepție, nu de la contract; 15 aprilie 2027 e la mai puțin de 12 luni de la 1 iunie 2026.',
  },
  {
    question:
      'De ce este util ca un caiet de sarcini să precizeze și obligațiile beneficiarului, cu termene (de exemplu furnizarea textelor paginilor sau a fișierului cu datele de migrat)?',
    options: [
      'Pentru că beneficiarul nu are alte obligații în proiect',
      'Pentru că executantul scrie singur cerințele',
      'Pentru a mări numărul de pagini',
      'Pentru că întârzierile executantului pot depinde de ele, iar responsabilitățile fiecărei părți devin clare',
    ],
    correct: 3,
    explanation:
      'Proiectul depinde de ambele părți; dacă beneficiarul întârzie livrarea materialelor, termenele executantului nu pot fi respectate.',
  },
  {
    question:
      'Obiectivul „Cel puțin 1 000 de utilizatori activi pe lună” este interpretat diferit: beneficiarul numără persoanele care s-au autentificat, executantul pe cele care au făcut o comandă. Ce parte a caietului ar fi evitat problema?',
    options: [
      'Anexa cu identitatea vizuală',
      'Tabelul de noțiuni, care definește „utilizator activ”',
      'Cerințele de găzduire',
      'Lista rolurilor de utilizator',
    ],
    correct: 1,
    explanation:
      'Dacă cele două părți nu folosesc aceleași cuvinte cu același înțeles, textul nu are valoare; tabelul de noțiuni fixează sensul termenilor.',
  },
  {
    question:
      'Într-un caiet de sarcini, o cerință cere pe pagina de start 50 de imagini de înaltă rezoluție, iar altă cerință cere ca pagina să cântărească cel mult 1 MB. Ce este corect?',
    options: [
      'Executantul alege oricare dintre ele, după preferință',
      'Se îndeplinește doar cea mai nouă, iar cealaltă se ignoră',
      'Cerințele se contrazic: caietul trebuie corectat înainte de ofertare, pentru că ambele nu pot fi îndeplinite la recepție',
      'Nu e o problemă; contradicțiile se rezolvă la recepție',
    ],
    correct: 2,
    explanation:
      'Cerințele trebuie să fie coerente; o contradicție face recepția imposibilă și se remediază în document, înainte ca ofertanții să se bazeze pe el.',
  },
  {
    question:
      'Cerința spune: „Aplicația deservește cel puțin 100 de utilizatori simultan fără ca timpul de afișare să depășească 3 secunde.” La test s-au simulat 20 de utilizatori simultan, cu rezultate bune. Ce concluzie este corectă?',
    options: [
      'Cerința este îndeplinită, 20 fiind suficient de reprezentativ',
      'Cerința este îndeplinită în proporție de 20 %, deci acceptată parțial',
      'Cerința este neîndeplinită automat, fără alt test',
      'Testul nu probează cerința: criteriul trebuie să reproducă condițiile cerute, adică 100 de utilizatori simultan',
    ],
    correct: 3,
    explanation:
      'Un criteriu de acceptare trebuie să verifice exact condițiile din cerință; un test cu 20 de utilizatori nu spune nimic despre 100.',
  },
  {
    question:
      'Cerința de disponibilitate cere 99 % din timp într-o lună de 30 de zile (720 de ore), non-stop. În lună au fost trei întreruperi: 3 ore, 2,5 ore și 2,5 ore. Se respectă cerința?',
    options: [
      'Da: fiecare întrerupere în parte este sub 7,2 ore',
      'Nu: 8 ore de întrerupere depășesc cele 7,2 ore permise (1 % din 720)',
      'Da: 8 ore reprezintă mai puțin de 2 % din lună',
      'Nu se poate stabili niciodată din cifre',
    ],
    correct: 1,
    explanation:
      '1 % din 720 de ore este 7,2 ore; suma întreruperilor este 3 + 2,5 + 2,5 = 8 ore, deci cerința nu se respectă.',
  },
  {
    question:
      'Regula din caiet: procesul-verbal se semnează numai dacă toate cerințele obligatorii sunt îndeplinite, iar neconformitățile se remediază într-un termen stabilit, după care se repetă verificarea punctelor respective. La recepție, din 50 de cerințe obligatorii, 3 nu sunt îndeplinite. Ce urmează?',
    options: [
      'Procesul-verbal nu se semnează; executantul remediază cele 3, apoi se repetă verificarea doar a acelor 3 puncte',
      'Procesul-verbal se semnează, iar cele 3 se remediază ulterior',
      'Se repetă toată recepția de la început',
      'Contractul se reziliază automat',
    ],
    correct: 0,
    explanation:
      'Semnarea cere toate cerințele M îndeplinite; remedierea este urmată de reverificarea doar a punctelor neconforme.',
  },
  {
    question:
      'De ce caietul de sarcini se elaborează de obicei de beneficiar împreună cu un analist TI, și nu doar de beneficiar?',
    options: [
      'Pentru că analistul TI aprobă documentul în locul conducătorului',
      'Beneficiarul știe ce are nevoie, iar analistul ajută să transforme dorințele în cerințe verificabile și complete',
      'Pentru că beneficiarul nu are voie să scrie documente',
      'Pentru ca analistul să impună tehnologia preferată',
    ],
    correct: 1,
    explanation:
      'Beneficiarul cunoaște nevoia, dar de regulă nu știe să o formuleze măsurabil; analistul face traducerea, iar conducătorul aprobă.',
  },
  {
    question:
      'De ce obiectivele de utilizare (de exemplu procentul comenzilor online) se verifică după o perioadă de la punerea în funcțiune, iar cerințele se verifică la recepție?',
    options: [
      'Pentru că obiectivele sunt mai puțin importante decât cerințele',
      'Pentru că recepția nu poate verifica nimic măsurabil',
      'Obiectivele măsoară efectul real al aplicației în utilizare; cerințele verifică dacă lucrarea e conformă cu documentul',
      'Pentru că obiectivele se aplică doar executantului',
    ],
    correct: 2,
    explanation:
      'Recepția stabilește conformitatea cu cerințele; obiectivele arată dacă aplicația și-a atins scopul, ceea ce se vede abia în folosire.',
  },
  {
    question:
      'Un rând dintr-un tabel de cerințe conține doar textul „Clientul poate anula comanda înainte de expediere”. Ce elemente ale rândului lipsesc, ca cerința să poată fi urmărită și prioritizată?',
    options: [
      'Identificatorul unic și gradul de obligativitate',
      'Soluția tehnică și numele programatorului',
      'Costul și data semnării contractului',
      'Culoarea butonului și poziția lui pe pagină',
    ],
    correct: 0,
    explanation:
      'Rândul unei cerințe are trei elemente: identificator, obligativitate și descriere; aici lipsesc primele două.',
  },
  {
    question:
      'Într-un caiet de sarcini bine structurat, la ce întrebare răspunde capitolul „Situația curentă”?',
    options: [
      'De la ce se pornește: ce există astăzi și ce probleme au fost constatate',
      'Ce funcții va avea aplicația nouă',
      'Cum se verifică lucrarea la recepție',
      'Cât va costa și când se termină lucrarea',
    ],
    correct: 0,
    explanation:
      'Capitolul descrie ce există astăzi (site-ul sau procesele actuale, arhitectura lor, problemele constatate), adică punctul de plecare al lucrării.',
  },
  {
    question:
      'Un analist descrie, pas cu pas, cum o solicitare ajunge de la utilizator la persoana care o procesează, indicând actorii implicați, datele de intrare și de ieșire. În ce capitol al caietului de sarcini se găsește această descriere?',
    options: ['Informația generală', 'Criteriile de acceptare', 'Fluxurile de lucru', 'Anexe'],
    correct: 2,
    explanation:
      'Capitolul „Fluxurile de lucru” descrie procesele automatizate, actorii implicați și obiectele informaționale; din el se nasc ulterior cerințele funcționale.',
  },
  {
    question:
      'Unde se descriu, într-un caiet de sarcini, arhitectura viitoare a aplicației, platforma și principiile de prelucrare a datelor?',
    options: [
      'În capitolul „Situația curentă”',
      'În capitolul „Particularități de dezvoltare”',
      'În tabelul de noțiuni',
      'În criteriile de acceptare',
    ],
    correct: 1,
    explanation:
      'Particularitățile de dezvoltare descriu arhitectura viitoare, platforma și principiile de prelucrare a datelor; situația curentă descrie ce există deja.',
  },
  {
    question:
      'Care dintre următoarele materiale se pune, de regulă, într-o anexă a caietului de sarcini, nu în corpul documentului?',
    options: [
      'Scopul aplicației',
      'Lista cerințelor funcționale',
      'Definiția termenilor folosiți',
      'Macheta unei pagini, la care o cerință face trimitere directă',
    ],
    correct: 3,
    explanation:
      'Anexele conțin materialul prea voluminos sau prea detaliat pentru corpul documentului (formulare, machete, liste de rapoarte), dar la care cerințele fac referire.',
  },
  {
    question:
      'Un coleg propune să se mute capitolul criteriilor de acceptare imediat după informația generală, înaintea cerințelor. De ce nu este potrivit?',
    options: [
      'Pentru că criteriile de acceptare se scriu numai după recepția lucrării',
      'Pentru că regulile de formatare interzic mutarea capitolelor',
      'Pentru că criteriile verifică cerințe: ordinea logică merge de la „de ce” la „de la ce pornești”, „ce se cere” și abia apoi „cum se verifică”',
      'Pentru că executantul citește caietul de sarcini de la sfârșit spre început',
    ],
    correct: 2,
    explanation:
      'Structura caietului nu este întâmplătoare: de ce, de la ce pornești, ce se cere și cum se verifică. Un criteriu fără cerința pe care o verifică nu are sens.',
  },
  {
    question:
      'Care dintre următoarele formulări este un obiectiv bine formulat, și nu doar un scop general?',
    options: [
      '„Până la 1 octombrie, cel puțin 50 % din cererile de înscriere să fie depuse prin formularul online.”',
      '„Să îmbunătățim comunicarea cu publicul.”',
      '„Să avem o aplicație modernă și atractivă.”',
      '„Să facilităm accesul la informație pentru toți.”',
    ],
    correct: 0,
    explanation:
      'Un obiectiv spune ce număr se măsoară și până la ce dată (criteriul SMART); celelalte formulări sunt dorințe generale, imposibil de verificat.',
  },
  {
    question:
      'Un caiet de sarcini descrie publicul principal al unei aplicații ca „adolescenți care folosesc aproape exclusiv telefonul și au puțină răbdare”. Ce consecință firească are acest lucru asupra cerințelor?',
    options: [
      'Aplicația se transformă într-o aplicație mobilă nativă',
      'Cerințele de securitate devin opționale',
      'Cerințele pentru calculatoare de birou se elimină complet',
      'Apar cerințe de interfață adaptată pentru ecrane mici și de timp scurt de încărcare, formulate măsurabil',
    ],
    correct: 3,
    explanation:
      'Publicul-țintă determină conținutul, limbajul și forma interfeței; descrierea dispozitivului și a contextului de utilizare se transformă în cerințe concrete.',
  },
  {
    question:
      'Ce rol are secțiunea „Ce include și ce nu include lucrarea” dintr-un caiet de sarcini?',
    options: [
      'Enumeră defectele găsite la testare',
      'Previne așteptările neacoperite: ce este exclus nu se ofertează și nu se poate pretinde la recepție',
      'Stabilește prețul fiecărei componente',
      'Înlocuiește tabelul cerințelor funcționale',
    ],
    correct: 1,
    explanation:
      'Limitele lucrării arată clar ce intră în ofertă și ce rămâne pentru o etapă ulterioară, evitând neînțelegerile dintre beneficiar și executant.',
  },
  {
    question:
      'Care parte răspunde, conform Temei 6, pentru claritatea și verificabilitatea cerințelor din caietul de sarcini?',
    options: [
      'Beneficiarul',
      'Analistul TI, redactorul documentului',
      'Conducătorul instituției',
      'Executantul',
    ],
    correct: 1,
    explanation:
      'Analistul TI transformă nevoile în cerințe numerotate și verificabile și adaugă referințele legale și cerințele tehnice.',
  },
  {
    question:
      'Documentul a fost redactat complet, dar conducătorul instituției nu l-a semnat încă. Care este statutul lui?',
    options: [
      'Este obligatoriu din momentul în care executantul îl citește',
      'Este obligatoriu din momentul în care analistul TI îl termină',
      'Este obligatoriu după publicarea lui pe site-ul executantului',
      'Este încă un proiect: devine obligatoriu și se anexează la contract abia după aprobarea prin semnătură',
    ],
    correct: 3,
    explanation:
      'Conducătorul instituției aprobă documentul prin semnătură; de aici el devine obligatoriu și se anexează la contract, iar conducătorul răspunde pentru bugetul și termenele asumate.',
  },
  {
    question:
      'Care dintre următoarele activități revine, în mod firesc, beneficiarului, și nu analistului TI?',
    options: [
      'Formularea scopului, a obiectivelor și a publicului-țintă',
      'Numerotarea cerințelor și verificarea faptului că sunt verificabile',
      'Adăugarea referințelor legale',
      'Adăugarea cerințelor tehnice',
    ],
    correct: 0,
    explanation:
      'Beneficiarul formulează scopul, obiectivele și publicul-țintă și descrie procesele de automatizat; răspunde pentru completitudinea nevoilor descrise.',
  },
  {
    question:
      'Se dau trei cerințe pentru o aplicație de înscrieri: (a) „Candidatul depune cererea printr-un formular online.” (b) „Formularul se afișează complet în cel mult 2 secunde.” (c) „Parolele se păstrează numai cifrat.” Câte dintre ele sunt cerințe nefuncționale?',
    options: [
      'Una: numai (b)',
      'Trei: toate',
      'Două: (b) și (c)',
      'Niciuna: toate sunt funcționale',
    ],
    correct: 2,
    explanation:
      'Cerința (a) spune ce face aplicația (funcțională); (b) și (c) spun cât de bine o face și se verifică prin măsurare sau inspecție (nefuncționale).',
  },
  {
    question: 'Cum se verifică, de regulă, o cerință funcțională, față de una nefuncțională?',
    options: [
      'Funcțională: prin măsurare; nefuncțională: prin încercare',
      'Ambele se verifică numai prin opinia beneficiarului',
      'Ambele se verifică exclusiv prin citirea codului-sursă',
      'Funcțională: prin încercare (funcția lucrează sau nu); nefuncțională: prin măsurare, pe baza unei valori și a unei metode',
    ],
    correct: 3,
    explanation:
      'Cerințele funcționale răspund la „ce face aplicația” și se probează prin încercare; cele nefuncționale răspund la „cât de bine” și au nevoie de o valoare și de o metodă de măsurare.',
  },
  {
    question:
      'De ce numărul de identificare al unei cerințe nu se refolosește niciodată, nici dacă cerința este eliminată din document?',
    options: [
      'Pentru că documentul ar deveni prea lung',
      'Pentru ca trimiterile din contract, din teste și din procesul-verbal să indice mereu aceeași cerință',
      'Pentru că numerele noi costă mai mult',
      'Pentru că executantul nu are voie să vadă numerele vechi',
    ],
    correct: 1,
    explanation:
      'Identificatorul face posibilă trasabilitatea cerință → scenariu de testare → rând din procesul-verbal; refolosirea lui ar amesteca cerințe diferite.',
  },
  {
    question: 'Ce consecință are, la recepție, neîndeplinirea unei cerințe marcate ca obligatorie?',
    options: [
      'Executantul primește doar o notă mai mică',
      'Cerința se șterge din document și recepția continuă',
      'Lucrarea nu poate fi recepționată: neîndeplinirea unei cerințe obligatorii înseamnă respingerea ei',
      'Beneficiarul plătește mai puțin, dar semnează procesul-verbal',
    ],
    correct: 2,
    explanation:
      'Gradul de obligativitate arată ce se negociază și ce nu: cerința obligatorie neîndeplinită înseamnă respingerea lucrării.',
  },
  {
    question:
      'Care element lipsește din cerința „Aplicația trebuie să permită încărcarea documentelor.”, față de anatomia unei cerințe bine scrise?',
    options: [
      'Valoarea măsurabilă (de exemplu formatul și dimensiunea maximă) și comportamentul la excepție',
      'Numele executantului și data semnării contractului',
      'Tehnologia prin care se face încărcarea',
      'Prețul funcției cerute',
    ],
    correct: 0,
    explanation:
      'O cerință bună are identificator, obligativitate, actor, acțiune și obiect, valoare măsurabilă și comportament la excepție; aici lipsesc ultimele două.',
  },
  {
    question:
      'Beneficiarul scrie în caietul de sarcini: „Aplicația se realizează cu cadrul de lucru X și cu baza de date Y”, fără niciun motiv. Care este problema principală?',
    options: [
      'Cerința este prea scurtă pentru a fi numerotată',
      'Tehnologiile nu pot fi menționate niciodată într-un document oficial',
      'Cerința impune mijlocul, nu rezultatul: restrânge inutil executantul și poate crește prețul',
      'Cerința ar trebui mutată în anexe, fără alte modificări',
    ],
    correct: 2,
    explanation:
      'Cerința spune ce rezultat se așteaptă, nu cum se implementează; tehnologia rămâne la executant, cu excepția cazurilor justificate (infrastructură, mentenanță, obligații legale).',
  },
  {
    question:
      'Cerința „Utilizatorul se înregistrează și își poate șterge contul.” trebuie corectată. Cum?',
    options: [
      'Se împarte în două cerințe: una pentru înregistrare, alta pentru ștergerea contului',
      'Se păstrează, deoarece e o propoziție scurtă',
      'Se completează cu numele tehnologiei folosite',
      'Se mută din tabelul cerințelor în notele de subsol',
    ],
    correct: 0,
    explanation:
      'O cerință înseamnă un verb și un obiect; dacă apare „și”, sunt probabil două cerințe. Altfel, la recepție răspunsul ar putea fi „parțial”.',
  },
  {
    question:
      'Care reformulare transformă corect cerința vagă „Interfața să fie intuitivă” într-una verificabilă?',
    options: [
      '„Interfața să fie cât mai simplă și prietenoasă.”',
      '„Un utilizator nou finalizează înscrierea în cel mult 5 minute, fără ajutor, în cel puțin 4 din 5 teste cu persoane diferite.”',
      '„Interfața să arate la fel de bine ca cele mai populare site-uri.”',
      '„Interfața să fie realizată de un designer cu experiență.”',
    ],
    correct: 1,
    explanation:
      'Fiecare adjectiv se înlocuiește cu o cifră sau cu o listă închisă și cu o metodă de verificare; doar prima variantă poate fi declarată îndeplinită sau neîndeplinită.',
  },
  {
    question:
      'Care dintre următoarele cerințe NU trece „testul cel mai simplu”: poți spune, citind cerința, ce vei face la recepție ca să verifici dacă e îndeplinită?',
    options: [
      '„Pagina de start se afișează în cel mult 3 secunde, măsurat cu fila Network.”',
      '„Parolele se păstrează numai sub formă cifrată, verificabil prin inspecția bazei de date.”',
      '„Interfața nu are derulare orizontală la lățimi între 320 px și 1920 px.”',
      '„Aplicația trebuie să fie modernă și atractivă.”',
    ],
    correct: 3,
    explanation:
      'Fără valoare și metodă de verificare nu există probă; „modern și atractiv” sunt aprecieri subiective, deci recepția ar deveni o discuție despre gusturi.',
  },
  {
    question:
      'Care este ordinea corectă a pașilor prin care o cerință ajunge să fie declarată îndeplinită la recepție?',
    options: [
      'Cerința → criteriul de acceptare → scenariul de testare → proba → procesul-verbal',
      'Cerința → procesul-verbal → proba → scenariul de testare → criteriul de acceptare',
      'Criteriul de acceptare → proba → cerința → procesul-verbal → scenariul de testare',
      'Scenariul de testare → cerința → procesul-verbal → criteriul de acceptare → proba',
    ],
    correct: 0,
    explanation:
      'Din cerință se deduce criteriul (valoare, unitate, mod de măsurare), apoi scenariul (pași, date de intrare, rezultat așteptat), proba în prezența părților și bifarea în procesul-verbal.',
  },
  {
    question: 'Când este indicat să se scrie criteriile de acceptare ale unei cerințe?',
    options: [
      'La sfârșitul proiectului, înainte de recepție',
      'După ce executantul termină programarea',
      'Numai dacă beneficiarul contestă rezultatul',
      'Odată cu cerința, în faza de redactare a caietului de sarcini',
    ],
    correct: 3,
    explanation:
      'Criteriile se scriu odată cu cerințele; o cerință fără criteriu de acceptare devine, la recepție, discuție despre gusturi.',
  },
  {
    question:
      'De ce se realizează prototipul și macheta aplicației după caietul de sarcini, și nu înaintea lui?',
    options: [
      'Pentru că macheta nu poate fi desenată pe calculator înainte de contract',
      'Pentru că macheta înlocuiește cerințele funcționale',
      'Pentru că ecranele desenate trebuie să acopere cerințele deja stabilite; fără ele s-ar desena la întâmplare',
      'Pentru că prototipul se face doar după testare',
    ],
    correct: 2,
    explanation:
      'Analiza cerințelor (caietul de sarcini) precede proiectarea; prototipul și macheta pornesc de la funcțiile, rolurile și fluxurile deja descrise.',
  },
  {
    question:
      'Macheta aprobată de beneficiar prezintă un ecran care contrazice o cerință din caietul de sarcini semnat. Ce este corect să se facă?',
    options: [
      'Se ignoră caietul de sarcini, pentru că macheta e mai nouă',
      'Se clarifică neconcordanța și se corectează în scris documentul sau macheta, deoarece caietul de sarcini este baza recepției',
      'Se lasă neconcordanța și se decide la recepție, în funcție de dispoziția părților',
      'Executantul alege varianta pe care o consideră mai ieftină',
    ],
    correct: 1,
    explanation:
      'Caietul de sarcini este anexat la contract și constituie baza recepției; modificările se fac în scris, de ambele părți, nu prin înțelegeri verbale.',
  },
  {
    question:
      'Care este înlănțuirea corectă a livrabilelor primelor trei etape ale dezvoltării unei aplicații Web?',
    options: [
      'Prototipul și macheta → caietul de sarcini → planul-calendar',
      'Planul-calendar → raportul de testare → caietul de sarcini',
      'Caietul de sarcini → aplicația funcțională → planul-calendar',
      'Caietul de sarcini → planul-calendar → prototipul și macheta',
    ],
    correct: 3,
    explanation:
      'Analiza cerințelor produce caietul de sarcini, planificarea produce planul-calendar, proiectarea produce prototipul și macheta; aceste etape nu produc cod, dar decid costul codului.',
  },
  {
    question: 'Ce rol are caietul de sarcini în etapa de testare a aplicației?',
    options: [
      'Înlocuiește raportul de testare',
      'Oferă lista cerințelor și criteriile față de care se verifică aplicația',
      'Descrie defectele găsite de testori',
      'Stabilește data lansării pe serverul de găzduire',
    ],
    correct: 1,
    explanation:
      'Testarea verifică funcțiile, compatibilitatea, securitatea și viteza; punctul de referință sunt cerințele și criteriile de acceptare din caietul de sarcini.',
  },
  {
    question:
      'Aplicația este în funcțiune, iar beneficiarul cere o funcție nouă, care nu figurează în caietul de sarcini. Cum se tratează corect cererea?',
    options: [
      'Ca o modificare a cerințelor, consemnată în scris și acceptată de ambele părți, cu efect asupra termenului și a costului',
      'Executantul o realizează gratuit, fără nicio formalitate',
      'Se ignoră, deoarece mentenanța nu permite funcții noi',
      'Se discută verbal, iar caietul de sarcini rămâne neschimbat',
    ],
    correct: 0,
    explanation:
      'Ce nu este în caietul de sarcini nu se poate pretinde; orice modificare se face în scris, prin act adițional semnat de ambele părți.',
  },
  {
    question: 'Cum se leagă legislația în vigoare de cerințele unui caiet de sarcini?',
    options: [
      'Actele normative se enumeră fără legătură cu cerințele',
      'Legislația se aplică doar dacă executantul o cere',
      'Pentru fiecare act normativ aplicabil se indică cerința concretă care decurge din el; cerințele astfel rezultate nu se negociază',
      'Cerințele legale se înlocuiesc cu preferințele beneficiarului',
    ],
    correct: 2,
    explanation:
      'Legislația aduce cerințe obligatorii (date personale, acces la informație, securitate cibernetică, interoperabilitate); fiecare act trebuie corelat cu o cerință concretă.',
  },
  {
    question: 'Când este cel mai ieftin să se corecteze o greșeală dintr-un caiet de sarcini?',
    options: [
      'La recepția finală',
      'În faza de redactare, înainte de aprobare și de semnarea contractului',
      'În perioada de garanție',
      'După lansarea aplicației',
    ],
    correct: 1,
    explanation:
      'Greșelile din caiet duc la lucrări refuzate, termene depășite și modificări plătite de două ori; în faza de redactare corectura este gratuită.',
  },
  {
    question:
      'O cerință importantă apare doar într-o notă de subsol a documentului. Ce greșeală frecventă este aceasta și cum se evită?',
    options: [
      'Cerință nenumerotată: tot ce este obligatoriu se trece într-un tabel, cu identificator unic',
      'Cerință vagă: se înlocuiește adjectivul cu o cifră',
      'Soluție în locul cerinței: se elimină numele tehnologiei',
      'Lipsa anexelor: se atașează macheta',
    ],
    correct: 0,
    explanation:
      'Cerințele nenumerotate, ascunse în paragrafe sau note de subsol, nu pot fi urmărite și nici bifate la recepție; nimic obligatoriu nu rămâne în afara tabelelor.',
  },
  {
    question: 'La ce întrebare răspund cerințele funcționale ale unei aplicații?',
    options: [
      'CE face aplicația',
      'CÂT DE BINE face aplicația',
      'CINE a făcut aplicația',
      'CU CE bani a fost făcută aplicația',
    ],
    correct: 0,
    explanation:
      'Cerințele funcționale descriu funcțiile aplicației; cât de bine le îndeplinește descriu cele nefuncționale.',
  },
  {
    question:
      'Într-o clinică privată, caietul de sarcini al aplicației de programări conține fraza: „Pacientul poate anula o programare din contul personal”. Ce tip de cerință este?',
    options: ['Nefuncțională', 'Funcțională', 'De documentare și instruire', 'De conținut'],
    correct: 1,
    explanation:
      'Fraza descrie o acțiune pe care un actor o poate face în aplicație, deci spune ce face aplicația.',
  },
  {
    question:
      'Cerința „Pagina de programări se afișează complet în cel mult 2 secunde, la o conexiune de 10 Mbps” este:',
    options: [
      'Funcțională, deoarece conține o cifră',
      'De conținut, deoarece privește o pagină',
      'Nefuncțională, de performanță',
      'De administrare, deoarece cere măsurare',
    ],
    correct: 2,
    explanation:
      'Nu descrie o funcție nouă, ci cât de repede lucrează aplicația, deci este nefuncțională (performanță).',
  },
  {
    question:
      'Un caiet de sarcini cere: „Aplicația rulează pe serverul Linux al instituției, pentru că echipa de mentenanță administrează deja doar astfel de servere”. Cum se clasifică și este justificată?',
    options: [
      'Cerință funcțională, nejustificată',
      'Cerință de conținut, justificată de volumul datelor',
      'Obiectiv SMART, nejustificat',
      'Cerință tehnică, justificată de infrastructura existentă',
    ],
    correct: 3,
    explanation:
      'Platforma se impune în cerințele tehnice doar când există un motiv real, iar aici motivul este infrastructura și personalul de mentenanță.',
  },
  {
    question:
      'Furnizorul trebuie să predea un manual al administratorului, în limba română, și să instruiască personalul secretariatului. Cărei categorii îi aparțin aceste cerințe?',
    options: ['Documentare și instruire', 'Funcționale', 'Tehnice', 'De conținut'],
    correct: 0,
    explanation:
      'Manualele și instruirea personalului formează categoria cerințelor de documentare și instruire.',
  },
  {
    question:
      '„Toate știrile publicate în ultimii trei ani se transferă din vechiul site în cel nou.” Ce fel de cerință este aceasta?',
    options: [
      'De securitate',
      'De conținut (migrarea conținutului)',
      'De performanță',
      'De documentare',
    ],
    correct: 1,
    explanation:
      'Volumul de conținut migrat din sistemul vechi și cine îl migrează sunt cerințe de conținut.',
  },
  {
    question:
      '„Redactorul își administrează articolele printr-o interfață Web, fără cunoștințe de programare.” Cărei categorii îi aparține în mod direct?',
    options: [
      'Cerințe de găzduire',
      'Cerințe de securitate',
      'Cerințe de administrare a conținutului',
      'Cerințe de compatibilitate cu browserele',
    ],
    correct: 2,
    explanation: 'Cerințele de administrare spun cine și cum întreține conținutul după livrare.',
  },
  {
    question: 'Care dintre următoarele cerințe este formulată vag?',
    options: [
      '„Orice formular se completează în cel mult cinci pași.”',
      '„Parolele se păstrează numai cifrate.”',
      '„Lista se exportă în format XLSX.”',
      '„Aplicația trebuie să fie ușor de folosit.”',
    ],
    correct: 3,
    explanation:
      '„Ușor de folosit” este o apreciere subiectivă, fără valoare sau metodă de verificare; celelalte pot fi verificate.',
  },
  {
    question: 'Care este cea mai bună reformulare pentru „Magazinul online să fie sigur”?',
    options: [
      '„Datele clientului se transmit numai prin HTTPS, cu certificat valid, iar parolele se păstrează cifrat.”',
      '„Magazinul folosește cele mai moderne metode de securitate.”',
      '„Securitatea este o prioritate pentru echipa de dezvoltare.”',
      '„Magazinul nu trebuie să fie niciodată atacat.”',
    ],
    correct: 0,
    explanation: 'Varianta bună înlocuiește adjectivul cu condiții concrete care se pot verifica.',
  },
  {
    question: 'Care dintre cerințele unei școli trebuie despărțită în mai multe cerințe?',
    options: [
      '„Părintele vede notele copilului la ultima materie predată.”',
      '„Părintele vede notele copilului și descarcă orarul clasei.”',
      '„Profesorul introduce nota la o disciplină.”',
      '„Directorul aprobă cererea de transfer.”',
    ],
    correct: 1,
    explanation:
      'Prima cerință conține două acțiuni diferite; dacă una nu merge, cerința nu poate fi nici acceptată, nici respinsă.',
  },
  {
    question: 'Care este un semn simplu că o cerință conține, probabil, două cerințe?',
    options: [
      'Conține o valoare numerică',
      'Numește un actor',
      'Leagă două acțiuni diferite prin „și”',
      'Are un identificator',
    ],
    correct: 2,
    explanation:
      'Regula practică: o cerință înseamnă un verb și un obiect; „și” între acțiuni diferite arată două cerințe.',
  },
  {
    question: 'Care dintre cerințe descrie un rezultat, nu o soluție tehnică?',
    options: [
      '„Căutarea se realizează cu motorul Elasticsearch.”',
      '„Lista de produse se construiește cu biblioteca X.”',
      '„Datele se păstrează în baza de date Y.”',
      '„Căutarea returnează numai produsele care conțin cuvântul introdus, ignorând diacriticele.”',
    ],
    correct: 3,
    explanation:
      'O cerință bună spune ce rezultat se așteaptă și cum se verifică; numele unei tehnologii este o soluție.',
  },
  {
    question:
      'De ce nu este bine ca beneficiarul să impună în cerință limbajul, biblioteca sau numele butonului?',
    options: [
      'Soluția rămâne la executant, iar beneficiarul verifică rezultatul',
      'Pentru că beneficiarul nu are voie să cunoască tehnologiile',
      'Pentru că tehnologia nu influențează niciodată costul',
      'Pentru că executantul nu poate folosi decât tehnologii noi',
    ],
    correct: 0,
    explanation:
      'Cerința spune ce se obține, nu cum; astfel executantul poate alege soluția potrivită, iar rezultatul rămâne verificabil.',
  },
  {
    question: 'Când este totuși justificat să se impună o tehnologie în caietul de sarcini?',
    options: [
      'Când beneficiarul preferă o tehnologie cunoscută din auzite',
      'Când există un motiv real, cum ar fi infrastructura existentă sau o obligație legală',
      'Când vrea să pară mai profesionist documentul',
      'Oricând, dacă tehnologia este populară',
    ],
    correct: 1,
    explanation:
      'Tehnologia se impune doar pentru un motiv real și, de preferat, motivul se menționează.',
  },
  {
    question: 'Care este rolul principal al identificatorului unic al unei cerințe?',
    options: [
      'Arată cât de importantă este față de celelalte',
      'Înlocuiește descrierea cerinței',
      'Permite citarea ei în contract și legarea de testare și recepție',
      'Indică numele executantului',
    ],
    correct: 2,
    explanation:
      'Un cod care nu se repetă face posibilă trasabilitatea și trimiterea exactă la cerință.',
  },
  {
    question:
      'O cerință a fost ștearsă din caietul de sarcini în timpul redactării. Ce se întâmplă cu numărul ei?',
    options: [
      'Se atribuie imediat următoarei cerințe noi',
      'Se refolosește doar pentru cerințe din altă categorie',
      'Se șterge și se renumerotează tot documentul',
      'Nu se mai refolosește pentru altă cerință',
    ],
    correct: 3,
    explanation:
      'Un identificator nu se refolosește, pentru ca trimiterile deja făcute să nu ducă la altă cerință.',
  },
  {
    question: 'Ce înseamnă că o cerință este marcată ca „obligatorie”?',
    options: [
      'Neîndeplinirea ei duce la respingerea lucrării',
      'Se realizează dacă mai rămân timp și bani',
      'Este doar o recomandare pentru executant',
      'Privește numai beneficiarul',
    ],
    correct: 0,
    explanation:
      'Obligativitatea arată ce nu se negociază: cerința obligatorie neîndeplinită înseamnă lucrare respinsă.',
  },
  {
    question: 'Ce înseamnă că o cerință este marcată „de dorit”?',
    options: [
      'Se realizează obligatoriu, dar mai târziu',
      'Se realizează dacă timpul și bugetul permit',
      'Se realizează numai de beneficiar',
      'Se verifică doar la prima versiune',
    ],
    correct: 1,
    explanation: 'Cerințele de dorit nu blochează recepția; ele se fac în măsura resurselor.',
  },
  {
    question:
      'Caietul de sarcini precizează: „Beneficiarul furnizează textele paginilor în termen de două săptămâni de la semnare.” Ce grad de obligativitate i se potrivește?',
    options: [
      'Obligatoriu pentru executant',
      'De dorit, pentru executant',
      'Informativ, fiindcă este o obligație a beneficiarului',
      'Nu are nevoie de grad',
    ],
    correct: 2,
    explanation:
      'Gradul informativ marchează obligațiile care revin beneficiarului, nu executantului.',
  },
  {
    question: 'Care este ordinea corectă în lanțul de trasabilitate al unei cerințe?',
    options: [
      'Procesul-verbal, cerința, scenariul de testare',
      'Scenariul de testare, procesul-verbal, cerința',
      'Cerința, procesul-verbal, scenariul de testare',
      'Cerința, scenariul de testare, rândul din procesul-verbal de recepție',
    ],
    correct: 3,
    explanation:
      'Aceeași cerință, identificată prin cod unic, se regăsește mai întâi în scenariul de testare și apoi în procesul-verbal.',
  },
  {
    question: 'Ce este un criteriu de acceptare?',
    options: [
      'Condiția exactă, cu valoare, unitate și mod de măsurare, după care cerința se consideră îndeplinită',
      'O părere a beneficiarului despre aspectul aplicației',
      'Lista tehnologiilor folosite',
      'Termenul de predare a lucrării',
    ],
    correct: 0,
    explanation:
      'Criteriul transformă cerința într-o probă concretă, cu rezultat clar: îndeplinită sau neîndeplinită.',
  },
  {
    question: 'Când trebuie scrise criteriile de acceptare?',
    options: [
      'Doar la sfârșitul proiectului',
      'Odată cu cerințele, la redactarea caietului de sarcini',
      'La prima ședință de testare',
      'După semnarea procesului-verbal de recepție',
    ],
    correct: 1,
    explanation:
      'Dacă se scriu târziu, recepția devine o discuție despre gusturi; ele se stabilesc odată cu cerința.',
  },
  {
    question:
      'Ce se întâmplă la recepție cu o cerință obligatorie care nu are niciun criteriu de acceptare?',
    options: [
      'Se consideră automat îndeplinită',
      'Se consideră automat respinsă',
      'Verificarea ei devine o discuție despre gusturi',
      'Se mută în anexe',
    ],
    correct: 2,
    explanation:
      'Fără criteriu nu există probă comună, iar părțile pot interpreta rezultatul diferit.',
  },
  {
    question: 'Ce coloane are, în mod obișnuit, un tabel de cerințe dintr-un caiet de sarcini?',
    options: [
      'Nume, prenume, semnătură',
      'Preț, termen, garanție',
      'Actor, buton, culoare',
      'Identificator, obligativitate, descrierea cerinței',
    ],
    correct: 3,
    explanation:
      'Tabelul de cerințe păstrează trei lucruri: cum o citez, cât de obligatorie este și ce se cere.',
  },
  {
    question: 'Cum se prezintă corect cerințele funcționale într-un caiet de sarcini?',
    options: [
      'Grupate pe componente, cu o scurtă descriere a componentei înainte de tabelul ei',
      'Într-un singur paragraf, în ordinea în care au venit ideile',
      'Aranjate după prioritatea personală a executantului',
      'Amestecate cu criteriile de acceptare ale altor componente',
    ],
    correct: 0,
    explanation:
      'Gruparea pe componente (de exemplu pagina publică, administrare) face documentul ușor de citit, de ofertat și de testat.',
  },
  {
    question:
      'Cine stabilește, de regulă, cerințele dintr-un caiet de sarcini pentru o aplicație Web?',
    options: [
      'Executantul, singur, după semnarea contractului',
      'Beneficiarul, ajutat de un analist TI, iar documentul îl aprobă conducerea instituției',
      'Utilizatorii finali, prin vot, fără aprobare',
      'Un ofertant ales aleatoriu',
    ],
    correct: 1,
    explanation:
      'Beneficiarul știe ce are nevoie, analistul le transformă în cerințe verificabile, iar conducătorul aprobă documentul.',
  },
  {
    question:
      'La recepție, beneficiarul cere o funcție care nu apare nicăieri în caietul de sarcini semnat. Ce poate face executantul?',
    options: [
      'Trebuie s-o facă gratuit',
      'Trebuie s-o facă, dar în dublul termenului',
      'Poate refuza, fiindcă ce nu e în caietul de sarcini nu se poate pretinde',
      'Trebuie să returneze avansul',
    ],
    correct: 2,
    explanation:
      'Caietul de sarcini protejează ambele părți: beneficiarul are cu ce cere remedieri, executantul are cu ce refuza cerințe apărute ulterior.',
  },
  {
    question: 'Care dintre următoarele este un obiectiv formulat SMART?',
    options: [
      '„Să avem un site mai bun.”',
      '„Să creștem satisfacția tuturor.”',
      '„Să folosim tehnologii moderne.”',
      '„Până la sfârșitul anului, minimum 60% din cererile de înscriere se depun online.”',
    ],
    correct: 3,
    explanation: 'Obiectivul SMART are valoare măsurabilă și termen; celelalte sunt vagi.',
  },
  {
    question:
      'Într-un caiet de sarcini, aceeași persoană apare când ca „client”, când ca „utilizator”, când ca „cumpărător”, fără nicio explicație. Ce problemă creează acest lucru?',
    options: [
      'Documentul devine prea scurt pentru a fi aprobat',
      'Cerințele devin automat mai ușor de verificat',
      'Părțile pot înțelege termenii diferit, iar cerințele devin ambigue; același lucru trebuie numit mereu la fel și definit în glosar',
      'Executantul este obligat să folosească alte tehnologii',
    ],
    correct: 2,
    explanation:
      'Un termen folosit în mai multe feluri poate fi interpretat diferit de beneficiar și de executant; de aceea aceeași noțiune are un singur nume, definit în glosar.',
  },
  {
    question: 'Ce înseamnă litera „M” din abrevierea SMART?',
    options: ['Modern', 'Măsurabil', 'Mandatar', 'Manual'],
    correct: 1,
    explanation:
      'Un obiectiv trebuie să aibă o valoare care se poate măsura, altfel nu se poate spune dacă a fost atins.',
  },
  {
    question:
      'Beneficiarul scrie: „Site-ul să arate bine pe telefon.” Care este cea mai bună reformulare?',
    options: [
      '„Site-ul arată modern pe telefoanele noi.”',
      '„Designerul verifică aspectul pe telefonul lui.”',
      '„Interfața se adaptează la lățimi de la 320 px la 1920 px, fără derulare orizontală.”',
      '„Site-ul se deschide și pe telefon.”',
    ],
    correct: 2,
    explanation:
      'Se înlocuiește aprecierea subiectivă cu un interval clar de lățimi și o condiție verificabilă.',
  },
  {
    question:
      'Un caiet de sarcini conține: „Pentru afișarea rapidă a listei se folosește framework-ul X.” Ce este greșit?',
    options: [
      'Este prea scurtă',
      'Nu are actor',
      'Conține un verb',
      'Impune o soluție tehnică și folosește un termen vag („rapidă”)',
    ],
    correct: 3,
    explanation:
      'Textul are două greșeli frecvente: soluția în locul cerinței și un adjectiv fără valoare.',
  },
  {
    question:
      'Cerința: „Utilizatorul încarcă o fotografie de profil de cel mult 5 MB.” Ce element al unei cerințe bine scrise lipsește?',
    options: [
      'Comportamentul la excepție: ce se întâmplă dacă fișierul depășește limita',
      'Valoarea măsurabilă',
      'Actorul',
      'Acțiunea și obiectul',
    ],
    correct: 0,
    explanation:
      'Cerința are actor, acțiune, obiect și valoare, dar nu spune ce afișează sistemul dacă limita e depășită.',
  },
  {
    question:
      'În cerința „Clientul autentificat poate descărca factura în format PDF”, ce element reprezintă cuvintele „Clientul autentificat”?',
    options: ['Valoarea măsurabilă', 'Actorul', 'Comportamentul la excepție', 'Identificatorul'],
    correct: 1,
    explanation: 'Actorul arată cine execută acțiunea și în ce calitate.',
  },
  {
    question: 'Cum se verifică, în general, o cerință funcțională?',
    options: [
      'Prin măsurarea unei valori de performanță',
      'Prin părerea majorității utilizatorilor',
      'Prin încercare: funcția lucrează sau nu',
      'Prin numărul de pagini ale manualului',
    ],
    correct: 2,
    explanation:
      'Cerința funcțională se probează executând acțiunea; cea nefuncțională cere valoare și metodă de măsurare.',
  },
  {
    question:
      'O aplicație are toate funcțiile cerute, dar la recepție se încarcă în 14 secunde, deși cerința fixa un maxim mult mai mic. Ce concluzie este corectă?',
    options: [
      'Trebuie acceptată, pentru că funcțiile sunt complete',
      'Trebuie acceptată, pentru că viteza nu poate fi verificată',
      'Este corectă doar dacă beneficiarul nu observă',
      'Poate fi respinsă, deoarece cerința nefuncțională obligatorie nu este îndeplinită',
    ],
    correct: 3,
    explanation:
      'Funcțiile corecte nu compensează o cerință nefuncțională obligatorie neîndeplinită.',
  },
  {
    question: 'Care dintre cerințele de accesibilitate este formulată măsurabil?',
    options: [
      '„Contrastul dintre text și fundal este de cel puțin 4,5:1, verificat cu un instrument de audit.”',
      '„Textul este lizibil pentru toată lumea.”',
      '„Aplicația este prietenoasă cu persoanele cu dizabilități.”',
      '„Culorile sunt alese cu grijă.”',
    ],
    correct: 0,
    explanation: 'Doar prima are valoare și metodă de verificare.',
  },
  {
    question:
      'Cum se verifică, de regulă, o cerință de disponibilitate lunară exprimată în procente?',
    options: [
      'Printr-o discuție la recepție',
      'Pe baza raportului unui sistem de monitorizare',
      'Prin numărul de utilizatori mulțumiți',
      'Prin verificarea codului-sursă',
    ],
    correct: 1,
    explanation:
      'Disponibilitatea este o valoare măsurabilă în timp, deci se dovedește cu rapoarte de monitorizare.',
  },
  {
    question: 'Cerința „Site-ul funcționează pe browsere moderne” devine verificabilă dacă:',
    options: [
      'Se adaugă cuvântul „foarte”',
      'Se cere părerea unui singur tester',
      'Se enumeră browserele și versiunile suportate',
      'Se elimină complet cerința',
    ],
    correct: 2,
    explanation: 'Înlocuiește adjectivul cu o listă închisă, pe care o poți bifa la testare.',
  },
  {
    question: 'Care dintre cerințele unui magazin online este scrisă cel mai bine?',
    options: [
      '„Coșul de cumpărături trebuie să fie intuitiv și modern.”',
      '„Se folosește o bază de date relațională pentru coș.”',
      '„Coșul gestionează produse, comenzi, plăți și livrări.”',
      '„Clientul poate adăuga un produs în coș; dacă stocul este zero, sistemul afișează mesajul «Stoc epuizat».”',
    ],
    correct: 3,
    explanation:
      'Are actor, acțiune, obiect și comportament la excepție; celelalte sunt vagă, soluție și cerințe multiple.',
  },
  {
    question:
      'Cerințele nefuncționale se verifică prin măsurare, pe baza unei valori și a unei metode.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Cerința are sens la recepție doar dacă are valoare (de exemplu un timp) și o metodă de măsurare.',
  },
  {
    question:
      'Cerința „Interfața trebuie să fie intuitivă” este verificabilă dacă testerul este atent.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Termenul „intuitiv” e subiectiv; fără valoare sau listă închisă, oricine îl poate interpreta altfel.',
  },
  {
    question:
      'O cerință bine scrisă poate fi verificată la recepție de oricine citește caietul de sarcini, fără să fie nevoie ca autorul ei să explice ce a vrut să spună.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Cerința trebuie să fie clară și verificabilă prin ea însăși; dacă are nevoie de explicațiile autorului, e formulată ambiguu.',
  },
  {
    question: 'O cerință marcată „de dorit” trebuie îndeplinită, altfel lucrarea este respinsă.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Respingerea lucrării este legată de cerințele obligatorii; cele de dorit se fac dacă timpul și bugetul permit.',
  },
  {
    question:
      'O tehnologie poate fi impusă prin cerință dacă există un motiv real, cum ar fi infrastructura existentă sau o obligație legală.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'În mod normal soluția rămâne la executant, dar motivele reale justifică excepția.',
  },
  {
    question:
      'O cerință care leagă două acțiuni diferite prin „și” este în regulă, deoarece este mai scurtă.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Cerința cu două acțiuni nu poate fi nici acceptată, nici respinsă dacă una e îndeplinită și cealaltă nu; trebuie despărțită.',
  },
  {
    question: 'Cerințele de conținut pot preciza cine furnizează textele pentru fiecare pagină.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Harta paginilor și furnizorul textelor, plus volumul migrat, sunt cerințe de conținut.',
  },
  {
    question: 'Un obiectiv SMART și o cerință verificabilă sunt același lucru.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Obiectivul arată rezultatul urmărit prin proiect; cerința este condiția concretă pe care o verifică recepția.',
  },
  {
    question:
      'Un identificator unic permite legarea cerinței de scenariul de testare și de procesul-verbal de recepție.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Aceeași cerință poate fi urmărită de la caietul de sarcini până la recepție.',
  },
  {
    question: 'Executantul poate renunța singur la o cerință obligatorie dacă i se pare dificilă.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Cerințele obligatorii fac parte din contractul tehnic; modificarea lor necesită acordul părților.',
  },
  {
    question:
      'Într-un caiet de sarcini, o cerință spune că raportul lunar se generează în cel mult 5 secunde, iar altă cerință, despre același raport, în cel mult 10 secunde. Ce este corect să se facă?',
    options: [
      'Se lasă ambele, iar executantul alege valoarea convenabilă',
      'Se rezolvă contradicția la redactare, înainte de aprobare, păstrând o singură valoare',
      'Se așteaptă recepția, unde beneficiarul decide valoarea',
      'Se șterge raportul din caiet',
    ],
    correct: 1,
    explanation:
      'Două cerințe care se contrazic nu pot fi îndeplinite și verificate simultan; corectura se face în faza de redactare, când este încă gratuită.',
  },
  {
    question:
      'Un site școlar are ca public-țintă elevii, părinții și candidații. Redactorul și administratorul care întrețin site-ul sunt, în caiet, descriși ca:',
    options: [
      'Obiective ale proiectului',
      'Roluri de utilizator, cu drepturi definite în aplicație',
      'Noțiuni din glosar, fără alte efecte',
      'Părți contractante, alături de beneficiar',
    ],
    correct: 1,
    explanation:
      'Publicul-țintă arată cine folosește aplicația; rolurile de utilizator stabilesc ce are dreptul să facă fiecare în aplicație, de exemplu să publice sau doar să citească.',
  },
  {
    question: 'Cine aprobă caietul de sarcini și prin ce gest?',
    options: [
      'Programatorul principal, prin începerea lucrului',
      'Utilizatorii finali, prin vot',
      'Conducătorul instituției beneficiare, prin semnătură',
      'Analistul TI, prin simpla redactare a documentului',
    ],
    correct: 2,
    explanation:
      'Prin semnătura conducătorului documentul devine obligatoriu și se anexează la contract; conducătorul răspunde de bugetul și termenele asumate.',
  },
  {
    question:
      'Ce se verifică, printre altele, asupra întregului caiet de sarcini înainte de aprobare?',
    options: [
      'Că numărul de pagini este par',
      'Că fiecare cerință are identificator unic și că nicio cerință nu impune o soluție tehnică fără motiv real',
      'Că executantul a început deja programarea',
      'Că toate cerințele sunt marcate „de dorit”',
    ],
    correct: 1,
    explanation:
      'Verificarea finală urmărește identificarea unică a cerințelor și absența soluțiilor tehnice impuse fără motiv, pentru ca documentul să fie verificabil.',
  },
  {
    question: 'Care dintre afirmații descrie corect împărțirea rolurilor între părți?',
    options: [
      'Beneficiarul știe ce îi trebuie și de ce, executantul știe cum se face și cât costă',
      'Beneficiarul decide tehnologia, iar executantul decide scopul aplicației',
      'Executantul stabilește nevoile, iar beneficiarul doar plătește',
      'Ambele părți știu la fel de bine și ce, și cum, și cât costă',
    ],
    correct: 0,
    explanation:
      'Caietul de sarcini leagă cele două perspective: nevoile (ce și de ce) și realizarea (cum și cât).',
  },
  {
    question: 'Care este ordinea logică a capitolelor unui caiet de sarcini?',
    options: [
      'Cum se verifică, ce se cere, de la ce se pornește, de ce se face',
      'De ce se face aplicația, de la ce se pornește, ce se cere, cum se verifică',
      'Ce se cere, de ce se face, cum se verifică, de la ce se pornește',
      'Anexele, apoi cerințele, apoi scopul',
    ],
    correct: 1,
    explanation:
      'Ordinea merge de la context la cerințe și abia la final la verificare; un capitol sărit lasă o gaură pe care o plătește cineva.',
  },
  {
    question:
      'Într-un caiet de sarcini pentru un magazin online, în ce capitol pui lista cu termenii folosiți (de exemplu „comandă”, „coș”, „client”) și sensul lor?',
    options: [
      'În criteriile de acceptare',
      'În capitolul cerințelor nefuncționale',
      'În informația generală, ca glosar de noțiuni',
      'În capitolul despre garanție',
    ],
    correct: 2,
    explanation:
      'Glosarul stă la începutul documentului, pentru ca ambele părți să înțeleagă la fel aceleași cuvinte.',
  },
  {
    question:
      'O școală are deja un site vechi, lent și greu de actualizat. În ce capitol descrii aceste probleme?',
    options: [
      'În criteriile de acceptare',
      'În glosarul de noțiuni',
      'În capitolul de garanție',
      'În situația curentă',
    ],
    correct: 3,
    explanation:
      'Situația curentă descrie ce există astăzi, arhitectura lui și problemele constatate, adică punctul de pornire.',
  },
  {
    question:
      'Pentru o clinică se descrie un proces: pacientul cere o programare, recepția o confirmă, medicul o primește în agendă. Fiecare activitate are actori, date de intrare și date de ieșire. În ce capitol se află acest material?',
    options: [
      'Fluxurile de lucru',
      'Referințele legale',
      'Anexele cu identitatea vizuală',
      'Garanția',
    ],
    correct: 0,
    explanation:
      'Fluxurile de lucru descriu procesele pe care aplicația le automatizează, cu actori și date; din ele se nasc mai târziu cerințele funcționale.',
  },
  {
    question:
      'Unde se descrie, pentru o componentă a aplicației, cine o folosește și ce are dreptul să facă fiecare rol de utilizator?',
    options: [
      'Numai în glosar',
      'La descrierea componentei, în capitolul cerințelor funcționale grupate pe componente',
      'Numai în procesul-verbal de recepție',
      'Nu se descrie nicăieri, rolurile se deduc singure',
    ],
    correct: 1,
    explanation:
      'Fiecare componentă are o scurtă descriere, rolurile care o folosesc și drepturile lor, urmate de tabelul cerințelor.',
  },
  {
    question:
      'Care capitol spune cum se probează fiecare cerință la recepție și ce documente se predau?',
    options: [
      'Situația curentă',
      'Informația generală',
      'Criteriile de acceptare',
      'Referințele legale',
    ],
    correct: 2,
    explanation:
      'Criteriile de acceptare leagă fiecare cerință obligatorie de o probă concretă și de procesul-verbal de recepție.',
  },
  {
    question:
      'Un formular de înscriere are zeci de câmpuri, fiecare cu valorile sale posibile, iar mai multe cerințe se referă la el. Unde îl pui ca să nu încarci corpul documentului?',
    options: [
      'Într-o notă de subsol a unei cerințe',
      'Se omite, executantul îl va ghici',
      'Se mută în glosar',
      'Într-o anexă numerotată, la care cerințele fac trimitere',
    ],
    correct: 3,
    explanation:
      'Anexele conțin materialul prea voluminos sau prea detaliat pentru corp, dar referit direct din cerințe.',
  },
  {
    question: 'De ce există în caiet capitolul de referințe legale?',
    options: [
      'Arată care cerințe nu se negociază, pentru că vin din lege, nu de la beneficiar',
      'Pentru ca documentul să pară mai lung și mai oficial',
      'Pentru ca executantul să poată cere un preț mai mare',
      'Pentru că legile înlocuiesc cerințele funcționale',
    ],
    correct: 0,
    explanation:
      'Cerințele care decurg din legislație sunt obligatorii indiferent de preferințele părților.',
  },
  {
    question: 'De ce este nevoie de un glosar de noțiuni și acronime la începutul documentului?',
    options: [
      'Pentru ca documentul să aibă un număr minim de pagini',
      'Pentru ca beneficiarul și executantul să folosească aceleași cuvinte cu același sens',
      'Pentru a ascunde termenii tehnici de beneficiar',
      'Pentru a înlocui descrierea cerințelor',
    ],
    correct: 1,
    explanation: 'Dacă părțile înțeleg diferit un termen, restul documentului își pierde valoarea.',
  },
  {
    question: 'Care este diferența corectă dintre scopul și obiectivele unei aplicații?',
    options: [
      'Scopul este o listă de funcții, obiectivele sunt culori și fonturi',
      'Sunt același lucru, scrise de două ori',
      'Scopul spune, pe scurt, de ce se face aplicația; obiectivele sunt rezultate concrete și măsurabile',
      'Scopul îl alege executantul, obiectivele le alege beneficiarul',
    ],
    correct: 2,
    explanation:
      'Scopul dă direcția într-o propoziție; obiectivele o traduc în rezultate care pot fi verificate.',
  },
  {
    question:
      'De ce se definește în caiet publicul-țintă (categoriile de utilizatori ai aplicației)?',
    options: [
      'Pentru că publicul-țintă semnează recepția',
      'Pentru a stabili prețul final',
      'Pentru a alege numele aplicației',
      'Pentru că de el depind interfața, limbile, accesibilitatea și rolurile aplicației',
    ],
    correct: 3,
    explanation:
      'Cine va folosi aplicația determină multe cerințe: ce se afișează, în ce limbi, cu ce drepturi, cât de accesibil.',
  },
  {
    question: 'În ce moment al dezvoltării unei aplicații Web apare caietul de sarcini?',
    options: [
      'Înainte de proiectare și prototip, după ce nevoile au fost identificate',
      'După lansarea aplicației, ca documentație',
      'După testarea finală',
      'În paralel cu mentenanța, fără legătură cu etapele anterioare',
    ],
    correct: 0,
    explanation:
      'Designul, prototipul și programarea pornesc de la cerințele deja fixate, nu invers.',
  },
  {
    question: 'Cum folosește echipa de testare caietul de sarcini?',
    options: [
      'Testele se aleg liber, caietul nu contează',
      'Fiecare test se construiește pornind de la o cerință, iar rezultatul se compară cu criteriul ei de acceptare',
      'Se testează doar ce a vrut programatorul',
      'Se testează numai aspectul, nu și funcțiile',
    ],
    correct: 1,
    explanation:
      'Trasabilitatea cerință → test → recepție arată că tot ce s-a cerut a fost verificat.',
  },
  {
    question:
      'La jumătatea proiectului, beneficiarul cere o funcție nouă, care nu e în caiet. Ce este corect să se întâmple?',
    options: [
      'Executantul o face imediat, fără alte formalități',
      'Beneficiarul o adaugă singur în document, fără să anunțe',
      'Se redactează o modificare scrisă (act adițional), semnată de ambele părți, cu efectul asupra costului și termenului',
      'Cererea se ignoră, indiferent de importanță',
    ],
    correct: 2,
    explanation:
      'Orice schimbare de cerință se consemnează în scris și se aprobă, altfel apar dispute la recepție.',
  },
  {
    question:
      'Un caiet de sarcini conține cerințe scrise într-un text continuu, fără numere, unele ascunse în note de subsol. Care este consecința principală?',
    options: [
      'Documentul devine mai ușor de citit',
      'Executantul poate oferta mai precis',
      'Recepția se simplifică',
      'Cerințele nu pot fi urmărite, testate și bifate la recepție',
    ],
    correct: 3,
    explanation:
      'Fără identificator unic nu se poate arăta ce cerință a fost îndeplinită; nimic obligatoriu nu trebuie să rămână în afara tabelelor.',
  },
  {
    question: 'Ce se întâmplă cu o cerință scrisă fără niciun criteriu de acceptare?',
    options: [
      'La recepție devine o discuție despre gusturi',
      'Se verifică automat',
      'Se consideră îndeplinită',
      'Se amână fără consecințe',
    ],
    correct: 0,
    explanation:
      'Fără o condiție exactă de verificare, fiecare parte poate susține că cerința e sau nu îndeplinită.',
  },
  {
    question:
      'Într-un caiet scrie: „Aplicația se construiește cu framework-ul X și baza de date Y”, fără niciun motiv. Ce este greșit?',
    options: [
      'Nimic, tehnologia trebuie mereu impusă',
      'Se impune soluția în locul cerinței, deși nu există un motiv real',
      'Lipsește numele executantului',
      'Cerința este prea scurtă, dar corectă',
    ],
    correct: 1,
    explanation:
      'Se descrie rezultatul așteptat; tehnologia se impune doar cu motiv real (infrastructură, mentenanță, obligație legală).',
  },
  {
    question: 'Care este responsabilitatea principală a analistului TI?',
    options: [
      'Plata lucrării',
      'Aprobarea finală a documentului',
      'Claritatea și verificabilitatea cerințelor',
      'Programarea aplicației',
    ],
    correct: 2,
    explanation:
      'El transformă nevoile în cerințe numerotate și verificabile și adaugă referințele legale și cerințele tehnice.',
  },
  {
    question:
      'O cerință trimite la „Anexa 3 — macheta paginii de start”, dar anexa nu e atașată documentului. Ce efect are?',
    options: [
      'Niciun efect, executantul va desena macheta cum vrea',
      'Cerința se consideră îndeplinită automat',
      'Se anulează tot documentul',
      'Cerința care se sprijină pe anexă nu mai poate fi verificată și devine neclară',
    ],
    correct: 3,
    explanation: 'Fiecare anexă trebuie numerotată, referită din text și atașată efectiv.',
  },
  {
    question:
      'De ce, într-un caiet de sarcini serios, cerințele propriu-zise ocupă adesea mai puțin de jumătate din text?',
    options: [
      'Pentru că restul este contextul fără de care cerințele nu se pot înțelege',
      'Pentru că restul sunt completări inutile',
      'Pentru că cerințele se scriu doar în anexe',
      'Pentru că executantul adaugă singur text',
    ],
    correct: 0,
    explanation:
      'Informația generală, situația curentă și fluxurile de lucru explică de ce și în ce condiții se cer funcțiile.',
  },
  {
    question:
      'Două firme dau prețuri foarte diferite pentru „un site frumos și modern”. Ce lipsește, în primul rând?',
    options: [
      'Un executant mai ieftin',
      'Un caiet de sarcini cu cerințe numerotate și verificabile, la care să se raporteze ambele oferte',
      'Un termen mai lung',
      'Un logo mai bun',
    ],
    correct: 1,
    explanation:
      'Dacă toți ofertanții pornesc de la același document, ofertele devin comparabile; adjective ca „frumos” nu pot fi evaluate.',
  },
  {
    question:
      'Site-ul unui magazin colectează adresele clienților. Unde apare, în caiet, legea privind protecția datelor personale și ce decurge din ea?',
    options: [
      'Doar în criteriul de garanție',
      'Nicăieri, e treaba executantului',
      'În referințele legale, iar din ea decurg cerințe concrete despre ce date se colectează și cine are acces',
      'Numai în glosar, fără alte cerințe',
    ],
    correct: 2,
    explanation:
      'Referințele legale arată sursa obligațiilor; cerințele concrete se scriu apoi în tabele, cu criterii de acceptare.',
  },
  {
    question: 'Care este lanțul corect de la cerință la recepție?',
    options: [
      'Proces-verbal → probă → cerință → criteriu',
      'Probă → cerință → scenariu → proces-verbal',
      'Scenariu de testare → cerință → plată → criteriu',
      'Cerință → criteriu de acceptare → scenariu de testare → probă → proces-verbal',
    ],
    correct: 3,
    explanation:
      'Fiecare pas se sprijină pe cel dinainte: condiția exactă duce la test, testul la probă, proba la procesul-verbal.',
  },
  {
    question:
      'Ce urmează din procesul-verbal de recepție, în care cerințele sunt marcate îndeplinite sau neîndeplinite?',
    options: [
      'Plata și, după caz, remedierile',
      'Rescrierea caietului de sarcini',
      'Alegerea unui alt executant',
      'Nimic, e doar o formalitate',
    ],
    correct: 0,
    explanation: 'Procesul-verbal este baza plății și a cererii de remedieri.',
  },
  {
    question: 'Care dintre următoarele poate fi considerat un caiet de sarcini?',
    options: [
      'O discuție la ședință, fără procese-verbale',
      'Un e-mail cu dorințele beneficiarului, scris în text liber',
      'O schiță făcută pe tablă și fotografiată',
      'Un document scris și aprobat, cu cerințe numerotate individual și verificabile',
    ],
    correct: 3,
    explanation:
      'Caietul de sarcini nu este o discuție, un e-mail sau o listă de dorințe, ci un document scris, aprobat, cu cerințe numerotate care pot fi declarate îndeplinite sau neîndeplinite.',
  },
  {
    question: 'De ce se descriu fluxurile de lucru înaintea cerințelor funcționale?',
    options: [
      'Pentru a face documentul mai lung',
      'Pentru că funcțiile nu au nevoie de context',
      'Pentru că din procese și actori se nasc cerințele funcționale',
      'Pentru că fluxurile înlocuiesc cerințele',
    ],
    correct: 2,
    explanation:
      'Înainte de a cere funcții, trebuie înțeles ce proces se automatizează și cine participă la el.',
  },
  {
    question: 'Pentru un magazin online, care dintre acestea sunt obiecte informaționale?',
    options: [
      'Butonul „Cumpără”, culoarea meniului, fontul',
      'Serverul, domeniul, certificatul',
      'Termenul de livrare a aplicației',
      'Produs, Client, Comandă și relațiile dintre ele',
    ],
    correct: 3,
    explanation:
      'Obiectele informaționale sunt datele pe care sistemul le gestionează, cu legăturile dintre ele (modelul de date).',
  },
  {
    question: 'De ce poate un executant să dea un preț real doar pe baza caietului de sarcini?',
    options: [
      'Pentru că cerințele numerotate și verificabile pot fi estimate ca efort și timp',
      'Pentru că prețul este fixat de lege',
      'Pentru că executantul nu citește documentul',
      'Pentru că adjectivele din cerințe se pot măsura ușor',
    ],
    correct: 0,
    explanation: '„Un site frumos” nu se poate prețui, o listă de cerințe precise da.',
  },
  {
    question: 'Cum se desfășoară, în mod corect, proba unei cerințe la recepție?',
    options: [
      'Se execută în prezența ambelor părți, iar rezultatul măsurat se notează',
      'O execută singur executantul, fără martori',
      'O execută doar beneficiarul, după plecarea executantului',
      'Se omite, iar cerința se bifează din memorie',
    ],
    correct: 0,
    explanation:
      'Proba se execută în prezența părților, ca rezultatul să fie recunoscut de amândouă, și se notează ce s-a măsurat; apoi cerința este declarată îndeplinită sau neîndeplinită.',
  },
  {
    question:
      'Care parte răspunde, în primul rând, de completitudinea nevoilor descrise în caietul de sarcini?',
    options: [
      'Executantul, care le descoperă singur',
      'Beneficiarul, instituția care va folosi aplicația',
      'Utilizatorii finali, prin vot',
      'Echipa de testare, după livrare',
    ],
    correct: 1,
    explanation:
      'Beneficiarul formulează scopul, obiectivele și procesele de automatizat, deci el răspunde pentru ce nevoi au fost sau nu descrise.',
  },
  {
    question:
      'Într-un proiect public, de ce se publică caietul de sarcini împreună cu anunțul de achiziție?',
    options: [
      'Pentru a anunța câștigătorul',
      'Ca să fie tradus în alte limbi',
      'Pentru că nu conține cerințe',
      'Ca ofertanții să-și poată calcula prețul și termenul pe baza aceluiași document',
    ],
    correct: 3,
    explanation:
      'Același document pentru toți face ofertele comparabile și procedura transparentă.',
  },
  {
    question: 'Ce informații aparțin capitolului de etape, livrabile și termene?',
    options: [
      'Etapele lucrării, ce se predă la fiecare etapă și până când',
      'Lista culorilor identității vizuale',
      'Diagrama modelului de date',
      'Lista legilor aplicabile',
    ],
    correct: 0,
    explanation:
      'Acest capitol fixează calendarul și rezultatele predate, ca recepția să se poată face pe etape.',
  },
  {
    question: 'Ce reprezintă garanția într-un caiet de sarcini?',
    options: [
      'Perioada de redactare a documentului',
      'Perioada după recepție în care executantul remediază defectele apărute, conform condițiilor stabilite',
      'Termenul până la care se pot depune oferte',
      'Dreptul beneficiarului de a modifica orice cerință gratuit',
    ],
    correct: 1,
    explanation:
      'Garanția protejează beneficiarul după recepție, dar condițiile ei trebuie scrise clar.',
  },
  {
    question:
      'Un caiet de sarcini cere ca „interfața să fie intuitivă și site-ul rapid”. Ce greșeală tipică apare și cum se corectează?',
    options: [
      'Cerințe prea măsurabile; se înlocuiesc cu adjective',
      'Soluție în loc de cerință; se elimină tehnologia',
      'Cerințe vagi; se înlocuiește fiecare adjectiv cu o valoare măsurabilă sau cu o listă închisă',
      'Cerințe nenumerotate; se mută în anexe',
    ],
    correct: 2,
    explanation:
      'Adjectivele nu pot fi probate la recepție, deci fiecare se transformă într-o valoare sau o listă care poate fi verificată.',
  },
  {
    question:
      'O sală de sport comandă unei firme de software o aplicație de rezervări. Cum se numesc părțile și cine pe cine are nevoie să înțeleagă prin caietul de sarcini?',
    options: [
      'Sala este executantul, firma este beneficiarul; doar firma trebuie să înțeleagă documentul',
      'Ambele sunt beneficiari, iar executant este clientul sălii',
      'Sala este analistul TI, iar firma este conducătorul instituției',
      'Sala este beneficiarul, firma este executantul; ambele trebuie să înțeleagă la fel ce se construiește',
    ],
    correct: 3,
    explanation:
      'Beneficiarul comandă și are nevoia, executantul realizează; documentul fixează același înțeles pentru amândoi.',
  },
  {
    question:
      'Un capitol sărit din caietul de sarcini lasă o gaură, pe care o plătește cineva mai târziu.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation:
      'Adevărat. Ordinea capitolelor este gândită ca fiecare să acopere o întrebare esențială.',
  },
  {
    question:
      'Executantul poate schimba singur o cerință dacă găsește o soluție mai simplă, fără să anunțe beneficiarul.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation: 'Fals. Orice schimbare se consemnează în scris și se aprobă de ambele părți.',
  },
  {
    question:
      'Capitolul de referințe legale arată cerințe care nu vin de la beneficiar, ci din lege.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Aceste cerințe nu se negociază.',
  },
  {
    question: 'Caietul de sarcini se scrie după ce aplicația este gata, ca documentație.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation: 'Fals. Se scrie înaintea proiectării și a programării, fiind baza lor.',
  },
  {
    question:
      'Modificarea unei cerințe după aprobarea documentului se consemnează în scris și se aprobă de ambele părți.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Forma scrisă previne disputele la recepție.',
  },
  {
    question:
      'O modificare stabilită doar verbal, la telefon, este suficientă dacă ambele părți și-o amintesc.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation: 'Fals. Ce nu e consemnat în scris nu se poate pretinde la recepție.',
  },
  {
    question:
      'Designul și prototipul aplicației se realizează pe baza caietului de sarcini, nu invers.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Cerințele fixate preced designul.',
  },
  {
    question:
      'Cerințele propriu-zise ocupă întotdeauna cea mai mare parte a caietului, iar contextul este opțional.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. Contextul (informația generală, situația curentă, fluxurile) este necesar pentru a înțelege cerințele.',
  },
  {
    question:
      'Glosarul de noțiuni se plasează în capitolul de informație generală, la începutul documentului.',
    options: ['Adevărat', 'Fals'],
    correct: 0,
    explanation: 'Adevărat. Termenii trebuie definiți înainte să fie folosiți.',
  },
  {
    question: 'Capitolul despre situația curentă poate lipsi, pentru că nu conține cerințe.',
    options: ['Adevărat', 'Fals'],
    correct: 1,
    explanation:
      'Fals. El arată punctul de pornire și problemele constatate, fără de care cerințele nu se înțeleg.',
  },
];
