import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private listaNegociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.listaNegociacoes.push(negociacao);
  }

  listar(): readonly Negociacao[] {
    return this.listaNegociacoes;
  }
}
