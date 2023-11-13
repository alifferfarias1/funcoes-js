// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

// function qualquerCoisa(){
    //console.log(123142353)  }
  // assim a funcao toca o escopo global, para evitar isso criamos uma função auto invocada
    // qualquerCoisa();

(function(idade, peso, altura){
    const sobrenome = 'Farias';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    } 
    function falaNome(){
        console.log(criaNome('Aliffer'))

    }
    
    falaNome();
    console.log(idade, peso, altura);// nada disso toca o escopo global nem a chamada da funcao
})(20, 70, 1.67);                 // assim evitamos conflitos com variaveis do escopo global  

