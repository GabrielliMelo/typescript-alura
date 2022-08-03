export class Negociacao {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  get data() {
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }

  set setData(data) {
    this.#data = data;
  }

  set setQuantidade(quantidade) {
    this.#quantidade = quantidade;
  }

  set setValor(valor) {
    this.#valor = valor;
  }
}
