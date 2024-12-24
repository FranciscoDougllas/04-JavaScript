// Criando um array com três elementos
let arr = [1, 2, 3];

// 1. length - Retorna o número de elementos no array
console.log("Tamanho do array:", arr.length); // Saída: 3

// 2. push() - Adiciona um ou mais elementos ao final do array
arr.push(4);
console.log("Após push:", arr); // Saída: [1, 2, 3, 4]

// 3. pop() - Remove o último elemento do array
arr.pop();
console.log("Após pop:", arr); // Saída: [1, 2, 3]

// 4. shift() - Remove o primeiro elemento do array
arr.shift();
console.log("Após shift:", arr); // Saída: [2, 3]

// 5. unshift() - Adiciona um ou mais elementos ao início do array
arr.unshift(1);
console.log("Após unshift:", arr); // Saída: [1, 2, 3]

// 6. concat() - Junta dois ou mais arrays
let newArr = arr.concat([4, 5]);
console.log("Após concat:", newArr); // Saída: [1, 2, 3, 4, 5]

// 7. slice() - Retorna uma cópia de uma parte do array
let slicedArr = arr.slice(1, 3);
console.log("Após slice:", slicedArr); // Saída: [2, 3]

// 8. splice() - Adiciona/remove elementos de um array
arr.splice(1, 0, 4);
console.log("Após splice:", arr); // Saída: [1, 4, 2, 3]

// 9. indexOf() - Retorna o primeiro índice de um valor especificado
let index = arr.indexOf(4);
console.log("Índice do 4:", index); // Saída: 1

// 10. forEach() - Executa uma função em cada elemento do array
arr.forEach(el => console.log("Elemento:", el)); // Saída: 1 4 2 3

// 11. map() - Cria um novo array com os resultados de uma função em cada elemento
let mappedArr = arr.map(el => el * 2);
console.log("Após map:", mappedArr); // Saída: [2, 8, 4, 6]

// 12. filter() - Cria um novo array com todos os elementos que passam no teste de uma função
let filteredArr = arr.filter(el => el > 2);
console.log("Após filter:", filteredArr); // Saída: [4, 3]

// 13. reduce() - Aplica uma função em um acumulador e em cada valor do array para reduzi-lo a um único valor
let sum = arr.reduce((acc, el) => acc + el, 0);
console.log("Soma dos elementos:", sum); // Saída: 10
