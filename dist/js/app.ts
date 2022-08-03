import { Negociacao } from "./models/negociacao.ts";

const negociacao = new Negociacao(new Date(), 10, 100);

negociacao.quantidade = 1000;

console.log(negociacao);
console.log(negociacao.volume);
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);
