//Notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //This torna um atributo em público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) // Não tem como acessar atributo preco pois esta dentro da função e é um atributo privado
    }
}

const p1 = new Produto('Caneta', 3.99, 0.5)//Criando instância de produto
const p2 = new Produto('Notebook', 3999, 0.20)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
//Uma função factory é uma função que fabrica algo
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('Joao', 7980, 4)
const funcionario2 = criarFuncionario('Maria', 8000, 6)
console.log(`Salário 1: ${funcionario1.getSalario()} e Salário 2: ${funcionario2.getSalario()}`)

//Object.create

const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//Ums função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)