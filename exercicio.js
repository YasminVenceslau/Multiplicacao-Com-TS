"use strict";
// Multiplicação
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const botaoResulatado = document.getElementById('botaoMult');
const resposta = document.getElementById('resultadoDaMulti');
botaoResulatado === null || botaoResulatado === void 0 ? void 0 : botaoResulatado.addEventListener('click', () => {
    const valor1 = parseFloat(numero1.value);
    const valor2 = parseFloat(numero2.value);
    function Multiplicar(valor1, valor2) {
        if (isNaN(valor1) || isNaN(valor2)) {
            resposta === null || resposta === void 0 ? void 0 : resposta.setAttribute('id', 'resultadoDaMulti--is-open'),
                resposta.innerHTML = `<p> Não existe valor para ser Multiplicado, Digite 2 números</p>`;
        }
        else {
            const resultado = valor1 * valor2;
            resposta === null || resposta === void 0 ? void 0 : resposta.setAttribute('id', 'resultadoDaMulti--is-open'),
                resposta.innerHTML = `<p>O resultado da sua multiplicação é ${resultado}</p>`;
        }
    }
    Multiplicar(valor1, valor2);
});
// Nome
const seuNome = document.getElementById('nome');
const botaoDoNome = document.getElementById('botaoNome');
const resultadoDoNome = document.getElementById('resultadoDoNome');
botaoDoNome === null || botaoDoNome === void 0 ? void 0 : botaoDoNome.addEventListener('click', () => {
    const nome = seuNome.value.trim();
    function DizerNome(nome) {
        if (nome === '') {
            resultadoDoNome === null || resultadoDoNome === void 0 ? void 0 : resultadoDoNome.setAttribute('id', 'resultadoDaMulti--is-open');
            resultadoDoNome.innerHTML = '<p>Digite algo na caixa de texto!</p>';
        }
        else {
            resultadoDoNome === null || resultadoDoNome === void 0 ? void 0 : resultadoDoNome.setAttribute('id', 'resultadoDaMulti--is-open');
            resultadoDoNome.innerHTML = `<p>Olá, ${nome}, como vai?</p>`;
        }
    }
    DizerNome(nome);
});
/* resultadoDaMulti--is-open */
