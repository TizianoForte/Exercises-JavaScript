const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}



// Print values of person using Object.keys

Object.keys(person).forEach(key => {
  console.log(person[key]);
  console.log(key)
    
});         



//Output: Mario Rossi 25


