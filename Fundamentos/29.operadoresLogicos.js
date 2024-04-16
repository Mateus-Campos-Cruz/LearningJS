function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //Pipe
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bit wise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete  // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // Quando omite a Chave, JS retorna somente o valor
}
//Para ter vários retornos basta jogar tudo dentro de um object - pois a função tem apenas 1 retorno

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false,false))