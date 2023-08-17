class Cardapio{
    constructor() {
        this.listaDeItens = [
            {codigo: "cafe", valor: 3.00, principal: true},
            {codigo: "chantily", valor: 1.50, extra: true},
            {codigo: "suco", valor: 6.20},
            {codigo: "sanduiche", valor: 6.50, principal: true},
            {codigo: "queijo", valor: 2.00, extra: true},
            {codigo: "salgado", valor: 7.25},
            {codigo: "combo1", valor: 9.50, principal: false},
            {codigo: "combo2", valor: 7.50, principal: false}
        ]
    }
    getListaDeItens(){
        return this.listaDeItens;
    }
     
    
}
export { Cardapio };                                                                            