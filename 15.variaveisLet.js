// Escopo mais abrangente, caso não exista a let numero mais interna a function vai procurar a de escopo global
let numero = 1
//var numero = 1

{
    //Variaveis let será visivel apenas dentro do bloco
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ',numero)