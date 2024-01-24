// alert(''): imprime um mensagem na tela
alert('Boas vindas ao jogo do número secreto'); // ponto e virgula indica ao JS que terminou a linha de codigo

// let: cria uma variável em JS
let limiteNumero = (1000 - 1) + 1
let numeroSecreto = parseInt(Math.random() * limiteNumero);
console.log(numeroSecreto);

// prompt(''): Mostra na tela uma caixa para resposta do usuário
let chute;

let tentativas = 1;

// enquanto chute não for igual o numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${limiteNumero}`)
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
    
        }
        // tentativas = tentativas + 1;
        tentativas++;
        }
}
let palavratentativa = tentativas > 1 ? 'tentativas totais' : 'tentativa total';

alert(`Isso ai! Você descobriu que o numero era ${numeroSecreto} com ${tentativas} ${palavratentativa}.`);
