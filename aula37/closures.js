// Global
//Escopo lexico
//Closure
function retornaFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("Luizinho");

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())