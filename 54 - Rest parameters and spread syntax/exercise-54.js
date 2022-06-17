const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};


const personInfo2 = { ...person, id: 2 }; //dovrebbe funzionare.

console.log(id, personInfo);