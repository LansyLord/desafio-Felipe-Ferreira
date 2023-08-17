import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

import readline from 'readline';

var cardapio = `| codigo    | descrição                   | valor   |
|-----------|-----------------------------|---------|
| cafe      | Café                        | R$ 3,00 |
| chantily  | Chantily (extra do Café)    | R$ 1,50 |
| suco      | Suco Natural                | R$ 6,20 |
| sanduiche | Sanduíche                   | R$ 6,50 |
| queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
| salgado   | Salgado                     | R$ 7,25 |
| combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
| combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |
`

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const venda = new CaixaDaLanchonete();

function fazerPedido(perguntaDoPedido){
    leitor.question(perguntaDoPedido, (answer) => {
        var itens = answer.split(" ");
        fazerPagamento(itens, "Qual será a forma de pagamento? (dinheiro/debito/credito): ");
    });
}
    
function fazerPagamento(itens, perguntaDoPagamento){
    leitor.question(perguntaDoPagamento, (formaDePagamento) => {
        console.log(venda.calcularValorDaCompra(formaDePagamento, itens));
        leitor.close();
        
    });
}

console.log('\nOlá, seja bem vindo!\n');
console.log(cardapio);
fazerPedido("Faça seu pedido: ");