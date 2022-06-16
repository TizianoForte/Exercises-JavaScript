const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, firstName, lastName, age}= person;

for (let value of Object.entries(person)) {
  console.log(` ${value[1]}`);
}


//Output: dovrebbe essere corretto.