const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
//**Cria um objeto a partir do prototipo pai */
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} 
})

/**writable - Não permite ser sobrescrito
 * enumerable - Permite ser listado
 */
console.log(filha2.nome)
filha2.nome = 'Carla' // Não é permitido sobreescrever por causa da propriedade writable = false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // Saber se o atributo veio por herança
    console.log(key) : console.log(`Por herança: ${key}`)
}


