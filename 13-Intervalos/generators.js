/**
 * Gera uma sequência infinita de números inteiros começando de 1.
 * 
 * @generator
 * @yields {number} O próximo número na sequência.
 */
function* numberGenerator() {
    let number = 1;
    while (true) {
        yield number++;
    }
}

const generator = numberGenerator();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4
console.log(generator.next().value); // 5