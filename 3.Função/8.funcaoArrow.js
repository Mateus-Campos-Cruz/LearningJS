let dobre = function (a){
    return 2 * a
}

dobro = (a) => { // Função Arrow sempre é uma função anonima, se quiser chama la precisa ser armazenada em uma const ou let ou var
    return 2 * a
}

dobro = a => 2 * a // Quando tira o corpo da função terá um retorno implicito - Usada mais com função de uma unica linha

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Unico parametro mas pode ser ignorado pois JS permite isso

console.log(ola())