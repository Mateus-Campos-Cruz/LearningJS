/**A fim de criar um mecanismo de busca para sua aplicação, 
 * você precisa iniciar criando uma função para identificar palavras semelhantes.

Escreva uma função que recebe como primeiro parametro uma palabra e, 
como segundo parametro, um array de strings. A função deverá filtrar 
as palavras do array que contém nelas a string do primeiro parametro. */
let palavra = 'mat';
let vetorPalavras = ['mateus', 'bruna', 'deus', 'mateus'];

function identificarPalavras(palavra, vetorPalavras) {
    let palavrasFiltradas = vetorPalavras.filter(palavraArray => palavraArray.includes(palavra));
    return palavrasFiltradas;
}

console.log(identificarPalavras(palavra, vetorPalavras));
