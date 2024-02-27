import { getfilmes } from "./filmes.js";

const filme1 = {
    nome: "AAA"
}

function criarCard(filme) {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    title.textContent = filme.nome
    card.appendChild(title)
    return card
}