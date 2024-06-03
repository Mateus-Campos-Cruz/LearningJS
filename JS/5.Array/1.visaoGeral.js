console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Mateus'
console.log(aprovados[3])
aprovados.push('Paulo') // add um novo elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// Ordena o array em ordem alfa numerica
console.log(aprovados)

delete aprovados[1] // deleta o elemento do indice 1
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1','Elemento2') // Exclui e add varios elementos a partir dos parametros passados.
//1° param - Apartir de qual indice, 2° param - quantos elementos serão excluidos, 3° param - add elementos
console.log(aprovados)