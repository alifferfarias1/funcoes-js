// funções construtoras
function Pessoa(nome, sobrenome){
    const ID = 123456;
    const metodoInterno = function(){

    };
    this.nome = nome //pessoa.nome == nome
    this.sobrenome = sobrenome //pessoa.nome == nome

    this.metodo = () =>{
        const nomeComplete = `${this.nome} ${this.sobrenome} é meu nome completo`
        return nomeComplete;
    };
}

const p1 = new Pessoa('Aliffer', 'Farias');
const p2 = new Pessoa('Joao', 'Otavio');

console.log(p2.metodo())