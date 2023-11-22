// factory function
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }, //setter

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala (assunto = 'sobre nada'){
            return `${this.nome} está falando ${assunto}.`;
        },

        altura,
        peso,

        get imc(){                  // ao botar get o metodo se comporta como se fosse um atributo do obj
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.67, 70);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
p1.nomeCompleto = 'Aliffer alves farias'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('sobre js'))

