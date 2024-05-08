//importando as informações dos modulos
const moduloA = require('./2.0.moduloA')
const moduloB = require('./2.1.moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) //O this é um objeto

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)