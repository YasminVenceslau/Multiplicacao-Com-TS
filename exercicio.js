"use strict";
// Multiplicação
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const botaoResulatdo = document.getElementById('botaoMult');
const resposta = document.getElementById('resultadoDaMulti');
botaoResulatdo === null || botaoResulatdo === void 0 ? void 0 : botaoResulatdo.addEventListener('click', (e) => {
    const valor1 = parseFloat(numero1.value);
    const valor2 = parseFloat(numero2.value);
    function Multiplicar(valor1, valor2) {
        if (isNaN(valor1) || isNaN(valor2)) {
            resposta === null || resposta === void 0 ? void 0 : resposta.id = 'resultadoDaMulti--is-open';
            resposta === null || resposta === void 0 ? void 0 : resposta.innerHTML = `<p> Não existe valor para ser Multiplicado, Digite 2 números</p>`;
        }
        else {
            const resultado = valor1 * valor2;
            resposta.id = 'resultadoDaMulti--is-open';
            resposta.innerHTML = `<p>O resultado da sua multiplicação é ${resultado}</p>`;
        }
    }
    Multiplicar();
});
// Nome
const seuNome = document.getElementById('nome');
const botaoDoNome = document.getElementById('botaoNome');
const resultadoDoNome = document.getElementById('resultadoDoNome');
function DizerNome(nome) {
    botaoDoNome === null || botaoDoNome === void 0 ? void 0 : botaoDoNome.addEventListener('click', (e) => {
        const nome = seuNome.value;
        if (nome == '') {
            resultadoDoNome.id = 'resultadoDaMulti--is-open';
            resultadoDoNome === null || resultadoDoNome === void 0 ? void 0 : resultadoDoNome.innerHTML = '<p>Digite algo na caixa de texto!</p>';
        }
        else {
            resultadoDoNome.id = 'resultadoDaMulti--is-open';
            resultadoDoNome === null || resultadoDoNome === void 0 ? void 0 : resultadoDoNome.innerHTML = `<p>Olá, ${nome}, como vai?</p>`;
        }
    });
    DizerNome();
}
