/**Elabore uma função que recebe dois parametros: o primeiro é um array de números e o 
 * segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles 
 * npumeros do array que tem a quantidade de dígitos indicada pelo segundo parametro. */

let nums = [89687, 924525, 4254, 425252, 3214]

function retorno(nums, digits) {
    let novoArray = []

    novoArray = nums.filter(function(valor) {
        return String(valor).length === digits 
    })

    return novoArray
}

console.log(retorno(nums, 4))