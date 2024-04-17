const nums = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10]

/**
 * for(let indice in nums){
    if(indice == 5) break //Quando encontrar o indice 5 - Valor 6, o laço vai parar
    console.log(`Indice ${indice}: ${nums[indice]}`)
}
 */
for(let indice in nums){
    if(indice == 5) {
        break//Causa desvio de fluxo para fora do laço mais próximo dele, do while e for e switch
    }
    console.log(`Indice ${indice}: ${nums[indice]}`)
}

for(let y in nums){
    if (y == 5) {
        continue//Causa desvio de fluxo para dentro do laço mais próximo dele, do while e for
    }
    console.log(`${y} = ${nums[y]}`)
}

//Rotulo

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b ==3) break externo//Vai chamar o break do for externo, sem o rotulo o break age sobre o for interno
        console.log(`Par = ${a}, ${b}`)
    }
}