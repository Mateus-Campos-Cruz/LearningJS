console.log(soma(3, 4)) // Pode chamar a function declaration antes de declarar 

//Function Declaration
function soma(x, y){
    return x + y
}

//Function Expression
const sub = function (x , y ){
    return x - y
}

console.log(sub(3, 4)) // Caso tente chamar a function expression ocorrerá um erro

//Named Function Expression
const mult = function mult( x, y){
    return x * y
}

console.log(mult(3, 4)) // Caso tente chamar a named function expression ocorrerá um erro
