function sumUntil(maxValue) { 
    var sum = 0;
    for (var i = 0; i <= maxValue; i++) {
        sum += i;
    }
    return sum;
  
}

console.log(sumUntil(5));

// output: 15