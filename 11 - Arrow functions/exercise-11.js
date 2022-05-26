const sum = function (a, b) {  
  return a + b;
}

const log = function (value) {
  console.log(value);
}

log(sum(2, 5));

// Arrow functions

const sum = (a, b) => a + b; 


const log = value => console.log(value);

log(sum(2, 5)); // output: 7


/*const sum = (a, b) => {
  return a + b;
}*/ // così è altrettanto corretta?

