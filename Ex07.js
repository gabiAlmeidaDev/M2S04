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

    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`${quantidadeReposta} unidades de ${this.nome} foram repostas.`);
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis.`);
    }
}

const produto1 = new Produto("Notebook", 2500.00, 10);
const produto2 = new Produto("Celular", 1500.00, 20);

produto1.vender(5);  
produto1.mostrarEstoque();  

produto1.repor(10); 
produto1.mostrarEstoque();  

console.log(produto1);
console.log(produto2);
