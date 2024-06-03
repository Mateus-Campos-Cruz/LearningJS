//Object.preventExtensions - Não vai conseguir add novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag // Será deletado
console.log(produto) // Atributo não aparecerá

//Object.seal - Selar - Não consegue deletar e add atributos mas consegue modificar
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // Atribitos somente podem ser modificados.

//Object.freeze = selado + valores constantes
