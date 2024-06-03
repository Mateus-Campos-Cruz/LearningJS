//**Instanciar um objeto a partir de uma função */
function MeuObjeto() {}
    console.log(MeuObjeto.prototype)

    const obj1 = new MeuObjeto
    const obj2 = new MeuObjeto
    //**Todos os objetos criados a partir de uma mesma função
    /**construtora apontam para o mesmo prototipo
     * 
     */

    console.log(obj1.__proto__ === obj2.__proto__)
    console.log(MeuObjeto.prototype === obj1.__proto__)

    /**Todos os objetos criados a partir do prototipo
     * terão acesso aos atributos */ 
    MeuObjeto.prototype.nome = 'Anônimo'
    MeuObjeto.prototype.falar = function() {
        console.log(`Bom dia! Meu nome é ${this.nome}`)
    }

    obj1.falar()

    obj2.nome = 'Rafael'
    obj2.falar()

    const obj3 = {}
    obj3.__proto__ = MeuObjeto.prototype
    obj3.nome = 'Obj 3'
    obj3.falar()

    /**
     * Resumindo
     */

    console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
    console.log(MeuObjeto.__proto__ === Function.prototype)
    console.log(Function.prototype.__proto__ === Object.prototype)
    console.log(Object.prototype.__proto__ === null)