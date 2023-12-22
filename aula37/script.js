const nome = 'Luiz';

function falaNome(){
    // const nome = 'Otavio'
    console.log(nome);  // a função conhece o local onde foi declarada e os vizinhos dela
}                        // ao buscar uma variavel dentro de uma função ele busca primeiro no seu escopo

                        // se não achar ela sobe e procura no escopo acima como neste exemplo que achou a variavel nome no escopo global, se tivessemos funções dentro de funções ele iria subindo até achar porém ela nunca procura no escopo de seus filhos

function usaFalaNome(){
    const nome = 'Otavio'
    console.log(nome)
    falaNome();
}

usaFalaNome();