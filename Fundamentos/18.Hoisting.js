// Hoisting = elevação

//var a = undefined
console.log('a = ', a)
var a = 1
console.log('a = ', a)

//Com let não ocorre a elevação
console.log('b = ', b)
let b = 2
console.log('b = ', b)