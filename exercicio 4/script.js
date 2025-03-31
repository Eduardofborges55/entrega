// Entrar com um número no formato CDU (centena, dezena e unidade) e imprimi-lo invertido. Por exemplo,
// 123 sairá 321. O número deverá ser armazenado em outra variável antes de ser impresso.
function CDU(){
let lista = "567";
let resultado = [];

for(let i = lista.length -1; i >= 0; i--){
    console.log(lista[i])
//    resultado + lista[i]
    resultado += lista[i]
}
console.log(resultado)
}
CDU()
