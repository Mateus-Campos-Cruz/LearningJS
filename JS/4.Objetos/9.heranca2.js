//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Não faça isso em casa!

const avo = { attr1: 'A'}
//Para tornar o objeto avo, o super objeto sobre o objeto pai, é preciso
//atribuir o avo como prototipo do pai
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} 
//
const filho = { __proto__: pai, attr3: 'C'} 
console.log(filho.attr1,filho.attr3) // attr3 será = 'C', ou seja, sobre escreveu o atributo do objeto pai
console.log(pai.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing - caso o prototipo seja carro, a velMax sera sobre escrita
}

const volvo = {
    modelo: 'v40',
    status() { // shadowing
        return `${this.modelo}: ${super.status()}`
    }
}

/**Função para prototipar objetos, o primeiro parametro é o objeto filho, e o ultimo parametro
 * é o objeto que será o pai
 */
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())