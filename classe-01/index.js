const jogada1 = "pedra";
const jogada2 = "tesoura";

console.log(`jogador 1 colocou ${jogada1}`);
console.log(`jogador 2 colocou ${jogada2}`);

if (jogada1 === jogada2) {
    console.log(`Empate, ambos jogadores colocaram ${jogada1}`);
} else if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
        console.log("Pedra quebra a tesoura, jogador 1 vence");
    } else if (jogada2 === "papel") {
        console.log("Papel embrulha a pedra, jogador 2 vence");
    }
} else if (jogada1 === "papel") {
    if (jogada2 === "pedra") {
        console.log("Papel embrulha a pedra, jogador 1 vence");
    } else if (jogada2 === "tesoura") {
        console.log("Tesoura corta o papel, jogador 2 vence");
    }
} else if (jogada1 === "tesoura") {
    if (jogada2 === "papel") {
        console.log("Tesoura corta o papel, jogador 1 vence");
    } else if (jogada2 === "pedra") {
        console.log("Pedra quebra a tesoura, jogador 2 vence");
    }
}