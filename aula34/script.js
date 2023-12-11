// declaração de função (function hoisting)

falaOi(); // o javascript sobe a função para o inicio entao poderiamos subir o falaOi para antes da declaração

function falaOi(){  // somente declarando funções assim ocorre o hoisting
    console.log('oi');
}


// funcoes são objetos de primeira classe
// function expression

const souUmDado = function (){
    console.log('souUmDado');
};
executaFuncao(souUmDado);



function executaFuncao(funcao){
    funcao();
};



// arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto

const objPessoa = {
    nome:'aliffer',
    sobrenome: 'farias',
    idade: 20,

    falar: function(){ // ou poderiamos usar só falar() {}
        console.log('Eu gosto de andar de skate');
    }
};

objPessoa.falar();
console.log(objPessoa.nome)