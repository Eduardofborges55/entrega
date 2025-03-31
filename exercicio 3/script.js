// Criar um aplicativo que leia a quantidade de fitas que uma locadora de vídeo possui e o valor que
// ela cobra por cada aluguel, mostrando as informações pedidas a seguir: Sabendo que um terço das 
// fitas são alugadas por mês, exiba o faturamento anual da locadora; Quando o cliente atrasa a 
// entrega, é cobrada uma multa de 10% sobre o valor do aluguel. Sabendo que um décimo das fitas 
// alugadas no mês são devolvidas com atraso, calcule o valor ganho com multas por mês; 
// Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do total é comprado para 
// reposição, exiba a quantidade de fitas que a locadora terá no final do ano.
function locadora(){
let Quantidade_De_Fitas_Inicio_Do_Ano = parseInt(prompt(`Quantidade de fitas que a loucadora possui`))
let Quantidade_De_Fitas_Alugadas_No_Mês = Quantidade_De_Fitas_Inicio_Do_Ano * 0.33;
let Valor_Aluguel_Fita = parseFloat(prompt(`escreva o valor da Fita`));
let quantidade_De_Fitas_Estragadas = Quantidade_De_Fitas_Alugadas_No_Mês * 0.02; 
let Multa_Aluguel_Fita = Valor_Aluguel_Fita / 10;
let quantidade_De_Fitas_pra_Reposição = quantidade_De_Fitas_Estragadas * 0.1;

console.log(`
 ============= resultado anual ===========   
Quantidade de fitas no inicio do ano: ${Quantidade_De_Fitas_Inicio_Do_Ano}
Quantidade de fitas alugadas no mês: ${Quantidade_De_Fitas_Alugadas_No_Mês}
Valor do aluguel da Fita: ${Valor_Aluguel_Fita}
Quantidade de fitas estragadas: ${quantidade_De_Fitas_Estragadas}
Multa pelo atraso da entrega da fita: ${Multa_Aluguel_Fita}    
Quantidade de fitas pra reposição: ${quantidade_De_Fitas_pra_Reposição}
`)
}
locadora()
