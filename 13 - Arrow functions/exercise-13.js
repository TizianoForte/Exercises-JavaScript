/*const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
} */

// Arrow functions

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const log = value => console.log(value);



log((divide(subtract(multiply(sum(2, 4),sum(2,5)),2),5))); // unico caso in cui il risultato mi risulta esatto 8. Altri casi mi risultava NaN


