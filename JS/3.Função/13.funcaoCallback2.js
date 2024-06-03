const notas = [7.7,8.9,5.2,3.6,7.8,9.0]

//Sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
}) 
/**filter() uma funcao que vai filtrar os elementos de um array
 * seguindo determinado criterio, que vai ser uma funcao callback que vai
 * retornar true ou false
 */

console.log(notasBaixas2)

//Outra forma funcao callback com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)