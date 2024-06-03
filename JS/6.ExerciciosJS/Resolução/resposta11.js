/**
 * Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array
 */

let array = ['7', 'Felipe', 9 , 'Mateus']

function retornePrimeiroUltimo(param) {

    const resultado = []

    resultado.push(param.shift())
    resultado.push(param.pop())


    return resultado
}

console.log(retornePrimeiroUltimo(array))