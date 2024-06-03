//Função Factory é uma função que retorna um objeto

// const produto = {
//     nome: 'Leite',
//     preco: 5.66
// }

//Factory Simples

function produto(){
    return {
        nome: 'Leite',
        preco: 9.99,

    }
}

console.log(produto())