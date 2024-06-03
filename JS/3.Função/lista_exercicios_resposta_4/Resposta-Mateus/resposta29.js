/**29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações. */

let vetor = [1,15,16,14,2,3]


function verificaIntervalor(vetor){

    let contNum = 0

    for(i = 0; i < vetor.length; i++){
        if(vetor[i] <= 10 && vetor[i] >= 1){
            contNum++
        }
    }

    return contNum
}

console.log(verificaIntervalor(vetor))