function memoize(fn) {
  let cache = {};
  
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      cache[args] = fn.apply(this, args);
      return cache[args];
    }
  }
}// ho usato un agromerator per memorizzare i risultati dei calcoli.

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial); 
console.log(factorial(10)); // 3628800
console.log(factorial(6)); // 720
console.log(factorial(5)); // 120



