function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco //O JS associa o atributo do object a funcao de mesmo nome
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())
console.log(produto.getPreco())
 
const carro = {
    preco: 44999,
    desconto: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco(carro, 0.17, '$'))//Função call - 1º param é contexto, e o restante do parametros da função
console.log(getPreco.apply(carro, [0.17, '$']))// Função apply - precisa passar os parametros como array
