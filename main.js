const form = document.getElementById('form-estoque');
let valorRetirada = document.getElementById('valor-retirada');
let estoqueTotal = document.getElementById('estoque-total');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagem = document.getElementById('mensagem')
    const mensagemSucesso = `Pode retirar, pois tem o suficiente no estoque`
    const mensagemErro = `Não pode retirar, pois não tem o suficiente no estoque ou deixará o estoque vazio`

    const valorRetiradaNumero = parseFloat(valorRetirada.value);
    const estoqueTotalNumero = parseFloat(estoqueTotal.value);
    
    if  (estoqueTotalNumero > valorRetiradaNumero) {
        mensagem.innerHTML = mensagemSucesso;
        mensagem.style.display = 'block';
    } else {
        mensagem.innerHTML = mensagemErro;
        mensagem.style.display = 'block';
    }
})


