/**
 * Elevii care pot da testele: [Nume, Prenume].
 * Numele se compară fără să țină cont de majuscule, diacritice (ş/ș, ţ/ț), cratime și spații în plus.
 * Pentru o grupă nouă: adaugi un obiect nou în listă.
 */
export interface Group {
  name: string;
  students: [nume: string, prenume: string][];
}

export const GROUPS: Group[] = [
  {
    name: 'Grupa 1',
    students: [
      ['Boțan', 'Cristian'],
      ['Bounegru', 'Artur'],
      ['Bucatari', 'Daria'],
      ['Buruiana', 'Alexandra'],
      ['Cabac', 'Corina'],
      ['Catîrău', 'Mariela'],
      ['Cazacu', 'Cătălin'],
      ['Cernat', 'Maxim'],
      ['Chiciorman', 'Valentin'],
      ['Chicu', 'Denis'],
      ['Ciobanu', 'Andrei'],
      ['Dohocher', 'Iulian'],
      ['Dominte', 'Alexandru'],
      ['Găină', 'Artiom'],
      ['Gîtu', 'Denis'],
      ['Golban', 'Alexandru'],
      ['Guțu', 'Biatricia'],
      ['Iliev', 'Nicolae'],
      ['Iordanov', 'Alexandru'],
      ['Josan', 'Dorin'],
      ['Macovei', 'Alexandrina'],
      ['Mardari', 'Nicoleta'],
      ['Melnic', 'Mihaela'],
      ['Mîndru', 'Darius'],
      ['Morozan', 'Vlad'],
      ['Muntean', 'Artiom'],
      ['Muraș', 'Victor'],
      ['Petcu', 'Denis'],
      ['Pîntea', 'Bogdan'],
      ['Pocitari', 'Călin'],
      ['Roșca', 'Ion'],
      ['Său', 'Loredana'],
      ['Scurtu', 'Daniel'],
      ['Simonov', 'Vadim'],
      ['Solonari', 'Silvian'],
      ['Șalpuc', 'Adriana'],
      ['Trambaci', 'Ariana'],
      ['Vasilița', 'Alex'],
      ['Vrîncean', 'Marinela'],
    ],
  },
];
