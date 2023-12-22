//                -5     -4      -3       -2       -1
//                 0      1       2        3        4
const nomes = ['maria', 'joao', 'mario', 'jose', 'joana']

const removidos = nomes.splice(nomes.length, 0, 'Aliffer', 'Otavio');
console.log(nomes, removidos)