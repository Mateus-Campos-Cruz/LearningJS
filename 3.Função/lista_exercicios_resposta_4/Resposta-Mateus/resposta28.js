/**28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares */

let vetor = [2,7,9,8,3,1,10,4,5]

function verificadorPares(vetor){

        let contPares = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            contPares++
        }
    }

    return contPares
}

console.log(verificadorPares(vetor))