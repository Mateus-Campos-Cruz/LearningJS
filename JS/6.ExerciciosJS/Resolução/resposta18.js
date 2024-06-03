/**Você esta trabalhando numa aplicação pessoal de controle de despesas.
 *  Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, 
 * informando nome, categoria, e preço. Uma funcionalidade que você está desenvolvendo 
 * no momento é a de somar o total das despesas.

Crie  uma função que receba um array de produtos e retorne o total das despesas. */

let produtos = [
    {nome: 'Notebook', categoria: 'Eletronicos', preco: 4999},
    {nome: 'Iphone', categoria: 'Eletronicos', preco: 5000},
]

function retornaDespesa(produtos) {

    let soma = 0

    for(let i = 0; i < produtos.length; i++){
         soma = soma + produtos[i].preco
    }

    return soma
}

console.log(retornaDespesa(produtos))