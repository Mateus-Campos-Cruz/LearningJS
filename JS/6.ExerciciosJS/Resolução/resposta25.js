/**A fim de criar um mecanismo de busca para sua aplicação, 
 * você precisa iniciar criando uma função para identificar palavras semelhantes.

Escreva uma função que recebe como primeiro parametro uma palabra e, 
como segundo parametro, um array de strings. A função deverá filtrar 
as palavras do array que contém nelas a string do primeiro parametro. */

let palavra = 'mateus'
let vetorPalavras = ['mateus', 'bruna', 'deus', 'mateus']

function identificarPalavras(palavra, vetorPalavras) {

    let contador = 0

    for(let i = 0; i < vetorPalavras.length; i++) {
        if(vetorPalavras[i] == palavra){
            contador++
        }
    }

    return contador
}

console.log(identificarPalavras(palavra, vetorPalavras))