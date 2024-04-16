//Situação de erro - Tratamento de exceção

function tratarErroELancar(erro){
    //throw new Error('Ocorreu um erro de processamento!')
    //throw 10
    //throw true
   // throw 'Mensagem de erro'

   throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
   }
}

function imprimirNomeGritado(obj){

    try{ //Tentar - Bloco de código que tem algum código que você julga que pode gerar algum erro
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(erro){
        tratarErroELancar(erro)
    }finally{ //Será executado sempre
        console.log('Mensagem final')
    }
   
}

const obj = { nome: 'Roberto'} // Erro: nome - Certo: name
imprimirNomeGritado(obj)