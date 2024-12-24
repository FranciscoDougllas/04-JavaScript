"use strict";

var pessoa = {
  nome: 'Francisco',
  idade: 30,
  profissao: 'Engenheiro de Software'
}; // Acessando propriedades

console.log(pessoa.nome); // Saída: Francisco
// Adicionando uma nova propriedade

pessoa.altura = 1.75;
console.log(pessoa.altura); // Saída: 1.75
// Removendo uma propriedade

delete pessoa.profissao;
console.log(pessoa.profissao); // Saída: undefined
// Percorrendo propriedades

for (var chave in pessoa) {
  console.log(chave + ': ' + pessoa[chave]);
} // Saída:
// nome: Francisco
// idade: 30
// altura: 1.75


var carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  descricao: function descricao() {
    return this.marca + ' ' + this.modelo + ' de ' + this.ano;
  }
};
console.log(carro.descricao()); // Saída: Toyota Corolla de 2022