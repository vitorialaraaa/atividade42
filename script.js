const inputNome = document.getElementById('nome');
console.log("Input nome encontrado:", inputNome);

const elementosDestaque = document.getElementsByClassName('destaque');
console.log("Elementos com a classe 'destaque':", elementosDestaque);

const todosParagrafos = document.getElementsByTagName('p');
console.log("Quantidade de parágrafos na página:", todosParagrafos.length);

const tituloPrincipal = document.querySelector('h1');

tituloPrincipal.innerHTML = "Fundação de Ensino de Contagem - Frontend";

const caixas = document.querySelectorAll('div');

caixas.forEach(function(caixa) {
    caixa.addEventListener('click', function() {
        caixa.style.borderLeftColor = 'green';
    });
});

const botoes = document.querySelectorAll('button');

const botaoPrincipal = botoes[0];
const botaoSecundario = botoes[1];

botaoPrincipal.addEventListener('click', function() {
    caixas.forEach(function(caixa) {
        caixa.style.borderLeftColor = '#004a8d';
    });
});

botaoSecundario.addEventListener('click', function() {
    caixas.forEach(function(caixa) {
        caixa.style.borderLeftColor = 'transparent';
    });
});

const novaTecnologia = document.createElement('li');
novaTecnologia.innerHTML = "React"; // Define o texto interno

const listaTecnologias = document.querySelectorAll('ul')[1]; 

listaTecnologias.appendChild(novaTecnologia);