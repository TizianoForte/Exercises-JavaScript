const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const objectFilter = Object.entries(person).filter(([key, value]) => typeof value === 'number');
const arrObj = Object.fromEntries(objectFilter);
const json = JSON.stringify(arrObj);


console.log(json); // Should return: { id: 1, age: 25 }

// Output: confermato.
