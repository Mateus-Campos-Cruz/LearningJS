//pessoa -> 00061 -> {dados}- Aponta para um endereço de memória
//Quando a variável é uma constante não tem como alterar 
//o endereço de memória, somente o dado dentro dele
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 0034 -> {dados} - Quando você tenta adicionar outro objeto dentro 
// de pessoa, você esta tentando mudar o endereço de memória
//Exemplo: pessoa = {nome: 'Ana'}

//Object.freeze - "Congela o objeto", ou seja, não é possível alterar o objeto
Object.freeze(pessoa)//Transformou o objeto constante, além da variável que armazena ele

pessoa.nome = 'Mateus'
console.log(pessoa.nome) //Nome "congelado" em "Pedro"


//Criando o objeto constante desde o inicio
const pessoaConstante = Object.freeze({ nome: 'Arthur'})
console.log(pessoaConstante)