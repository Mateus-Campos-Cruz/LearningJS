/**
 * A função bind() cria uma nova função vinculada (bound function). 
 * Uma função vinculada é um objeto de função exótico (termo da 
 * ECMAScript 2015) que encapsula o objeto de função original. 
 * Chamar uma função vinculada geralmente resulta na execução de sua função encapsulada.
 */

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// confliito entre o paradigma:funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) //bind você passa um objeto para resolver o this

falarDePessoa()