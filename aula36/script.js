// return Retorna um valor e termina a função


function soma(a, b){ // podemos executar essa função diretamente no console do navegador
    return a + b;
}



function soma2(a, b){
    console.log(a + b); // funções que nao retornam nada tem o valor undefined porém elas são uteis
}

soma2(2, 5)

// exemplos de funçoes sem retorno que são uteis document.addEventListener('click', function (){}) 
// document.onclick()
//  document.addEventListener('click', function (){
//      document.body.style.backgroundColor = 'blue'
//   })


function criaPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome,

        
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Aliffer', 'Farias')

console.log(p1, p1.nomeCompleto())
console.log("=========================")


// exemplo mais complexo

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')

console.log(resto)
console.log('=========================')

// exemplo onde isso seria util
function criaMultiplicador(multiplicador){ // multiplicador esta neste escopo porém a função 'filha' 
    function multiplicacao(n){             // que seria a multiplicacao consegue a acessar o valor do seu 
        return n * multiplicador;       
    }
    
    return multiplicacao;     // retornamos a funcao multiplicao 
}
const duplica = criaMultiplicador(2);    // entao chamamos a funcao criaMultiplicador jogamos o retorno dela em uma variavel que é a funcao multiplicacao e essa funcao/variavel vai se lembrar sempree o valor passado como parametro q nesse caso foi o 2
const triplica = criaMultiplicador(3); // nesse caso o 3 
const quadriplica = criaMultiplicador(4); // nesse o 4


console.log(duplica(2)) // aqui executamos a função multiplicao da variavel duplica e ela se lembra que o valor de multiplicador era 2 no momento da sua criação entao nos retorna 2 * 2
console.log(triplica(2))
console.log(quadriplica(2))