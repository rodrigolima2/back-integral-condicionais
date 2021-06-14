//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 400000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const rendaMensalEmReais = rendaMensalEmCentavos / 100;

if(mesesDecorridos >= 60){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois já decorreram 60 meses")
} else if(rendaMensalEmReais <= 2_000){
    console.log("O valor da parcela desse mês é de R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2.000 reais")
} else {
    console.log(`O valor da parcela é de ${rendaMensalEmReais * 0.18}`);
}