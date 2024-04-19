//Classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Mateus')
p1.falar()



//Função Construtora
function Pessoa2(nome2){

   this.nome = nome2

    this.falar = function(){
        console.log(`Meu nome é ${nome2}`)
    }
}


const p2 = new Pessoa2('Mateus Felipe')
p2.falar()