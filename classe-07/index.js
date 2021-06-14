const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855971; //emCentavos

if(aposentada || portadoraDeDoenca){
    console.log("ISENTA");
} else if(totalDeRendimentos < (28_559.70 * 100)){
    console.log("VAZA LEÃO! JÁ TA DIFÍCIL SEM VOCÊ");
} else{
    console.log("PEGA LEÃO!");
}