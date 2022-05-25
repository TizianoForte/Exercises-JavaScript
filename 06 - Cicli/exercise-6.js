function adultFilter(persons) {
  let adults = [];
  for( a= 0; a < persons.length; a++){
    if (persons[a].age >= 18){
      adults.push(persons[a]);
    }
  }
  return adults;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons); // tutte le persone
console.log(adults); // solo i maggiorenni 