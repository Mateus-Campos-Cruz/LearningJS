
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


//Função Factory
    const pessoa = nome => {
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
    }

const p2 = pessoa('Mateus Felipe')
p2.falar()
