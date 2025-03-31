// Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo
// desconto. Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor tendo
// em vista que o desconto foi de 9%.
function produto(){
let valorProduto = parseFloat(prompt(`valor do produto sem desconto`));
let novovalorcomdesconto = valorProduto * 0.91;
let valorfinal = valorProduto - novovalorcomdesconto
console.log(`
    novovalorcomdesconto ${novovalorcomdesconto}
    valorfinal ${valorfinal}
    `)
}
produto()
