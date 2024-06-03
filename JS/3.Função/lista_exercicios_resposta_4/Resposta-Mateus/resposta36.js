/**36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5. */

let vetor = [1, 2, 3, 4, 5]
let numero = 4

function funcao1(vetor, numero){

    let resultado = []

    for(i = 0; i < vetor.length; i++){
        resultado[i] = numero * vetor[i]
    }
    
    return resultado
}

function funcao2(vetor, numero){

    let resultado = []

    if(numero > 5){

        for(i = 0; i < vetor.length; i++){
            resultado[i] = numero * vetor[i]
        }

        return resultado
    }
    
}

console.log(funcao1(vetor, numero))
console.log(funcao2(vetor, numero))