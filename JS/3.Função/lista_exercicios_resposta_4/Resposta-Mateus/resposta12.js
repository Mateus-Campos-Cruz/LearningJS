/**
 * 12)​ Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorial(numero){
    let fatorial = numero
    numero = numero - 1
    for(i = numero; i > 0; i--){
        fatorial = fatorial * (numero)
        numero--
    }

    return console.log(fatorial)
}

fatorial(6)