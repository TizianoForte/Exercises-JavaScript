const concat = function (arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concat([2, 4], [5, 1]));

// Arrow functions

const concat = (arr1, arr2) => arr1.concat(arr2);

console.log(concat([2, 4], [5, 1])); // output: [2, 4, 5, 1]

