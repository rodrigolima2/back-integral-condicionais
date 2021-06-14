const ladoA = 10;
const ladoB = 10;

console.log("Essa pedra é uma bucha?");
console.log(`O lado A dessa pedra tem o valor de ${ladoA}`);
console.log(`O lado B dessa pedra tem o valor de ${ladoB}`);

if(ladoA === ladoB){
    console.log("Sim, essa pedra é uma bucha!");
    if(ladoA === 0){
        console.log("E o nome dessa bucha é Branco");
    } else if(ladoA === 1){
        console.log("E o nome dessa bucha é Ás");
    } else if(ladoA === 2){
        console.log("E o nome dessa bucha é Duque");
    } else if(ladoA === 3){
        console.log("E o nome dessa bucha é Terno");
    } else if(ladoA === 4){
        console.log("E o nome dessa bucha é Quadra");
    } else if(ladoA === 5){
        console.log("E o nome dessa bucha é Quina");
    } else if(ladoA === 6){
        console.log("E o nome dessa bucha é Sena");
    } else {
        console.log("Porém ela não existe '-'");
    }
} else{
    console.log("Não, essa pedra não é uma bucha!");
}