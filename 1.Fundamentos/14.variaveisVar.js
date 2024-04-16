{
    {
        {
            { 
                var sera = 'Será?'
            }
        }
    }
}
//A variavel var dentro de um bloco de código que não seja function será visivel
console.log(sera)
//A variavel  var só tem 2 escopos possíveis - global e escopo de function

//Escopo de function, var somente visivel em escopo local
function teste(){
    var local = 123
}
//Evitar usar variaveis de escopo global
teste()
//console.log(local)

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)