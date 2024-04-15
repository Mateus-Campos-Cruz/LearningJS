function rand({min = 0, max = 1000}){
    const valor = Math.rand() * (max - min ) + min
    return Math.floor(valor)
}

const obj = (rand({max: 50, min: 40}))
console.log(rand(obj))