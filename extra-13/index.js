//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 20000;

if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
    const valorDoProdutoComDesconto = (valorDoProduto * 0.90) / 100;
    console.log(`Valor a ser pago: R$${(valorDoProdutoComDesconto).toFixed(2)}`);
} else if(tipoDePagamento === "credito"){
    const valorDoProdutoComDesconto = (valorDoProduto * 0.95) / 100;
    console.log(`Valor a ser pago: R$${(valorDoProdutoComDesconto).toFixed(2)}`);
} else if(tipoDePagamento === "cheque"){
    const valorDoProdutoComDesconto = (valorDoProduto * 0.97) / 100;
    console.log(`Valor a ser pago: R$${(valorDoProdutoComDesconto).toFixed(2)}`);
} else{
    console.log("Tipo de pagamento inválido");
}