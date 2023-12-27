// funções construtoras
function Pessoa(nome, sobrenome){
    const id = 123456;
    const metodoInterno = function(){

    };
    this.nome = nome //pessoa.nome == nome
    this.sobrenome = sobrenome //pessoa.sobrenome == sobrenome

    this.metodo = () =>{
        const nomeComplete = `${this.nome} ${this.sobrenome} é meu nome completo`
        return nomeComplete;
    };
    Object.freeze(this);

}

const p1 = new Pessoa('Aliffer', 'Farias');
const p2 = new Pessoa('Joao', 'Otavio');

console.log(p2.metodo())
// Object.freeze(p1);
console.log(p1.nome)
console.log(p2.nome)