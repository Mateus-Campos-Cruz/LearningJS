//Função em JS é First-Class Object (Citizens)
//Higher-order function
//Você pode tratar função como um dado - e como sendo um dado, pode passar como parametro, chamar uma função dentro de outra

//Criar de forma literal
function fun1(){ }//toda função retorna o valor padrão UNDEFINED, caso não chame o return

//Armazenar em uma variável
const fun2 = function (){ }//Função anônima

//Armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de object
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(funcao){
    funcao()
}

run(function() {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

//soma(2, 3)(5)
const soma2 = soma(2, 3)
soma2(5)