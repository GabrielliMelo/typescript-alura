import { NegociacaoControler } from "./controllers/negociacaoControler.js";
const controller = new NegociacaoControler();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
});
