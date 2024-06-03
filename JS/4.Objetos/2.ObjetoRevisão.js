//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mateus',
        idade: 33,
        endereco: {
            logradouro: 'Rua dos Anjos',
            numero: 777
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 18
                },
                {
        nome: 'Jesus',
        idade: 33
                }],
                calcularValorSeguro: function(){
                    //...
                }
}

carro.proprietario.endereco.numero = 999
console.log(carro.proprietario.endereco)

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)