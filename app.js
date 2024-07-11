let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarnumeroAleatorio();
let tentativas = 1;
function exibirnaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}
function exibirMenssagemInicial(){
  exibirnaTela('h1','Bem vindo ao jogo do número secreto!')
  exibirnaTela('p','Escolha um número entre 1 e 10')
}
exibirMenssagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
      exibirnaTela('h1', 'Você acertou!');
      let palavrasTentativa = tentativas > 1? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobrio o número secreto com ${tentativas} ${palavrasTentativa}`;
      exibirnaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
      if(chute > numeroSecreto){
        exibirnaTela('p', 'O número secreto e menor')
      }else{
        exibirnaTela('p', 'O número secreto e maior')
      }
      tentativas++;
      limparCampo()
    }

}

function gerarnumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantiadedeElementoNaLista = numerosSorteados.length

  if(quantiadedeElementoNaLista == numeroLimite){
    numerosSorteados = []
  }
    if(numerosSorteados.includes(numeroEscolhido)) {
      return gerarnumeroAleatorio();
    } else{
      numerosSorteados.push(numeroEscolhido);
      console.log(numerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarnumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMenssagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}