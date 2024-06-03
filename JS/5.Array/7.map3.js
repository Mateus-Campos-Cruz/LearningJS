Array.prototype.map2 = function(callback) {
    
    const newArray = []

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços

//Converte a string em objeto
const paraObjeto = json => JSON.parse(json)
//Seleciona apenas o preço do objeto
const apenasPreco = produto => produto.preco

//Um novo array com 4 elementos que serão 4 objetos, depois extrai o preco do array
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)