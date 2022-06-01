function greet(greeting) {
  return function greetWithPeople(name) {
    console.log(`${greeting} ${name}`);
  };
}

const greetWithHello = greet("Hello");
const greetWithBye = greet("Bye");
const greetWithHi = greet("Hi");

const greetPaulWithHello = greetWithHello("Paul");
const greetPaulWithHi = greetWithHi("Paul");
const greetJohnWithBye = greetWithBye("John");
const greetSimonWithHello = greetWithHello("Simon");

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);

//output: Hello Paul; Hi Paul; Bye John; Hello Simon;

//Nella console mi risulta anche undefined...