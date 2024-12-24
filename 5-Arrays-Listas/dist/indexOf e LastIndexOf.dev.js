"use strict";

var arr = [1, 2, 3, 1, 2, 3]; // Encontrar o índice da primeira ocorrência de 2

var indice = arr.indexOf(2);
console.log(indice); // Saída: 1
// Caso o elemento não seja encontrado

var naoEncontrado = arr.indexOf(4);
console.log(naoEncontrado); // Saída: -1
// Encontrar o índice da última ocorrência de 2

var ultimoIndice = arr.lastIndexOf(2);
console.log(ultimoIndice); // Saída: 4
// Caso o elemento não seja encontrado

var ultimoNaoEncontrado = arr.lastIndexOf(4);
console.log(ultimoNaoEncontrado); // Saída: -1