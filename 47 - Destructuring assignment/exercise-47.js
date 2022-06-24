const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

Object.entries(person).forEach(([key, value]) =>
  console.log(`${key}: ${value}`)
);

//Output: ora dovrebbe essere corretto.