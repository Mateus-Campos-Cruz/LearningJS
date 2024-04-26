const a = 1
const b = 2
const c = 3

//Versão antiga
//1° forma de notação literal
const obj1 = {a: a, b: b, c: c}

//Versão nova
//2° forma de notação literal
const obj2= {a, b, c} //Os atributos vão assumir os valores das variaveis com o mesmo nome

//3° forma de notação literal
//Objeto assumi o nome e o valor das variáveis
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


//4° forma de notação literal
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//5° forma de notação literal
const obj5 = {
    funcao1: function(){
        //...
    }, funcao2(){
        //...
    }
}