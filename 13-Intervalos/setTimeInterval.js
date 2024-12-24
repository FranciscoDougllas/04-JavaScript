// Função que será executada a cada intervalo
function mostrarHora() {
    let data = new Date();
    let hora = data.toLocaleTimeString();
    console.log(hora);
}

// Configura o intervalo para executar a função a cada 1000 milissegundos (1 segundo)
setInterval(mostrarHora, 1000);