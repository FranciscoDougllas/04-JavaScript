// promises.js

// Função que retorna uma Promise que resolve após um determinado tempo
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Exemplo de uso da Promise
esperar(2000).then(() => {
    console.log("2 segundos se passaram!");
}).catch((error) => {
    console.error("Ocorreu um erro:", error);
});