//Função Factory com parâmetros

function produto(nome, preco){ // Não precisa colocar nome: pois o parametro ja recebeu o mesmo nome do atributo do object
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(produto('Notebook', 3999.99))
console.log(produto('Celular', 999.99))