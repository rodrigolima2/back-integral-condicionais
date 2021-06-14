//valor do produto comprado em centavos
const valorDoProduto = 300000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago em reais
const valorPago = 2400;

const valorDoProdutoEmReais = valorDoProduto / 100;

if(valorPago < valorDoProdutoEmReais){
    const valorDeCadaParcela = valorDoProdutoEmReais / quantidadeDoParcelamento;
    const quantidadeDeParcelasRestantes = (valorDoProdutoEmReais - valorPago) / valorDeCadaParcela;

    console.log(`Restam ${quantidadeDeParcelasRestantes} parcelas de ${(valorDeCadaParcela).toFixed(2)}`);
} else {
    console.log("O produto já foi pago.")
}