/**Desenvolva uma função que recebe um caracter e uma string como parametro e 
 * retorne a quantidade de vezes que o caractere se repete na string. 
 * A função deverá ser case-sensitive, ou seja, irá diferenciar maiusculas de minusculas. */

function contadorLetras(caracter, string) {

let contador = 0

for(let i = 0; i < string.length; i++){
    if(string[i] === caracter){
        contador++
    }
}
    return contador
}

console.log(contadorLetras('a','A vida é boa'))