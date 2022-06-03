function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function() {
    return this.firstName + " " + this.lastName; //so di poter utilizzare ${} ma volgio usare random tutti i metordi.
  }

}

 const john = new Person ("John", "Doe");
 const simon = new Person("Simon", "Collins");



console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins