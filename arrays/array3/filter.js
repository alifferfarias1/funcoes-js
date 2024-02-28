// filter, map e reduce
// filter sempre retorna um array com a mesma quantidade de elementos ou menos.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numeros2 = numeros.filter(valor => valor > 10);
console.log('numeros2 -->',numeros2);












// retorne as pessoas que o nome tem 5 ou + letras
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace ', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

const pessoasComIdade = pessoas.filter(obj => obj.idade > 50);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
// console.log('=====================')
console.log(pessoasComIdade);
// console.log('=====================')
console.log(nomeTerminaComA);
