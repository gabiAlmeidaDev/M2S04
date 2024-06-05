class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

const produto1 = new Produto("Notebook", 2500.00, 10);
const produto2 = new Produto("Celular", 1500.00, 20);

console.log(produto1);
console.log(produto2);
