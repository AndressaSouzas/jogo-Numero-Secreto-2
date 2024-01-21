//alterar o html
//let campo = document.querySelector("tag");
//campo.innerHTML ="texto";
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "jogo do número Secreto.";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaDeNumerosSorteados =[];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirMensagemInicial(){
exibirTextoNaTela("h1", "Jogo Número Secreto!");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

//PARA CRIAR UMA FUNÇÃO DESCRITIVA RESPONSAVEL POR DETERMINAR UMA FUNÇÃO 

function verificarChute() {

    //value para verdadeiro ou falso
    //if e else para informar se acertou ou se o numero é maior ou menor

    let chute = document.querySelector("Input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou");

        //para exibir número de tentativas

        let palavraTentativa = tentativas >1?"tentativas":"tentativa";
        let mensagemTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);

//para habilitar o botão novo jogo

        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if(chute> numeroSecreto){
        exibirTextoNaTela("p","O número Secreto é menor que o escolhido.");
    }else{
        exibirTextoNaTela("p","O número Secreto é maior que o escolhido.");
    }

    //calcular o numero de tentativas

tentativas++;

//limpar o numero escolhido

limparCampo();

}

}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados=[];
}
//para fazer uma lista de numeros escolhidos

if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
} else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
}
//para limpar campo

function limparCampo(){
    chute=document.querySelector("input");
    chute.value="";

}

//para o botão novo jogo funcionar

function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();

//habilitar o botão so quando terminar o jogo

    document.getElementById("reiniciar").setAttribute("disabled", true);
}