const person = {
  firstName :'',
  lastName : '',

  get firstNamePerson() {
    return this.firstName;
  },

  set firstNamePerson(value) {
    this.firstName = value;
  },
  get lastNamePerson() {
    return this.surName;
  },
  set lastNamePerson(value) {
    this.surName = value;
  },

    fullName() {
      return this.firstName + " " + this.surName;
    },

  
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstNamePerson = "John";
john.lastNamePerson = "Doe";
simon.firstNamePerson = "Simon";
simon.lastNamePerson = "Collins";




console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins