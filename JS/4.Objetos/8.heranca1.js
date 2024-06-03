//Uma herança diferente, baseada em protótipos
/**
 * Se você tem um atributo "nome" dentro do Objeto, outra nome fora do objeto
 * o JS vai acessar a variavel dentro do escopo do Objeto, caso não exista
 * o atributo "nome" dentro do Objeto e você tentar acessa-lo
 * o JS vai procurar pela variável no componente "PAI" do Objeto
 
Todo objeto tem um atributo chamado [[Prototype]] que aponta para Object.prototype,
que pode ser mudado para outro prototype, exemplo "Carro"
[[Prototype]] != prototype - 
O conceito de [[Prototype]] é diferente da propriedade prototype que existe dentro
das funções
*/

const ferrari = {
    modelo: 'f40',
    velMaxima: 324
}

const volvo = {
    modelo: 'v40',
    velMaxima: 200
}

console.log(ferrari.__proto__) // Acessa o protótipo desse objeto, superobjeto, objeto pai
/**Se tentar acessar algum atributo que não exista em ferrari
 * JS vai procurar o atributo no objeto pai
 */
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) // Object.prototype não possui um objeto pai

function MeuObjeto() {}
    console.log(typeof Object, typeof MeuObjeto())
    console.log(Object.prototype, MeuObjeto.prototype)

