import { Cardapio } from "./cardapio-da-lanchonete.js";
class CaixaDaLanchonete {
    constructor() {
        this.cardapio = new Cardapio();
        this.itens = this.cardapio.getListaDeItens();
    }
     
    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
    
        var precoTotal = 0;
        var itensEncontrados = [];
    
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(',');
    
            if (parseInt(quantidade) === 0) {
                return "Quantidade inválida!";
            }
    
            const itemEncontrado = this.itens.find(item => item.codigo == codigo);
    
            if (itemEncontrado) {
                itensEncontrados.push({ codigo, quantidade: parseInt(quantidade) });
                precoTotal += itemEncontrado.valor * parseInt(quantidade);
            } else {
                return "Item inválido!";
            }
        }
    
        for (let i = 0; i < itensEncontrados.length; i++) {
            if ((itensEncontrados[i].codigo.includes('chantily') && !itensEncontrados.some(item => item.codigo.includes('cafe'))) ||
                (itensEncontrados[i].codigo.includes('queijo') && !itensEncontrados.some(item => item.codigo.includes('sanduiche')))) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }
    
        if (formaDePagamento == 'dinheiro') {
            var desconto = 5 / 100;
            precoTotal -= (desconto * precoTotal);
        } else if (formaDePagamento == 'credito') {
            var acrescimo = 3 / 100;
            precoTotal += (acrescimo * precoTotal);
        } else if (formaDePagamento == 'debito') {
            // Não faz nada? Você pode remover esse trecho se não for necessário.
        } else {
            return "Forma de pagamento inválida!";
        }
    
        return "R$ " + precoTotal.toFixed(2).replace('.',',');
    }
    
}
export { CaixaDaLanchonete };