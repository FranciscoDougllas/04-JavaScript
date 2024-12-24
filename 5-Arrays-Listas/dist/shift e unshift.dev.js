"use strict";

var arr = [1, 2, 3, 4];
var primeiro = arr.shift(); // primeiro = 1

console.log(arr); // Saída: [2, 3, 4]

console.log(primeiro); // Saída: 1

var arr2 = [2, 3, 4];
var novoComprimento = arr2.unshift(1); // novoComprimento = 4

console.log(arr2); // Saída: [1, 2, 3, 4]

console.log(novoComprimento); // Saída: 4