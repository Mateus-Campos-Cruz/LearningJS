const cores = ['Red', 'Blue', 'Yellow','Green']
console.log(cores[0], cores[3])
console.log(cores[4]) //Se tentar acessar o indice vazio, retorna undefined

cores[4] = 'Purple' // Adciona um elemento no indice indicado
console.log(cores)
console.log(cores.length) //Retorna a quantidade de elementos no array

cores.push({id: 3}, false, null, "teste") //Adiciona elementos no array
console.log(cores)

console.log(cores.pop()) //Deleta o último elemento do array
delete cores[0] //Deleta o elemento do indice indicado
console.log(cores)

console.log(typeof cores) //Em JS o array é um object
