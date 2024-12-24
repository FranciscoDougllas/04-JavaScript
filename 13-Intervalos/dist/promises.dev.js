"use strict";

// promises.js
// Função que retorna uma Promise que resolve após um determinado tempo
function esperar(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
} // Exemplo de uso da Promise


esperar(2000).then(function () {
  console.log("2 segundos se passaram!");
})["catch"](function (error) {
  console.error("Ocorreu um erro:", error);
});