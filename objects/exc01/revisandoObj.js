const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Diogenes'   
};  

console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
console.log('========================')

const pessoa2 = new Object();
pessoa2.idade = 30;
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otavio';

pessoa2.falarNome = function(){
   return (`${this.nome} está falando oi`)
}
pessoa2.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.getDataNascimento());

console.log('========================')

for (let chave in pessoa2){
    console.log(pessoa2[chave]);
}

console.log('========================')


// Moldes de objetos

//factory function
//constructor function
