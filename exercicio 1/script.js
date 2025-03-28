function quilowatts(){
let salario = parseInt(prompt("salario minino"))
let custo = (salario/7)/100
let Quilowatts = parseInt(prompt("insira o quilowatts"));


let valor_P_Quilowatts = (custo)
let valor_Em_R$_Ser_Pago = Quilowatts * custo;
let valorNovo = valor_Em_R$_Ser_Pago * 0.9;
console.log(`
    valor_P_Quilowatts ${valor_P_Quilowatts.toFixed(2)}
    valor_Em_R$_Ser_Pago ${valor_Em_R$_Ser_Pago.toFixed(2)}    
    valor novo ${valorNovo.toFixed(2)}
    `)
}
quilowatts()