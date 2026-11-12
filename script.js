// 1) getElementById -> pega UM elemento pelo id
const titulo = document.getElementById("titulo");

// pega todos de uma classe (lista; [0] = o primeiro)
document.getElementsByClassName("destaque")[0].style.color = "crimson";

//  pega todos de uma tag (lista)
document.getElementsByTagName("h3")[0].style.textTransform = "uppercase";

//  pega o PRIMEIRO que combina com o seletor CSS
const lista = document.querySelector("#lista");

//  pega TODOS que combinam com o seletor CSS
const caixas = document.querySelectorAll(".caixa");

//  troca o conteúdo HTML de dentro do elemento
titulo.innerHTML = "Fundação de Ensino de <em>Contagem</em>";

// addEventListener + classList.toggle -> ao clicar, liga/desliga a classe "ativa"
document.querySelector("#btn-principal").addEventListener("click", () => {
  caixas.forEach(caixa => caixa.classList.toggle("ativa"));
});

// createElement + appendChild -> cria um <li> e coloca dentro da lista
document.querySelector("#btn-secundario").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nova tecnologia";
  lista.appendChild(li);
});
