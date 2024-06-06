class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque insuficiente");
        } else {
            this.quantidade -= quantidadeVendida;
            console.log(`${quantidadeVendida} unidades de ${this.nome} vendidas.`);
        }
    }
}

const produto1 = new Produto("Notebook", 2500.00, 10);
const produto2 = new Produto("Celular", 1500.00, 20);

produto1.vender(5);  
produto1.vender(6);  

console.log(produto1);
console.log(produto2);
