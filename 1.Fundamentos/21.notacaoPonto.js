console.log(typeof console)
//Notação ponto utilizada para acessar uma função dentro de um objeto
console.log(Math.ceil(6.1)) //Arredondamento para cima

const obj1 = {}

obj1.nome = 'Bola' // obj1['nome] = 'Bola2'
console.log(obj1.nome) //Usada para acessar um atributo de um object

function Obj(nome){
    this.nome = nome // this.nome cria um atributo público
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()//É possível acessar uma função anonima dentro de um objeto
