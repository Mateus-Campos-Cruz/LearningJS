//Novo recurso do ECS2015


const pessoa = {
    nome: 'Mateus',
    idade: 33,
    endereco: {
        logradouro: 'Rua M',
        numero: 999
    }
}
//Destructuring serve para extrair algum dado de objects ou arrays
const { nome, idade} = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, cargo = 'Dev'} = pessoa //Valor padrão = 'Dev'
console.log(sobrenome, cargo) //undefined / Dev

const { endereco: { logradouro, numero}} = pessoa // Acessando o caminho para um dado aninhado
console.log(logradouro, numero)
