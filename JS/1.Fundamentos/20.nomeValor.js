// Chave : Valor

const chave = 'valor' //contexto léxico 1

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}


//Objetoc são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Mateus',
    idade: 33,
    peso: 85,
    endereco: {
        rua: 'Rua Anjos',
        numero: 777
    }
}

console.log(chave)
console.log(exec())
console.log(Cliente)