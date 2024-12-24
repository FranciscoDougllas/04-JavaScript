const animal = {
    nome: 'Rex',
    idade: 3,
    raca: 'Poodle',
    cor: 'Branco',
    peso: 5,
    // Método para exibir detalhes do animal
    exibirDetalhes() {
        // Exibe os detalhes do animal no console
        console.log(`Nome: ${this.nome} Idade: ${this.idade} Raça: ${this.raca} Cor: ${this.cor} Peso: ${this.peso}`);
    },
}


//Aprofundando em métodos
const pessoa = {
    nome: 'Joao',

    getNome: function() {
        return this.nome;
    },

    setNome: function(nome) {
        this.nome = nome;
    }
}