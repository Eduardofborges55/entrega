// Criar um aplicativo que, dado um número de conta corrente com três dígitos, retorne o seu dígito
// verificador. Para encontrar o dígito verificador, siga o exemplo do número 235:
// Somar o número da conta com o seu inverso: 235 + 532 = 767; Multiplicar cada dígito pela sua ordem 
// posicional (da esquerda para a direita) e somar estes resultados: 7 * 1 + 6 * 2 + 7 * 3 = 40; O 
// último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0.

function codigoverificador(){
let numero_conta_Corrente = parseInt(prompt(`digite sua conta corrente`))
let resultado = 0

let stringConta = String(numero_conta_Corrente)
let invertido = ""
for(let i = stringConta.length -1; i >= 0; i--){
    console.log(numero_conta_Corrente[i])

    invertido += stringConta[i]

let soma_NCC_NO_NI = numero_conta_Corrente + resultado;
console.log(soma_NCC_NO_NI)
}
console.log(invertido,"invertido")
let soma = parseInt(invertido)+ parseInt(numero_conta_Corrente)
console.log(soma,"soma")
let stringSoma = String(soma)
for(let i = 0; i <stringSoma.length; i++){
    resultado += parseInt(stringSoma[i]) * (i +1)
}
console.log(resultado,"resultdao");
}
codigoverificador()
