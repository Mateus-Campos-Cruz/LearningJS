/**Crie uma função que recebe quatro numeros como parametros(numero, minimo, maximo, inclusivo) 
 * e retorne se o parametro numero (o primeiro) esta entre o minimo e o maximo. Quando o parametro 
 * inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a 
 * minimo ou a maximo. Caso o parametro inclusivo nao seja informado, seu valor padrao deverá ser false, 
 * portanto, a lógica será exclusiva, não considerando se o numero é igual a minimo ou a maximo. */

function verificarIntervalo(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(verificarIntervalo(4,10,50))