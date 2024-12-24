"use strict";

var animal = {
  nome: 'Rex',
  idade: 3,
  raca: 'Poodle',
  cor: 'Branco',
  peso: 5,
  // Método para exibir detalhes do animal
  exibirDetalhes: function exibirDetalhes() {
    // Exibe os detalhes do animal no console
    console.log("Nome: ".concat(this.nome, " Idade: ").concat(this.idade, " Ra\xE7a: ").concat(this.raca, " Cor: ").concat(this.cor, " Peso: ").concat(this.peso));
  }
}; //Aprofundando em métodos

var pessoa = {
  nome: 'Joao',
  getNome: function getNome() {
    return this.nome;
  },
  setNome: function setNome(nome) {
    this.nome = nome;
  }
};