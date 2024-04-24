/**
 * 10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false.
 */

function divisivelPor3(numero){

    numero = numero % 3 == 0

    if(numero){
        return console.log('Divisivel por 3')
    }else{
        return console.log('Não é divisivel por 3')
    }
}

divisivelPor3(7)