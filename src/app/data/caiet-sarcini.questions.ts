import { Question } from '../models/question';

export const CAIET_SARCINI_QUESTIONS: Question[] = [
  {
    question: 'Ce este caietul de sarcini, conform definiției din curs?',
    options: [
      'Documentul tehnic prin care beneficiarul descrie complet și verificabil ce trebuie să facă aplicația Web, în ce condiții și cum se verifică rezultatul',
      'O discuție informală între beneficiar și executant despre funcționalitățile dorite',
      'Un e-mail cu o listă de dorințe trimis executantului',
      'Un document care conține doar codul sursă al aplicației',
    ],
    correct: 0,
    explanation:
      'Caietul de sarcini este documentul tehnic scris și aprobat prin care beneficiarul descrie complet și verificabil cerințele aplicației.',
  },
  {
    question:
      'De ce este numit caietul de sarcini adesea „contractul tehnic” dintre beneficiar și executant?',
    options: [
      'Pentru că stabilește doar prețul lucrării, fără cerințe tehnice',
      'Pentru că se anexează la contract și devine baza recepției lucrării',
      'Pentru că înlocuiește semnătura contractului comercial',
      'Pentru că este redactat de un avocat specializat',
    ],
    correct: 1,
    explanation:
      'Caietul de sarcini se anexează la contract și devine baza pe care se face recepția lucrării, de aceea e numit „contractul tehnic”.',
  },
  {
    question:
      'Care dintre următoarele NU este o trăsătură a caietului de sarcini, conform cursului?',
    options: [
      'Conține cerințe numerotate individual, verificabile',
      'Se anexează la contract și constituie baza recepției',
      'Este o listă de dorințe comunicată verbal, fără formă scrisă',
      'Este un document scris și aprobat',
    ],
    correct: 2,
    explanation:
      'Caietul de sarcini este un document scris și aprobat, nu o discuție sau o listă de dorințe informală.',
  },
  {
    question:
      'Ce se publică, în proiectele publice din Republica Moldova, împreună cu anunțul de achiziție?',
    options: [
      'Doar bugetul total disponibil',
      'Doar numele executantului câștigător',
      'Contractul semnat cu executantul anterior',
      'Caietul de sarcini',
    ],
    correct: 3,
    explanation:
      'Caietul de sarcini se publică odată cu anunțul de achiziție, pentru ca ofertanții să își calculeze prețul și termenul.',
  },
  {
    question: 'Care dintre următoarele este un motiv pentru care este necesar caietul de sarcini?',
    options: [
      'Elimină interpretările diferite ale acelorași cerințe',
      'Reduce numărul de întâlniri dintre beneficiar și executant la zero',
      'Mărește automat prețul lucrării',
      'Înlocuiește complet etapa de testare a aplicației',
    ],
    correct: 0,
    explanation:
      'O cerință scrisă cu valoare și unitate de măsură nu se mai poate interpreta în mai multe feluri; caietul nu înlocuiește testarea și nu are efect automat asupra prețului.',
  },
  {
    question:
      'Ce rol joacă caietul de sarcini după livrarea aplicației, pentru o nouă echipă de mentenanță?',
    options: [
      'Este înlocuit obligatoriu de codul sursă comentat',
      'Rămâne documentație și explică de ce aplicația funcționează așa cum funcționează',
      'Nu mai are nicio utilitate practică',
      'Devine automat manualul de utilizare al aplicației',
    ],
    correct: 1,
    explanation: 'Caietul de sarcini rămâne documentație utilă echipelor viitoare de mentenanță.',
  },
  {
    question: 'Cine elaborează, de regulă, caietul de sarcini, conform recapitulării din curs?',
    options: [
      'O comisie guvernamentală independentă de beneficiar',
      'Doar departamentul juridic al beneficiarului',
      'Beneficiarul, împreună cu un analist TI',
      'Exclusiv executantul, înainte de semnarea contractului',
    ],
    correct: 2,
    explanation:
      'Caietul de sarcini se elaborează de beneficiar, împreună cu un analist TI, conform recapitulării din curs.',
  },
  {
    question: 'Cine aprobă, de regulă, caietul de sarcini, conform cursului?',
    options: [
      'Executantul care va realiza aplicația',
      'Fiecare utilizator final al aplicației',
      'Autoritatea de standardizare W3C',
      'Conducătorul instituției beneficiare',
    ],
    correct: 3,
    explanation:
      'Conducătorul instituției beneficiare aprobă documentul, iar executantul îl citește și îl ofertează.',
  },
  {
    question: 'Ce face executantul cu caietul de sarcini, conform recapitulării?',
    options: [
      'Îl citește și îl ofertează',
      'Îl redactează integral, fără implicarea beneficiarului',
      'Îl modifică liber după semnarea contractului',
      'Îl publică drept manual de utilizare',
    ],
    correct: 0,
    explanation:
      'Executantul citește caietul de sarcini elaborat de beneficiar și pe baza lui depune o ofertă.',
  },
  {
    question: 'Conform recapitulării din curs, în ce ordine merge structura unui caiet de sarcini?',
    options: [
      'De la cerințele tehnice la scopul aplicației',
      'De la context (informație generală, situația curentă, fluxuri) la cerințe și apoi la criteriile de acceptare',
      'De la criteriile de acceptare la cerințele funcționale',
      'De la anexe la informația generală',
    ],
    correct: 1,
    explanation:
      'Documentul pornește de la context, continuă cu cerințele și se încheie cu criteriile de acceptare.',
  },
  {
    question:
      'De ce, într-un caiet de sarcini serios, capitolele de cerințe sunt precedate de capitole de context (informație generală, situația curentă, fluxuri)?',
    options: [
      'Pentru că regulile de formatare interzic începerea cu cerințe',
      'Pentru că executantul poate interpreta corect cerințele numai dacă înțelege contextul în care vor fi folosite',
      'Pentru că contextul înlocuiește cerințele',
      'Pentru că beneficiarul nu are cerințe clare',
    ],
    correct: 1,
    explanation:
      'Contextul explică de ce și pentru cine se construiește aplicația, iar cerințele se înțeleg corect doar împreună cu el.',
  },
  {
    question:
      'Care afirmație despre proporția cerințelor într-un caiet de sarcini serios este corectă?',
    options: [
      'Cerințele ocupă întotdeauna peste 90% din text',
      'Contextul nu ar trebui inclus niciodată',
      'Un caiet de sarcini serios nu are anexe',
      'Cerințele propriu-zise pot ocupa mai puțin de jumătate din text, restul fiind context necesar',
    ],
    correct: 3,
    explanation:
      'Un caiet de sarcini serios include mult context (situație curentă, fluxuri, roluri) pe lângă cerințe.',
  },
  {
    question: 'Ce conține, de regulă, capitolul de informație generală al unui caiet de sarcini?',
    options: [
      'Noțiuni și acronime, referințe legale, principii de dezvoltare, destinația și obiectivele',
      'Doar tabelul cerințelor funcționale',
      'Doar lista browserelor testate',
      'Doar procesul-verbal de recepție',
    ],
    correct: 0,
    explanation:
      'Capitolul de informație generală începe cu noțiuni și acronime, continuă cu referințe legale și principii, apoi destinația și obiectivele.',
  },
  {
    question: 'De ce începe caietul de sarcini cu un tabel de noțiuni și acronime?',
    options: [
      'Pentru a înlocui manualul de utilizare al aplicației',
      'Pentru ca beneficiarul și executantul să folosească aceleași cuvinte cu același înțeles',
      'Pentru a mări artificial numărul de pagini al documentului',
      'Pentru că este cerut exclusiv de legislația privind achizițiile',
    ],
    correct: 1,
    explanation:
      'Dacă cele două părți nu folosesc aceleași cuvinte cu același sens, restul documentului își pierde valoarea.',
  },
  {
    question:
      'Care dintre următoarele este un principiu de dezvoltare menționat la capitolul de informație generală?',
    options: [
      'Eliminarea documentației tehnice',
      'Interzicerea testării aplicației',
      'Securitate informațională',
      'Reducerea numărului de utilizatori',
    ],
    correct: 2,
    explanation:
      'Printre principiile menționate se numără legalitatea, securitatea informațională, transparența și scalabilitatea.',
  },
  {
    question:
      'Ce formă are, conform exemplului din curs, o cerință tehnică bine scrisă într-un tabel de cerințe?',
    options: [
      'Doar un text liber, fără identificator',
      'Un paragraf lung cu mai multe cerințe amestecate',
      'Doar un cod fără nicio descriere',
      'Identificator, obligativitate, descriere — o singură idee pe rând',
    ],
    correct: 3,
    explanation:
      'Forma standard a unei cerințe este: identificator, obligativitate, descriere, cu o singură idee pe rând.',
  },
  {
    question:
      'Ce reprezintă fiecare „bandă” dintr-o diagramă BPMN de flux de lucru, conform exemplului din curs?',
    options: [
      'Un actor implicat în proces',
      'O pagină a aplicației Web',
      'O bază de date separată',
      'Un capitol al caietului de sarcini',
    ],
    correct: 0,
    explanation:
      'Fiecare bandă a diagramei BPMN reprezintă un actor, precum cancelaria, decidentul sau inspectorul.',
  },
  {
    question: 'Într-un model de date al unei aplicații, ce poate fi elementul central?',
    options: [
      'Culoarea butoanelor',
      'Entitatea în jurul căreia se leagă celelalte obiecte informaționale (de exemplu comanda, dosarul sau cererea)',
      'Adresa serverului',
      'Numele echipei',
    ],
    correct: 1,
    explanation:
      'Modelul de date arată entitatea principală și obiectele legate de ea, ca să se înțeleagă ce date se gestionează.',
  },
  {
    question:
      'Pentru un magazin online, care ar fi câteva obiecte informaționale tipice ale sistemului?',
    options: [
      'Doar adresele IP ale vizitatorilor',
      'Doar numele browserelor testate',
      'Produs, Comandă, Client, Categorie',
      'Doar fișierele CSS ale site-ului',
    ],
    correct: 2,
    explanation:
      'Obiectele informaționale sunt entitățile din domeniu despre care aplicația păstrează date: produse, comenzi, clienți etc.',
  },
  {
    question: 'Cum se descriu, conform cursului, cerințele funcționale într-un caiet de sarcini?',
    options: [
      'Toate la un loc, într-un singur paragraf nedivizat',
      'Doar sub formă de capturi de ecran, fără text',
      'Exclusiv în anexe, niciodată în corpul documentului',
      'Grupate pe componente, fiecare cu o scurtă descriere înainte de tabelul de cerințe',
    ],
    correct: 3,
    explanation:
      'Cerințele funcționale nu se scriu la grămadă: se grupează pe componente, fiecare cu descrierea ei.',
  },
  {
    question:
      'Ce se scrie, pentru fiecare componentă funcțională, într-un caiet de sarcini bine structurat?',
    options: [
      'Ce face componenta, cui este accesibilă, rolurile care o folosesc și tabelul cerințelor',
      'Doar numele componentei, fără alte detalii',
      'Doar prețul de dezvoltare al componentei',
      'Doar numărul de linii de cod estimat',
    ],
    correct: 0,
    explanation:
      'Pentru fiecare componentă se descriu destinația, accesibilitatea, rolurile, câmpurile formularelor și tabelul cerințelor.',
  },
  {
    question: 'Cum se pot grupa pe componente cerințele funcționale ale unui magazin online?',
    options: [
      'Doar Contul administratorului',
      'Catalog public, Coș și comandă, Cont client, Administrare, Rapoarte',
      'Doar Catalog public și nimic altceva',
      'Doar Administrarea bazei de date',
    ],
    correct: 1,
    explanation:
      'Cerințele se grupează pe componente funcționale distincte, fiecare cu descrierea și tabelul ei de cerințe.',
  },
  {
    question:
      'Ce coloane are tabelul de cerințe descris în curs, valabil atât pentru cerințele funcționale, cât și pentru cele nefuncționale?',
    options: [
      'Nume utilizator, Parolă, Rol',
      'Data creării, Data modificării, Autor',
      'Identificator, Obligativitate, Descrierea cerinței',
      'Preț, Termen, Executant',
    ],
    correct: 2,
    explanation:
      'Ambele tipuri de cerințe folosesc același tabel cu trei coloane; se schimbă doar prefixul codului.',
  },
  {
    question:
      'De ce primesc cerințele identificatori cu prefix diferit pentru fiecare tip (funcțională, nefuncțională, tehnică, de documentare)?',
    options: [
      'Pentru a decora documentul',
      'Pentru ca tipul fiecărei cerințe să se vadă imediat și să poată fi grupată și urmărită la teste',
      'Pentru a ascunde cerințele opționale',
      'Pentru că prefixele determină prețul',
    ],
    correct: 1,
    explanation:
      'Identificatorul cu prefix permite clasificarea rapidă și trasabilitatea cerinței până la test și recepție.',
  },
  {
    question: 'Ce înseamnă, într-un caiet de sarcini, „trasabilitatea” unei cerințe?',
    options: [
      'Posibilitatea de a lega cerința de identificatorul ei unic, de sursa și de testul care o verifică',
      'Viteza cu care se încarcă pagina care implementează cerința',
      'Culoarea folosită pentru marcarea cerinței în document',
      'Numărul de modificări aduse aplicației după livrare',
    ],
    correct: 0,
    explanation:
      'Trasabilitatea permite urmărirea unei cerințe de la identificatorul ei până la verificarea sa la recepție.',
  },
  {
    question: 'Care sunt, conform recapitulării din curs, trăsăturile unei cerințe bune?',
    options: [
      'Este opțională și poate fi ignorată la recepție',
      'Este unică, verificabilă, cu valoare măsurabilă și fără soluție tehnică impusă',
      'Este lungă, detaliată tehnic și impune un anumit limbaj de programare',
      'Este scrisă doar în limba engleză, indiferent de beneficiar',
    ],
    correct: 1,
    explanation:
      'O cerință bună este unică, verificabilă, are o valoare măsurabilă și nu impune o soluție tehnică fără motiv.',
  },
  {
    question:
      'Cum se transformă cerința slabă „Site-ul trebuie să fie rapid” într-o cerință verificabilă, conform principiilor din curs?',
    options: [
      'Eliminând complet cerința din document',
      'Înlocuind cuvântul „rapid” cu numele unei tehnologii concrete',
      'Adăugând o valoare măsurabilă și o unitate de măsură, de exemplu un timp maxim de încărcare exprimat în secunde',
      'Repetând aceeași propoziție de mai multe ori în document',
    ],
    correct: 2,
    explanation:
      'O cerință devine verificabilă atunci când primește o valoare măsurabilă și o unitate de măsură clară.',
  },
  {
    question: 'Conform cursului, ce categorii acoperă cerințele tehnice ale unei aplicații Web?',
    options: [
      'Doar limbajul de programare folosit de executant',
      'Doar numărul de angajați ai firmei executante',
      'Doar prețul licențelor software',
      'Platforma, browserele, responsivitatea, performanța, securitatea, accesibilitatea, limbile, integrările și găzduirea',
    ],
    correct: 3,
    explanation:
      'Recapitularea cursului enumeră aceste categorii ca acoperind cerințele tehnice ale aplicației Web.',
  },
  {
    question:
      'Când, conform cursului, este justificat să se impună o anumită tehnologie într-o cerință?',
    options: [
      'Numai când există un motiv real, precum infrastructura instituției sau o obligație legală',
      'Întotdeauna, indiferent de context',
      'Niciodată, sub nicio formă',
      'Doar dacă executantul o solicită',
    ],
    correct: 0,
    explanation:
      'Tehnologia se impune doar când există un motiv real: infrastructură existentă, personal de mentenanță sau obligație legală.',
  },
  {
    question:
      'Ce descrie, într-un caiet de sarcini, secțiunea despre obiectul lucrării (obiectul achiziției)?',
    options: [
      'Ce urmează să fie livrat: elaborarea, testarea, punerea în funcțiune și transmiterea aplicației către beneficiar',
      'Doar prețul și modalitatea de plată',
      'Doar lista limbajelor de programare permise',
      'Doar numele persoanelor din echipa executantului',
    ],
    correct: 0,
    explanation:
      'Obiectul lucrării spune clar ce primește beneficiarul la final, ca ofertanții să știe ce au de făcut.',
  },
  {
    question:
      'O cerință nu apare nicăieri în caietul de sarcini aprobat. Ce consecință are asta la recepția lucrării?',
    options: [
      'Executantul este obligat s-o implementeze oricum, gratuit',
      'Beneficiarul nu o poate pretinde executantului ca parte din lucrarea contractată',
      'Contractul se anulează automat',
      'Cerința devine automat obligatorie',
    ],
    correct: 1,
    explanation:
      'Doar ce este scris în caietul de sarcini se poate verifica și pretinde la recepție; de aceea documentul trebuie să fie complet.',
  },
  {
    question:
      'Un caiet de sarcini folosește „produs” pentru descrierea unică a unui articol și „unitate” pentru fiecare bucată fizică din stoc. De ce are sens ca glosarul să facă această distincție?',
    options: [
      'Pentru că glosarul trebuie să aibă obligatoriu două noțiuni',
      'Pentru că unitățile se descriu doar în anexe',
      'Pentru că cerințele devin precise: stocul se numără pe unități, iar descrierea se introduce o singură dată',
      'Pentru că produsul și unitatea sunt oricum același lucru',
    ],
    correct: 2,
    explanation:
      'Când doi termeni apropiați au sensuri diferite, definirea lor evită ca o cerință să fie înțeleasă greșit.',
  },
  {
    question:
      'Ce trebuie să facă o bună definiție într-un tabel de noțiuni al caietului de sarcini?',
    options: [
      'Să fie cât mai scurtă, chiar dacă rămâne vagă',
      'Să copieze definiția din dicționar fără legătură cu proiectul',
      'Să includă prețul asociat termenului',
      'Să explice termenul fără ambiguitate, în sensul în care este folosit în document',
    ],
    correct: 3,
    explanation:
      'Definiția fixează un înțeles comun pentru beneficiar și executant, în contextul documentului.',
  },
  {
    question:
      'De ce marchează un caiet de sarcini fiecare cerință ca obligatorie, recomandată sau opțională?',
    options: [
      'Pentru a se ști care cerințe trebuie îndeplinite pentru recepție și care sunt doar dorințe sau extra',
      'Pentru a mări numărul de pagini',
      'Pentru ca toate cerințele să fie tratate identic',
      'Pentru ca executantul să aleagă liber ce implementează',
    ],
    correct: 0,
    explanation:
      'Gradul de obligativitate stabilește ce condiționează recepția și ce rămâne la latitudinea părților.',
  },
  {
    question:
      'Care dintre următoarele este un scop bine formulat al unei aplicații Web pentru o școală?',
    options: [
      'Folosirea celor mai noi tehnologii existente pe piață',
      'Reducerea timpului în care un elev află informațiile de care are nevoie și mutarea evidenței pe un sistem electronic unic',
      'Înlocuirea tuturor angajaților școlii',
      'Ca aplicația să fie frumoasă',
    ],
    correct: 1,
    explanation:
      'Scopul descrie schimbarea utilă pe care o aduce aplicația beneficiarului, nu tehnologia sau o impresie vagă.',
  },
  {
    question:
      'Obiectivul „Cel puțin 50% dintre comenzi se plasează online” nu are un element necesar ca să fie SMART. Care?',
    options: [
      'Un nume al persoanei responsabile de cod',
      'Culoarea interfeței',
      'Termenul sau perioada în care valoarea-țintă trebuie atinsă',
      'Limbajul de programare folosit',
    ],
    correct: 2,
    explanation:
      'Un obiectiv SMART este specific, măsurabil, realizabil, relevant și limitat în timp.',
  },
  {
    question: 'Care este diferența dintre un obiectiv și o cerință într-un caiet de sarcini?',
    options: [
      'Sunt sinonime și se pot folosi unul în locul celuilalt',
      'Obiectivul descrie codul, cerința descrie prețul',
      'Obiectivul îl scrie executantul, cerința îl scrie utilizatorul final',
      'Obiectivul spune ce rezultat urmărește beneficiarul, iar cerința spune ce trebuie să facă sau cum trebuie să fie aplicația',
    ],
    correct: 3,
    explanation:
      'Obiectivele justifică lucrarea (de ce), cerințele detaliază ce se construiește și cum se verifică.',
  },
  {
    question:
      'De ce un caiet de sarcini estimează câți utilizatori are fiecare categorie din publicul-țintă?',
    options: [
      'Pentru a dimensiona corect aplicația (capacitate, performanță) și a prioritiza funcțiile',
      'Pentru a calcula salariile echipei executante',
      'Pentru a alege culorile interfeței',
      'Pentru că este obligatoriu să apară un număr în fiecare capitol',
    ],
    correct: 0,
    explanation:
      'Numărul și tipul utilizatorilor influențează încărcarea, accesul și funcțiile necesare.',
  },
  {
    question:
      'Regula spune că doar utilizatorii autentificați pot plasa comenzi. Un vizitator neautentificat apasă „Comandă”. Ce ar trebui să facă aplicația?',
    options: [
      'Să plaseze comanda fără date de client',
      'Să-l ducă la autentificare sau înregistrare, fără a plasa comanda',
      'Să afișeze o pagină goală',
      'Să-i acorde automat rol de administrator',
    ],
    correct: 1,
    explanation:
      'Drepturile rolurilor se aplică mereu: acțiunile permise doar utilizatorilor autentificați cer mai întâi autentificarea.',
  },
  {
    question:
      'O aplicație colectează date personale de la utilizatori. Ce principiu rezultă pentru cerințele din caietul de sarcini?',
    options: [
      'Să se colecteze cât mai multe date, pentru orice eventualitate',
      'Să fie publicate pentru toți vizitatorii',
      'Să se colecteze doar datele strict necesare și să fie protejate',
      'Să nu se mai ceară autentificare',
    ],
    correct: 2,
    explanation:
      'Protecția datelor personale cere minimizarea datelor colectate și securizarea lor.',
  },
  {
    question:
      'O lege cere ca informațiile publice ale unei instituții să fie accesibile oricui. Ce cerință rezultă pentru aplicația instituției?',
    options: [
      'Toate datele personale să devină publice',
      'Toate paginile să ceară cont',
      'Informațiile să fie disponibile doar angajaților',
      'Secțiunea cu informații publice să poată fi consultată fără autentificare și fără plată',
    ],
    correct: 3,
    explanation: 'O obligație legală se transformă într-o cerință concretă, verificabilă.',
  },
  {
    question:
      'De ce o cerință de accesibilitate trebuie să indice un standard și un nivel de conformitate, nu doar „aplicația să fie accesibilă”?',
    options: [
      'Pentru că astfel cerința devine verificabilă: se poate testa față de criterii clare',
      'Pentru că standardele fac aplicația mai rapidă',
      'Pentru că accesibilitatea nu se poate testa niciodată',
      'Pentru că executantul nu are voie să aleagă soluția',
    ],
    correct: 0,
    explanation:
      'O formulare vagă nu poate fi acceptată sau respinsă; un standard oferă criterii obiective.',
  },
  {
    question:
      'Beneficiarul ține evidența într-un fișier de calcul și vrea să treacă la aplicația nouă. Ce ar trebui să prevadă caietul de sarcini?',
    options: [
      'Nimic, datele vechi se pierd oricum',
      'O cerință de migrare a datelor existente, cu un criteriu de verificare (de exemplu numărul de înregistrări preluate fără pierderi)',
      'Doar cerința ca fișierul să fie șters',
      'Doar cerința ca aplicația să aibă un logo',
    ],
    correct: 1,
    explanation:
      'Preluarea datelor existente este o lucrare separată și trebuie specificată și verificată.',
  },
  {
    question: 'De ce enumeră un caiet de sarcini explicit și ce NU include lucrarea?',
    options: [
      'Pentru a micșora numărul de cerințe obligatorii',
      'Pentru că excluderile înlocuiesc criteriile de acceptare',
      'Pentru a evita așteptările nefondate și cererile suplimentare după semnarea contractului',
      'Pentru că legea cere o listă de cel puțin zece excluderi',
    ],
    correct: 2,
    explanation:
      'Limitele lucrării clarifică ce se plătește și ce se livrează, reducând disputele.',
  },
  {
    question:
      'Regula spune că o rezervare este valabilă 48 de ore, apoi se anulează. Un client nu a ridicat articolul rezervat după 50 de ore. Ce ar trebui să facă sistemul?',
    options: [
      'Să păstreze rezervarea nelimitat',
      'Să șteargă contul clientului',
      'Să mărească automat termenul la 7 zile',
      'Să anuleze rezervarea și să facă articolul din nou disponibil',
    ],
    correct: 3,
    explanation:
      'Fluxul descrie regulile și efectul lor; sistemul trebuie să aplice automat expirarea.',
  },
  {
    question: 'De ce descrierea unui flux de lucru indică ce actor face fiecare pas?',
    options: [
      'Pentru a ști cine acționează și ce drepturi are în fiecare pas, ceea ce duce la cerințe și teste precise',
      'Pentru a stabili salariul fiecărui actor',
      'Pentru că fluxurile nu pot avea mai mult de un pas',
      'Pentru a alege limbajul de programare',
    ],
    correct: 0,
    explanation: 'Actorii și pașii leagă procesul de roluri, cerințe și criterii de verificare.',
  },
  {
    question: 'Ce descrie un obiect informațional într-un caiet de sarcini?',
    options: [
      'Doar aspectul grafic al unui buton',
      'O entitate din domeniu (de exemplu comandă sau client), cu atributele ei și legăturile cu alte entități',
      'Doar viteza serverului',
      'Doar numele echipei de dezvoltare',
    ],
    correct: 1,
    explanation:
      'Obiectele informaționale arată ce date gestionează aplicația și cum se leagă între ele.',
  },
  {
    question:
      'Un site are componentele „Catalog public”, „Cont utilizator” și „Administrare”. În ce componentă se încadrează cerința „administratorul poate importa produse dintr-un fișier CSV”?',
    options: [
      'Catalog public',
      'Cont utilizator',
      'Administrare',
      'În niciuna, trebuie să rămână în anexe',
    ],
    correct: 2,
    explanation:
      'Grupăm cerințele după componenta care le oferă și după rolul care le folosește; importul de conținut ține de administrare.',
  },
  {
    question:
      'Un client autentificat încearcă să deschidă pagina de administrare introducând direct adresa ei. Ce ar trebui să facă aplicația?',
    options: [
      'Să-i permită accesul, fiind autentificat',
      'Să-i acorde automat rol de administrator',
      'Să șteargă contul clientului',
      'Să refuze accesul, pentru că rolul de client nu are dreptul respectiv',
    ],
    correct: 3,
    explanation: 'Drepturile se verifică pe rol, indiferent cum ajunge utilizatorul la pagină.',
  },
  {
    question: 'Ce arată, de regulă, un tabel al drepturilor rolurilor de utilizator?',
    options: [
      'Ce acțiuni poate face fiecare rol (rolurile pe o axă, acțiunile pe cealaltă)',
      'Câți bani primește fiecare rol',
      'Ce browser folosește fiecare rol',
      'Data la care a fost creat fiecare cont',
    ],
    correct: 0,
    explanation:
      'Tabelul-matrice rol x acțiune oferă o imagine clară a permisiunilor și a testelor de acces.',
  },
  {
    question:
      'Cerința spune că căutarea nu ține cont de diacritice și de majuscule. Utilizatorul scrie „stefanescu”, iar în catalog există „Ștefănescu”. Ce ar trebui să returneze căutarea?',
    options: [
      'Niciun rezultat',
      'Înregistrarea „Ștefănescu”',
      'Doar rezultatele cu text identic, caracter cu caracter',
      'O eroare care cere scrierea cu diacritice',
    ],
    correct: 1,
    explanation: 'Cerința este formulată clar tocmai ca să se poată verifica un asemenea caz.',
  },
  {
    question:
      'Regula spune că un client poate avea cel mult 3 rezervări active. Ana are 3 rezervări active și încearcă a patra. Ce trebuie să facă aplicația?',
    options: [
      'Să o accepte și să o șteargă pe prima fără anunț',
      'Să o accepte fără nicio verificare',
      'Să refuze a patra rezervare și să explice motivul',
      'Să blocheze definitiv contul Anei',
    ],
    correct: 2,
    explanation:
      'Limita dintr-o cerință funcțională trebuie aplicată ca regulă de comportament, cu un mesaj clar.',
  },
  {
    question:
      'Regula spune că după 5 încercări eșuate de autentificare contul se blochează temporar, 15 minute. Un utilizator greșește parola a cincea oară. Ce trebuie să facă aplicația?',
    options: [
      'Să șteargă contul definitiv',
      'Să permită încercări nelimitate',
      'Să-i acorde un rol nou',
      'Să blocheze temporar contul și să informeze utilizatorul',
    ],
    correct: 3,
    explanation: 'Cerințele de securitate descriu un comportament precis, care se poate testa.',
  },
  {
    question:
      'Regula spune că un împrumut nou se refuză dacă există restanțe mai vechi de 30 de zile. Un elev are o restanță de 45 de zile și cere un împrumut. Ce trebuie să facă aplicația?',
    options: [
      'Să refuze împrumutul nou, indicând motivul',
      'Să acorde împrumutul oricum',
      'Să șteargă restanța automat',
      'Să schimbe rolul elevului în administrator',
    ],
    correct: 0,
    explanation:
      'Condiția (valoarea-prag) este dată în cerință; aplicația o aplică în comportamentul ei.',
  },
  {
    question:
      'Un administrator importă un fișier cu 100 de linii, dintre care 3 au date invalide. Ce comportament este preferabil într-o cerință bine scrisă?',
    options: [
      'Se anulează tot importul, fără explicații',
      'Se importă liniile valide, iar cele respinse sunt raportate cu motivul respingerii',
      'Se importă și liniile invalide, cu date greșite',
      'Se șterg liniile invalide fără raport',
    ],
    correct: 1,
    explanation: 'O cerință bună prevede și cazurile de eroare, nu doar cazul fericit.',
  },
  {
    question:
      'Ce lipsește din cerința „Aplicația păstrează un jurnal al evenimentelor”, ca să fie verificabilă?',
    options: [
      'Culoarea paginii jurnalului',
      'Numele programatorului',
      'Perioada de păstrare și cine poate consulta jurnalul',
      'Prețul licenței bazei de date',
    ],
    correct: 2,
    explanation:
      'Cerința vagă devine verificabilă când primește valori și limite clare (durată, acces).',
  },
  {
    question:
      '„Pagina de start se afișează complet în cel mult 3 secunde, la 10 Mbit/s, cu memoria cache goală”. Ce face această cerință verificabilă?',
    options: [
      'Faptul că folosește cuvântul „complet”',
      'Faptul că este scrisă cu majuscule',
      'Faptul că impune un limbaj de programare',
      'Valoarea limită împreună cu condițiile de măsurare (viteza conexiunii, cache)',
    ],
    correct: 3,
    explanation:
      'Fără condițiile de măsurare, aceeași valoare poate da rezultate diferite și devine contestabilă.',
  },
  {
    question:
      'O cerință de disponibilitate cere 99% pe lună. Ce înseamnă asta, aproximativ, pentru o lună de 30 de zile?',
    options: [
      'Aplicația poate fi indisponibilă cel mult aproximativ 7 ore pe lună',
      'Aplicația poate fi oprită 7 zile pe lună',
      'Aplicația nu poate fi oprită niciodată',
      'Aplicația poate fi indisponibilă jumătate din lună',
    ],
    correct: 0,
    explanation:
      '1% din 30 de zile (720 de ore) este circa 7 ore; procentul trebuie tradus în timp concret pentru a-l putea verifica.',
  },
  {
    question: 'Care dintre următoarele este o cerință de accesibilitate?',
    options: [
      'Pagina se încarcă în maximum 3 secunde',
      'Toate imaginile cu rol informativ au text alternativ pentru cititoarele de ecran',
      'Parolele se păstrează cifrat',
      'Serverul are minimum 4 GB de memorie',
    ],
    correct: 1,
    explanation:
      'Accesibilitatea urmărește ca aplicația să poată fi folosită și de persoane cu dizabilități.',
  },
  {
    question:
      'De ce specifică un caiet de sarcini resursele minime ale serverului pe care va fi găzduită aplicația?',
    options: [
      'Pentru ca serverul să fie obligatoriu cât mai scump',
      'Pentru că resursele determină culorile interfeței',
      'Pentru ca executantul să dimensioneze și să testeze aplicația pe o infrastructură compatibilă cu cea reală',
      'Pentru a evita orice testare',
    ],
    correct: 2,
    explanation:
      'Cerințele de găzduire previn incompatibilitățile dintre aplicație și infrastructura beneficiarului.',
  },
  {
    question:
      'Publicul unei aplicații vorbește două limbi. Ce ar trebui să precizeze cerințele tehnice sau de conținut?',
    options: [
      'Doar limba în care este scris codul sursă',
      'Că traducerea se face de utilizator',
      'Nimic, limba nu contează',
      'Limbile în care este disponibilă interfața și limba implicită',
    ],
    correct: 3,
    explanation:
      'Limbile interfeței sunt o cerință verificabilă, nu un detaliu lăsat la întâmplare.',
  },
  {
    question: 'De ce se împarte lucrarea în etape cu livrabile?',
    options: [
      'Pentru a permite recepții intermediare și controlul progresului de către beneficiar',
      'Pentru a amâna plata la infinit',
      'Pentru ca beneficiarul să nu mai verifice nimic',
      'Pentru că o lucrare nu poate avea un singur rezultat final',
    ],
    correct: 0,
    explanation: 'Etapele cu livrabile fac progresul vizibil și verificabil pe parcurs.',
  },
  {
    question: 'Ce este perioada de garanție într-un proiect software?',
    options: [
      'Perioada de dinaintea semnării contractului',
      'Perioada după recepția finală în care executantul remediază gratuit defectele apărute',
      'Perioada în care beneficiarul nu are voie să folosească aplicația',
      'Perioada de redactare a caietului de sarcini',
    ],
    correct: 1,
    explanation: 'Garanția protejează beneficiarul după recepție, pentru defectele ascunse.',
  },
  {
    question: 'Care dintre următoarele aparține, de regulă, anexelor unui caiet de sarcini?',
    options: [
      'Semnătura executantului pe fiecare pagină',
      'Codul sursă integral al aplicației',
      'Materiale detaliate de referință, precum lista completă a câmpurilor unui formular sau scheme',
      'Factura finală a lucrării',
    ],
    correct: 2,
    explanation: 'Anexele rețin detaliile voluminoase, ca să nu încarce corpul documentului.',
  },
  {
    question: 'Ce legătură ar trebui să existe între corpul caietului de sarcini și anexele sale?',
    options: [
      'Anexele sunt independente și nu se menționează în text',
      'Anexele înlocuiesc cerințele din document',
      'Anexele se completează după recepție',
      'Fiecare anexă este referită din text, în cerința sau secțiunea care o folosește',
    ],
    correct: 3,
    explanation:
      'Referința explicită face ca anexa să facă parte din cerințe și să poată fi verificată.',
  },
  {
    question:
      'Pentru cerința „comunicația cu aplicația este criptată”, care este un criteriu de acceptare bun?',
    options: [
      'Se accesează mai multe adrese ale aplicației prin HTTP și se verifică redirecționarea automată către HTTPS',
      'Se verifică dacă aplicația are un logo',
      'Se cronometrează încărcarea paginii de start',
      'Se verifică numărul de pagini ale documentului',
    ],
    correct: 0,
    explanation: 'Criteriul descrie un test concret și un rezultat clar de trecere.',
  },
  {
    question: 'Când se poate semni procesul-verbal de recepție finală?',
    options: [
      'Când beneficiarul își dă acordul verbal',
      'Când toate cerințele obligatorii sunt îndeplinite conform criteriilor de acceptare',
      'Când executantul declară că a terminat',
      'Când jumătate din cerințe sunt îndeplinite',
    ],
    correct: 1,
    explanation: 'Recepția se bazează pe verificarea cerințelor obligatorii, nu pe declarații.',
  },
  {
    question:
      'Într-o cerință apare formularea „aplicația acceptă imagini în formate JPG, PNG etc.”. De ce este problematic cuvântul „etc.”?',
    options: [
      'Pentru că face propoziția prea scurtă',
      'Pentru că lista rămâne deschisă: nu se poate verifica la recepție dacă un format necitat trebuie sau nu acceptat',
      'Pentru că „etc.” nu poate apărea în documente scrise',
      'Pentru că impune o soluție tehnică',
    ],
    correct: 1,
    explanation:
      'O listă deschisă lasă loc interpretării; cerința devine verificabilă doar dacă enumeră explicit toate valorile cerute.',
  },
  {
    question: 'De ce se scriu cerințele nefuncționale separat de cele funcționale?',
    options: [
      'Pentru că cele nefuncționale nu se verifică niciodată',
      'Pentru că cele funcționale sunt mereu opționale',
      'Pentru că așa cere limbajul de programare',
      'Pentru că descriu cât de bine funcționează aplicația (performanță, securitate), nu ce funcții are, și se verifică prin alte teste',
    ],
    correct: 3,
    explanation:
      'Separarea ajută la redactare și la plan de testare: o testare pe funcții, alta pe calitate.',
  },
  {
    question:
      'În ce capitol al caietului de sarcini se descrie ce există deja la beneficiar (fișiere, procese manuale, sisteme vechi)?',
    options: [
      'Situația curentă',
      'Criteriile de acceptare',
      'Anexele cu formulare',
      'Cerințele de documentare',
    ],
    correct: 0,
    explanation:
      'Situația curentă arată punctul de plecare, ca executantul să înțeleagă ce se schimbă și ce trebuie migrat.',
  },
  {
    question: 'Ce înseamnă, în general, ca o cerință să fie „verificabilă”?',
    options: [
      'Să fie aprobată de cât mai mulți oameni',
      'Să nu aibă niciun identificator',
      'Să existe o metodă clară prin care se poate stabili dacă a fost îndeplinită sau nu',
      'Să fie scrisă într-un limbaj tehnic complicat',
    ],
    correct: 2,
    explanation:
      'O cerință verificabilă poate fi testată sau demonstrată obiectiv ca fiind îndeplinită sau neîndeplinită.',
  },
  {
    question: 'Care dintre următoarele este un exemplu de cerință funcțională?',
    options: [
      'Aplicația trebuie să răspundă în cel mult 2 secunde',
      'Aplicația trebuie să fie disponibilă 99,9% din timp',
      'Aplicația trebuie să respecte standardul WCAG 2.1',
      'Aplicația permite utilizatorului să își creeze un cont folosind adresa de e-mail',
    ],
    correct: 3,
    explanation:
      'Cerințele funcționale descriu ce face aplicația, cum ar fi crearea unui cont de utilizator.',
  },
  {
    question: 'Care dintre următoarele este un exemplu de cerință nefuncțională?',
    options: [
      'Pagina principală se încarcă în cel mult 3 secunde',
      'Utilizatorul poate adăuga un produs în coșul de cumpărături',
      'Aplicația permite căutarea produselor după nume',
      'Administratorul poate șterge un cont de utilizator',
    ],
    correct: 0,
    explanation:
      'Timpul de încărcare este o cerință nefuncțională, care descrie calitatea, nu funcția în sine.',
  },
  {
    question: 'În general, ce descriu cerințele funcționale ale unei aplicații?',
    options: [
      'Cât costă mentenanța anuală',
      'Ce face aplicația: funcțiile și comportamentul ei',
      'Cât de rapidă și de sigură este aplicația',
      'Cine deține domeniul aplicației',
    ],
    correct: 1,
    explanation:
      'Cerințele funcționale descriu comportamentul și funcțiile concrete pe care aplicația trebuie să le ofere.',
  },
  {
    question: 'În general, ce descriu cerințele nefuncționale ale unei aplicații?',
    options: [
      'Numele bazei de date folosite',
      'Programul de lucru al bibliotecarului',
      'Calitatea cu care aplicația își îndeplinește funcțiile: performanță, securitate, disponibilitate etc.',
      'Lista exactă a paginilor aplicației',
    ],
    correct: 2,
    explanation:
      'Cerințele nefuncționale nu adaugă funcții noi, ci stabilesc cât de bine funcționează cele existente.',
  },
  {
    question:
      'De ce este util ca fiecare cerință dintr-un document de specificații să aibă un identificator unic?',
    options: [
      'Pentru a face documentul mai lung',
      'Pentru că legea impune numerotarea automată a paginilor',
      'Pentru a ascunde cerințele neterminate',
      'Pentru a putea fi referită ușor și urmărită (trasată) de-a lungul proiectului',
    ],
    correct: 3,
    explanation:
      'Identificatorul unic permite referirea precisă a cerinței în teste, contracte și rapoarte.',
  },
  {
    question:
      'Ce problemă apare dacă o cerință conține, în aceeași propoziție, mai multe idei diferite?',
    options: [
      'La verificare, răspunsul poate fi „parțial îndeplinită”, ceea ce face cerința greu de acceptat sau respins clar',
      'Cerința devine automat mai ieftină de implementat',
      'Cerința devine automat opțională',
      'Nu apare nicio problemă, este o practică recomandată',
    ],
    correct: 0,
    explanation:
      'O cerință cu mai multe idei nu poate fi declarată clar „îndeplinită” sau „neîndeplinită”; trebuie despărțită.',
  },
  {
    question:
      'De ce nu este recomandat ca o cerință să impună o soluție tehnică fără un motiv real?',
    options: [
      'Pentru că executantul nu știe niciodată ce tehnologii există',
      'Pentru că limitează libertatea executantului de a alege cea mai bună soluție pentru rezultatul cerut',
      'Pentru că soluțiile tehnice sunt întotdeauna mai scumpe',
      'Pentru că legea interzice menționarea oricărei tehnologii',
    ],
    correct: 1,
    explanation:
      'Cerința bună specifică rezultatul dorit, lăsând executantul liber să aleagă mijlocul tehnic, cu excepția unor motive reale.',
  },
  {
    question:
      'Care dintre următoarele formulări este o cerință funcțională corect scrisă, verificabilă?',
    options: [
      'Site-ul trebuie să fie ușor de folosit',
      'Aplicația trebuie să funcționeze bine',
      'Utilizatorul poate reseta parola printr-o legătură trimisă pe e-mail, valabilă 60 de minute',
      'Aplicația trebuie să fie modernă și plăcută',
    ],
    correct: 2,
    explanation:
      'Formularea cu pași concreți și o valoare de timp este verificabilă, spre deosebire de formulările vagi.',
  },
  {
    question:
      'Ce rol au „rolurile de utilizator” într-un document de cerințe pentru o aplicație Web?',
    options: [
      'Stabilesc doar parola implicită a aplicației',
      'Definesc culorile interfeței pentru fiecare utilizator',
      'Înlocuiesc necesitatea autentificării',
      'Definesc ce categorii de utilizatori există și ce drepturi are fiecare categorie',
    ],
    correct: 3,
    explanation:
      'Rolurile de utilizator (de exemplu vizitator, utilizator înregistrat, administrator) definesc drepturile fiecărei categorii.',
  },
  {
    question:
      'Ce este un „criteriu de acceptare” pentru o cerință dintr-un document de specificații?',
    options: [
      'Modul concret prin care se verifică dacă cerința a fost îndeplinită, cu un rezultat clar de trecere',
      'Prețul final agreat pentru acea cerință',
      'Numele persoanei care a scris cerința',
      'Data la care cerința a fost adăugată în document',
    ],
    correct: 0,
    explanation:
      'Criteriul de acceptare descrie cum se testează o cerință și ce rezultat înseamnă că este îndeplinită.',
  },
  {
    question:
      'Ce trebuie să precizeze caietul de sarcini despre notificările și mesajele generate automat de aplicație (de exemplu e-mailul de confirmare a unei comenzi)?',
    options: [
      'Nimic, ele se aleg liber la implementare',
      'Doar culoarea textului din e-mail',
      'Când se trimit, cui și ce informații conțin, ca să poată fi verificate la recepție',
      'Doar numele serviciului de e-mail folosit, fără alte detalii',
    ],
    correct: 2,
    explanation:
      'Notificările sunt comportament al aplicației; fără eveniment declanșator, destinatar și conținut, nu se poate verifica dacă cerința este îndeplinită.',
  },
  {
    question: 'Ce se înțelege, în general, prin „responsivitatea” unei aplicații Web?',
    options: [
      'Numărul de utilizatori simultani suportați',
      'Capacitatea aplicației de a răspunde la comenzi vocale',
      'Capacitatea interfeței de a se adapta corect la diverse dimensiuni de ecran',
      'Viteza cu care serverul răspunde la o solicitare HTTP',
    ],
    correct: 2,
    explanation:
      'Responsivitatea se referă la adaptarea vizuală a interfeței la diferite lățimi de ecran (telefon, tabletă, desktop).',
  },
  {
    question:
      'Ce reprezintă, în general, un „punct de rupere” (breakpoint) menționat într-o cerință de responsivitate?',
    options: [
      'Un moment în care serverul se defectează',
      'Un punct din cod unde apare o eroare',
      'O pagină care nu poate fi accesată',
      'O lățime de ecran la care structura paginii se reorganizează',
    ],
    correct: 3,
    explanation:
      'Punctele de rupere sunt lățimi de ecran prestabilite la care layoutul se adaptează.',
  },
  {
    question:
      'De ce are sens ca un caiet de sarcini să stabilească cine deține domeniul și certificatul de securitate și cât de des se fac copiile de rezervă?',
    options: [
      'Pentru că aceste aspecte nu pot fi niciodată verificate',
      'Pentru că astfel se evită disputele după livrare și se asigură recuperarea datelor și continuitatea aplicației',
      'Pentru că decid aspectul vizual al aplicației',
      'Pentru că înlocuiesc criteriile de acceptare',
    ],
    correct: 1,
    explanation:
      'Responsabilitățile de găzduire (proprietate, certificate, copii de rezervă) trebuie fixate în scris, altfel apar conflicte și riscul pierderii datelor.',
  },
  {
    question:
      'Ce înseamnă, la un nivel general, „securitatea” unei aplicații Web, ca și categorie de cerințe?',
    options: [
      'Designul grafic al interfeței',
      'Ansamblul măsurilor care protejează datele și accesul la aplicație, precum HTTPS și parole cifrate',
      'Viteza de încărcare a paginilor',
      'Numărul de pagini publicate pe site',
    ],
    correct: 1,
    explanation:
      'Securitatea acoperă protecția datelor, a comunicației (HTTPS) și a conturilor (parole cifrate).',
  },
  {
    question: 'Ce este HTTPS, în contextul cerințelor de securitate ale unei aplicații Web?',
    options: [
      'Un tip de bază de date relațională',
      'Un format de fișier pentru imagini',
      'Protocolul care asigură transmiterea cifrată a datelor între browser și server',
      'Un limbaj de programare pentru partea de server',
    ],
    correct: 2,
    explanation: 'HTTPS este versiunea securizată (cifrată) a protocolului HTTP.',
  },
  {
    question: 'Ce este WCAG, standardul menționat frecvent la cerințele de accesibilitate?',
    options: [
      'Un protocol de securitate a rețelei',
      'Un format audio-video comprimat',
      'Un sistem de gestiune a bazelor de date',
      'Recomandările W3C privind accesibilitatea conținutului Web',
    ],
    correct: 3,
    explanation:
      'WCAG (Web Content Accessibility Guidelines) este setul de recomandări W3C pentru accesibilitatea conținutului Web.',
  },
  {
    question:
      'Ce este un CMS (Content Management System), în contextul cerințelor de administrare a conținutului?',
    options: [
      'Un sistem care permite administrarea conținutului printr-o interfață Web, fără cunoștințe de programare',
      'Un limbaj de programare pentru baze de date',
      'Un protocol de transmitere a e-mailurilor',
      'Un tip de certificat de securitate',
    ],
    correct: 0,
    explanation:
      'CMS-ul permite persoanelor fără cunoștințe tehnice să adauge și să modifice conținutul aplicației.',
  },
  {
    question: 'De ce este utilă „jurnalizarea” (logarea) evenimentelor într-o aplicație Web?',
    options: [
      'Pentru a genera automat conținutul site-ului',
      'Pentru a păstra o evidență a acțiunilor importante: cine, când și ce a modificat',
      'Pentru a crește viteza de încărcare a paginilor',
      'Pentru a înlocui necesitatea parolelor',
    ],
    correct: 1,
    explanation:
      'Jurnalizarea înregistrează automat evenimente relevante, utile pentru securitate și pentru depanare.',
  },
  {
    question:
      'Ce se înțelege, la nivel general, prin „migrarea datelor” într-un proiect de aplicație Web?',
    options: [
      'Schimbarea limbii interfeței aplicației',
      'Actualizarea browserului utilizatorului',
      'Transferul datelor existente (de exemplu dintr-un fișier vechi) în noua aplicație',
      'Mutarea fizică a serverului într-o altă clădire',
    ],
    correct: 2,
    explanation:
      'Migrarea datelor presupune preluarea informațiilor dintr-un sistem vechi (de exemplu un fișier Excel) în noua aplicație.',
  },
  {
    question:
      'De ce este important ca un document de cerințe să menționeze și legislația aplicabilă (de exemplu legea privind datele cu caracter personal)?',
    options: [
      'Pentru ca documentul să fie mai lung și mai formal',
      'Pentru că fiecare aplicație trebuie să citeze cel puțin 10 legi',
      'Pentru că legislația înlocuiește nevoia de cerințe funcționale',
      'Pentru că anumite cerințe sunt obligatorii prin lege și nu pot fi negociate',
    ],
    correct: 3,
    explanation:
      'Legislația în vigoare impune cerințe obligatorii, indiferent de preferințele beneficiarului sau executantului.',
  },
  {
    question:
      'Ce se înțelege prin „publicul-țintă” al unei aplicații Web, într-un document de cerințe?',
    options: [
      'Categoriile de utilizatori cărora li se adresează aplicația',
      'Prețul de vânzare al aplicației',
      'Numărul de pagini ale site-ului',
      'Limbajul de programare folosit',
    ],
    correct: 0,
    explanation:
      'Publicul-țintă descrie cine va folosi aplicația (de exemplu elevi, profesori, administratori).',
  },
  {
    question: 'De ce se recomandă ca obiectivele unei aplicații să fie „măsurabile”?',
    options: [
      'Pentru a evita menționarea beneficiarului',
      'Pentru a putea verifica, la un moment ulterior, dacă au fost sau nu atinse',
      'Pentru ca documentul să pară mai tehnic',
      'Pentru că altfel aplicația nu poate fi lansată',
    ],
    correct: 1,
    explanation:
      'Un obiectiv măsurabil poate fi verificat obiectiv după o perioadă stabilită, spre deosebire de o dorință vagă.',
  },
  {
    question: 'Care dintre următoarele este un exemplu de obiectiv NEmăsurabil, formulat greșit?',
    options: [
      'Timpul mediu de livrare scade la 2 minute',
      'Cel puțin 80% dintre cereri se depun online în 6 luni',
      'Aplicația trebuie să fie modernă și ușor de utilizat',
      'Cel puțin 60% dintre comenzi se plasează online în 6 luni',
    ],
    correct: 2,
    explanation:
      'Formularea „modernă și ușor de utilizat” nu poate fi verificată obiectiv, spre deosebire de celelalte, care au valori concrete.',
  },
  {
    question:
      'Ce este, în general, un „livrabil” (deliverable) într-un proiect de dezvoltare software?',
    options: [
      'Un tip de eroare de programare depistată la testare',
      'Un utilizator care testează aplicația înainte de lansare',
      'Un contract semnat între doi executanți diferiți',
      'Un rezultat concret predat beneficiarului la finalul unei etape, de exemplu o machetă sau o aplicație funcțională',
    ],
    correct: 3,
    explanation:
      'Livrabilul este rezultatul tangibil, predat beneficiarului la finalul unei etape a proiectului.',
  },
  {
    question:
      'De ce este utilă menționarea unui număr de versiune (de exemplu 1.0) pe un document de cerințe?',
    options: [
      'Pentru a putea distinge și urmări modificările ulterioare ale documentului',
      'Pentru a stabili prețul final al contractului',
      'Pentru a înlocui semnătura beneficiarului',
      'Pentru ca documentul să devină automat valabil legal',
    ],
    correct: 0,
    explanation:
      'Numărul de versiune permite urmărirea modificărilor aduse documentului de-a lungul timpului.',
  },
  {
    question:
      'Aplicația trebuie să se integreze cu sistemul de e-mail al instituției. Ce ar trebui să precizeze, minimum, cerința de integrare?',
    options: [
      'Doar cuvântul „integrare”, restul stabilește executantul',
      'Ce sistem extern, ce date se transmit, în ce direcție și ce face aplicația dacă sistemul extern nu răspunde',
      'Doar culoarea butonului de trimitere',
      'Doar prețul licenței sistemului extern',
    ],
    correct: 1,
    explanation:
      'O integrare se verifică doar dacă sunt clare partenerul, datele, sensul schimbului și comportamentul la eroare.',
  },
  {
    question:
      'Care este diferența principală dintre o cerință și soluția tehnică prin care aceasta se implementează?',
    options: [
      'Cerința este întotdeauna scrisă de executant, iar soluția de beneficiar',
      'Soluția tehnică se scrie întotdeauna înaintea cerinței, în document',
      'Cerința descrie rezultatul dorit, iar soluția tehnică este mijlocul concret ales pentru a-l obține',
      'Nu există nicio diferență, cei doi termeni fiind sinonimi',
    ],
    correct: 2,
    explanation:
      'O cerință bine scrisă cere un rezultat, lăsând soluția tehnică la alegerea executantului.',
  },
  {
    question:
      'Ce se înțelege, la nivel general, printr-un „beneficiar” într-un proiect de dezvoltare a unei aplicații Web?',
    options: [
      'Persoana care scrie codul sursă al aplicației',
      'Firma care găzduiește serverul aplicației',
      'Utilizatorul final ocazional al aplicației',
      'Persoana sau instituția care comandă și recepționează aplicația',
    ],
    correct: 3,
    explanation:
      'Beneficiarul este partea care comandă lucrarea și o recepționează la final, spre deosebire de executant, care o realizează.',
  },
];
