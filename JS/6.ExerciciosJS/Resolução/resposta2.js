/**Escreva uma função que receba a idade de uma pessoa em anos 
 * e retorno a mesma idade em dias considerando que anos bissextos tem 366 dias */

const data = Date()

console.log(data)

function calcularDias(anos){
    return anos * 365
}


console.log(`Idade em dias: ${calcularDias(25)} dias.`)

