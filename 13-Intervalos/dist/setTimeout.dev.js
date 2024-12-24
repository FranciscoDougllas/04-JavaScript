"use strict";

// Exemplo de uso da função setTimeout em JavaScript
function saudacao() {
  console.log("Olá, mundo!");
} // A função saudacao será executada após 3 segundos (3000 milissegundos)


setTimeout(saudacao, 3000);
console.log("Aguardando para exibir a saudação...");