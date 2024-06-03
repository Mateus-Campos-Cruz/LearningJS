/**Desenvolva uma funcao que receba uam string como parametro e retorne essa string somente com as consoantes, 
 * ou seja, sem as vogais */

const palavra = 'Mateus'

function identificaVogais(palavra) {

    let palavraArray = palavra.split('')


        const consoantes = palavraArray.filter(function(letra) {
            return !'aeiouAEIOU'.includes(letra);
        });
        return consoantes.join('');

}

console.log(identificaVogais(palavra))

