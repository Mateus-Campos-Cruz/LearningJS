const valor = 'Global' 

function minhaFuncao(){//Função carrega o contexto/escopo em que foi escrita
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()