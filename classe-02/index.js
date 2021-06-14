const jogada1 = 4;
const jogada2 = 2;

const resultado = jogada1 + jogada2;

console.log("Par ou Ímpaaar!!");
console.log(`O jogador 1 colocou ${jogada1}`);
console.log(`O jogador 2 colocou ${jogada2}`);
console.log("Calculando....");

if(resultado % 2 == 0){
    console.log(`O número ${resultado} é par, quem escolheu par vence!`);
} else {
    console.log(`O número ${resultado} é ímpar, quem escolheu ímpar vence!`);
}