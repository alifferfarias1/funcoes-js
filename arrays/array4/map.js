// dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor =>  valor * 2);

// const dobro = [...numeros].map(function(valor) { assim nao modificamos o array numero criamos uma copia
//     return valor * 2;
// });

console.log(dobro)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia ', idade: 19 },
    { nome: 'Rosana ', idade: 32 },
    { nome: 'Wallace ', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome)

const idades = pessoas.map(function(obj) {
    return {idade: obj.idade}
})
//  console.log(idades)

const comIds = pessoas.map(function(obj, indice){
    const newObject = { ...obj};
    newObject.id = indice;
   return newObject;
})

console.log(comIds)
