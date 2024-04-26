/**
 * 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

let vetor = [1,2,3,4,5,6,7,8]

function mediaAritmetica(vetor){

    let soma = 0
    let media = 0

    for(i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    media = soma / vetor.length

    return media
}

console.log(mediaAritmetica(vetor))



