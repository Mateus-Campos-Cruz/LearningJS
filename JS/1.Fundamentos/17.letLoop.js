//A let i esta visivel somente no escopo de bloco
/*for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log('i = ', i)
*/
var funcs = []

for( let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()