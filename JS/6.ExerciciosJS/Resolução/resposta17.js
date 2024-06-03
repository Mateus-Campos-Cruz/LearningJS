/**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */

let nums = [1,2,3,4,5]

function retornaSoma(nums) {

    let resultado = nums.map(a => a).reduce(function(acumulador, atual){
        return acumulador + atual
    })
    return resultado
}

console.log(`Soma dos elementos do array: ${retornaSoma(nums)} `)
