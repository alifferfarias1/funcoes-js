// arguments só serve para funcoes com a palavra function
function funcao(valor) {
    console.log(valor, arguments); // arguments é um espaço reservado para todos os argumentos passados para função, independente de terem um parametro ou nao
}
funcao('Valor', 1, 4, 2, 3);

console.log("======================")

function funcaoSoma() {
    let total = 0;
    for (let argumento of arguments) { // um exemplo do que podemos fazer com os arguments mesmo sem ter parametros na nossa função
        total += argumento
    }
    console.log(total)

}

funcaoSoma(1, 2, 3, 4, 5, 6, 7);
console.log("======================")



function funcaoSemParametros(a, b, c, d, e) {
    console.log(a, b, c, d, e) // os valores que nao receberem argumentos ficam setados como undefined

}
funcaoSemParametros(1, 2, 3)
console.log("======================")



function somaNan(a, b = 2, c = 4) {
    //  b = b || 0 
    console.log(a + b + c); // passando somente um argumento ele soma o numero com undefined e retorna um NaN
}
somaNan(undefined, 2, 2) // enviando undefined podemos fazer ele assumir o valor padrao de b
console.log("======================")

function desestruturaçãoObj({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Aliffer', sobrenome: 'Farias', idade: 20 }
desestruturaçãoObj(obj)

console.log("======================")

function arraysFunc([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);

}

let meuArray = ['Aliffer', 'Farias', 20];
arraysFunc(meuArray)

console.log("======================")

const conta = function (operador, acumulador = 1, ...numeros) {// utilizando o rest operator todo o resto depois de acumulador vai estar em numeros
    console.log(numeros)
    for (let num of numeros) {
        if (operador === '+') acumulador += num;
        if (operador === '-') acumulador -= num;
        if (operador === '*') acumulador *= num;
        if (operador === '/') acumulador /= num;
    }
    if (operador === '+') {
        console.log(acumulador - 1)

    } else if (operador === '-') {
        console.log(acumulador - 1)

    } else {
        console.log(acumulador)
    }

}

conta('-', 1, 20, 30, 40, 50)
