const fabricante = ["Mercedes", "Audi", "BMW", ]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir) // Para cada parametro que encontrar vai chamar a função de volta
fabricante.forEach(function(a){
    console.log(a)
})

fabricante.forEach(fabricante => console.log(fabricante))//Função arrow anônima

//Callback é quando um evento acontecer a função será chamada // Evento nesse caso 
//é cada um dos elementos percorridos no array, sempre que ele encontra um novo 
//elemento, a função é chamada novamente 

/**
 * Outro exemplo: Quando faz uma requisição Ajax, você vai no servidor
 * você passa para requisição uma callback, uma função que será chamada
 * quando a resposta estiver pronta, seja de sucesso ou de falha
 */