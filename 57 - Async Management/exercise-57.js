const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    const person = persons.find(person => person.id === id);
    if (person) {
      resolve(person);
    } else {
      reject(`Person with id ${id} not found`);
    }
  });
}

fetchPersonById(1) // se qui si inserisce il numero id funziona.

.then(person => console.log(person))