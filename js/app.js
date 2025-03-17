function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    contabilizar(tipoIngresso);
}

function contabilizar(tipoIngresso) {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).innerHTML);
    if (quantidade > parseInt(document.getElementById(`qtd-${tipoIngresso}`).innerHTML)) {
        alert('Quantidade de ingressos indisponível!');
    }
    else {
        document.getElementById(`qtd-${tipoIngresso}`).innerHTML = quantidadeDisponivel - quantidade;
    }
}

