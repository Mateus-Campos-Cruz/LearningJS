/**Criar uma função que receba uma string como parametro e conte quantas palabras tem nela
 */

let palavra = 'Mateus é desenvolvedor'


function contadorDePalavras(palavra) {

    let cont = palavra.split(' ')

    return cont.length
}



console.log(contadorDePalavras(palavra))
