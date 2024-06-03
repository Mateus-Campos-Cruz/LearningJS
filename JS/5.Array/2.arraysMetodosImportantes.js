const pilotos = ['Vertel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Deleta o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //Add novo elemento
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Add e remove elementos
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)//
console.log(pilotos)

const algumPilotos1 = pilotos.slice(2) //novo array
console.log(algumPilotos1)

const algumPilotos2 = pilotos.slice(1, 4) // Cria um novo array com os elementos a partir do indice 1 até o 3
console.log(algumPilotos2)
