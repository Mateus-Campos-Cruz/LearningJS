/**Numa aplicação Wev de investimento financeiro da qual você faz parte da equipe de desenvolvimento, 
 * pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.

Com o intuito de realizar esse cálculo, crie uma função que receba um array 
com uma quantidade indeterminada de números e retorne a média simples desses números. */

let valores = [3, 6, 9]

function calculaMedia(valores) {

    let media = valores.reduce((a, b) => a + b)

    return media / valores.length
}

console.log(calculaMedia(valores))