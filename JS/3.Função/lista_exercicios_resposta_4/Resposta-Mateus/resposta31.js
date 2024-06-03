/**31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. */

let vetor = [1,-2,6,-8,9,8,-4]

function contaNegativos(){

    let i = 0 
    let contNegativos = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] < 0){
            contNegativos++
        }
    }

    return contNegativos
}

console.log(contaNegativos(vetor))