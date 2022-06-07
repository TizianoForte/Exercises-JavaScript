const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  job: "Web Developer",
};
person.fullName = function () {
  return `${this.firstName} `;
};
person.info = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} - ${this.job}`;
};

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer
