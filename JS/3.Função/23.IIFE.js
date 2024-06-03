//Função auto invocada
//Tudo que for criado dentro da função IIFE será de escopo local
//IIFE - Immediately Invoked Function Expression



(function(){
    console.log("Será execitado na hora!")
    console.log('Foge do espoco mais abrangente')
})()