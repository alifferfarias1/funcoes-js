function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,   // valor da chave
        writable: false, // pode alterar o valor se for true se for false nao
        configurable: true // pode apagar, editar, ou reconfigurar a chave true sim false nao
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome,   // valor da chave
            writable: true, // pode alterar o valor se for true se for false nao
            configurable: true // pode apagar, editar, ou reconfigurar a chave true sim false nao

        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,   // valor da chave
            writable: false, // pode alterar o valor se for true se for false nao
            configurable: true //  pode apagar, editar, ou reconfigurar a chave true sim false nao

        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}
