function Pessoa(){
    this.idade = 0

    const self = this//Técnica para referenciar escopo local
    setInterval(function(){//A função setInterval() pode receber outra função como paramentro e um numero (milisegundos) que disparada a instrução de acorco com o tempo setado

        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa