/**
 * 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
 */

let vetor = [1,2,3,4,5,6,7,8,9]

function maiorMenor(vetor){
    let maior = 0
    let menor = 0
    let i = 0

    for(i = 0; i < vetor.length; i++){
        if(i == 0){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior ){
                maior = vetor[i]
            }else if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }

    return console.log(maior, menor)
}

maiorMenor(vetor)