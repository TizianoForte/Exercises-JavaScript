function sum(num1, ...num2) {
    return num1 + num2.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
 
//Output: inserendo un numero indefinito di valori effettua la somma. risultato confermato.