const correto = new Audio('/assets/correto.mp3');
const incorreto = new Audio('/assets/incorreto.mp3');
const resultElement = document.getElementById('result');
const voltar = document.getElementById('voltar');


function verificarResposta(opcao, respostaCorreta, proximaPagina) {
    let pontuacao = parseInt(localStorage.getItem('pontuacao')) || 0;

    if (opcao === respostaCorreta) {
        correto.play();
        alert('Resposta correta');
        pontuacao++;
        localStorage.setItem('pontuacao', pontuacao);
    } else {
        incorreto.play();
        alert('Resposta errada');
    }

    window.location.href = proximaPagina;
}

if (resultElement) {
    resultElement.textContent = 'Você acertou: ' + (localStorage.getItem('pontuacao') || 0);
}

function voltarPag() {
    localStorage.clear();
}

function pergunta01(opcao) { verificarResposta(opcao, 2, '/src/pages/pagequestion2.html'); }
function pergunta02(opcao) { verificarResposta(opcao, 3, '/src/pages/pagequestion3.html'); }
function pergunta03(opcao) { verificarResposta(opcao, 2, '/src/pages/pagequestion4.html'); }
function pergunta04(opcao) { verificarResposta(opcao, 3, '/src/pages/pagequestion5.html'); }
function pergunta05(opcao) { verificarResposta(opcao, 4, '/src/pages/results.html'); }
