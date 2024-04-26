//Ter atributos privados e ter métodos para ler e alterar
//Get - Ler - Set - Alterar


const sequencia = {
    _valor: 1, //convenção - Acessar esse atributo somente dentro de sequencia
    get valor() {return this._valor++},// Uma função onde os valores são acessados, vantagens: fazer algum tipo de verificação antes
    set valor(valor) {valor > this._valor ? this._valor = valor : ""}
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
