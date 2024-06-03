/**Escreva uma função que recebe dois params. O primeiro param é o elementos que repetirá, 
 * enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(param1, param2) {

    let resultado = []

    for(let i = 0; i < param2; i++) {
        resultado.push(param1)
    }
    
    return resultado
}

console.log(repetir("Mateus", 5))