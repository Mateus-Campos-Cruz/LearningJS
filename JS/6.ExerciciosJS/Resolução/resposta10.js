/**
 * Elabore uma função que recebe um númmero como parametro e retorne uma string com o simbolo "+" na quantidade especificada no parametro
 */

function repetir(param1) {

    let resultado = []

    for(let i = 0; i < param1; i++) {
        resultado.push("+")
    }
    
    return resultado
}

console.log(repetir(5))