export class Negociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    adiciona(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listar() {
        return this.listaNegociacoes;
    }
}
