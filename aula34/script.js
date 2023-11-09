// declaração de função (function hoisting)

falaOi(); // o javascript sobe a função para o inicio entao poderiamos subir o falaOi para antes da declaração

function falaOi(){  // somente declarando funcções assim ocorre o hoisting
    console.log('oi');
}


// funcoes são objetos de primeira classe
// function expression

const souUmDado = function (){
    console.log('souUmDado');
};


function executaFuncao(funcao){
    funcao();
};

executaFuncao(souUmDado);


// arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto

const obj = {
    falar: function(){ // ou poderiamos usar só falar() {}
        console.log('Estou falando');
    }
};

obj.falar();