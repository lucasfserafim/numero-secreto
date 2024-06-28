let listaDeNumerosAleatorios = [];
let numMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, text) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p', `escolha um número entre 1 a ${numMaximo}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() *numMaximo + 1);
    let quantidadeNumAleatorios = listaDeNumerosAleatorios.length;

    if (quantidadeNumAleatorios == numMaximo) {
        listaDeNumerosAleatorios = [];
    }
    if (listaDeNumerosAleatorios.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosAleatorios.push(numeroAleatorio);
        console.log(listaDeNumerosAleatorios);
        return numeroAleatorio;
    }
        

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}
function reiniciarJogo() {
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}