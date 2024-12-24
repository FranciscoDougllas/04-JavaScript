let arr = [1, 2, 3, 4, 5];

// 1. forEach() - Executa uma função em cada elemento do array
arr.forEach(el => console.log(el)); // Saída: 1 2 3 4 5

// 2. map() - Cria um novo array com os resultados de uma função em cada elemento
let doubled = arr.map(el => el * 2);
console.log(doubled); // Saída: [2, 4, 6, 8, 10]

// 3. filter() - Cria um novo array com todos os elementos que passam no teste de uma função
let even = arr.filter(el => el % 2 === 0);
console.log(even); // Saída: [2, 4]

// 4. reduce() - Aplica uma função em um acumulador e em cada valor do array para reduzi-lo a um único valor
let sum = arr.reduce((acc, el) => acc + el, 0);
console.log(sum); // Saída: 15

// 5. find() - Retorna o primeiro elemento que passa no teste de uma função
let found = arr.find(el => el > 3);
console.log(found); // Saída: 4

// 6. findIndex() - Retorna o índice do primeiro elemento que passa no teste de uma função
let foundIndex = arr.findIndex(el => el > 3);
console.log(foundIndex); // Saída: 3

// 7. every() - Testa se todos os elementos passam no teste de uma função
let allEven = arr.every(el => el % 2 === 0);
console.log(allEven); // Saída: false

// 8. some() - Testa se pelo menos um elemento passa no teste de uma função
let someEven = arr.some(el => el % 2 === 0);
console.log(someEven); // Saída: true

// 9. includes() - Verifica se um array contém um determinado elemento
let hasTwo = arr.includes(2);
console.log(hasTwo); // Saída: true

// 10. sort() - Ordena os elementos do array
let sorted = arr.sort((a, b) => b - a);
console.log(sorted); // Saída: [5, 4, 3, 2, 1]

// 11. reverse() - Inverte a ordem dos elementos no array
let reversed = arr.reverse();
console.log(reversed); // Saída: [5, 4, 3, 2, 1]

// 12. slice() - Retorna uma cópia de uma parte do array
let sliced = arr.slice(1, 3);
console.log(sliced); // Saída: [4, 3]

// 13. splice() - Adiciona ou remove elementos de um array
arr.splice(1, 2, 'a', 'b');
console.log(arr); // Saída: [5, 'a', 'b', 2, 1]
