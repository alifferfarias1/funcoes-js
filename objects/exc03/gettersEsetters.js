function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // pode apagar, editar, ou reconfigurar a chave true sim false nao
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('bad value')
                return;
            }
            estoquePrivado = valor;
            
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);

