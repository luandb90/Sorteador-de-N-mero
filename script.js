function gerarNumero() {
    const numero = Math.floor(Math.random() * 1000) + 1;
    document.getElementById('resultado').innerText = numero;
}

function limpar() {
    document.getElementById('resultado').innerText = '';
}