const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};



const person2 = person1;
person2.firstName = 'Simon';



// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

// Risposta:  non creado una copia di person1 (Oggetto), person2 ha tutte le proprietà di person1, modificando il valore di una proprietà di person2, modifica anche la proprietà di person1.