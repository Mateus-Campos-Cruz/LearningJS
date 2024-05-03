/**Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
 * a realize a multiplicação deles. Porém, não utilize o operador de multiplicação */

function multiplicação(num1, num2) {

    let mult = 0

    for(let i = 0; i < num1; i++){
        mult = mult + num2
    }

    return mult
}

console.log(multiplicação(5 , 100))