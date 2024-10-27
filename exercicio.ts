// Multiplicação
const numero1 = document.getElementById('n1') as HTMLInputElement  
const numero2 = document.getElementById('n2') as HTMLInputElement
const botaoResulatdo = document.getElementById('botaoMult')
const resposta = document.getElementById('resultadoDaMulti')

botaoResulatdo?.addEventListener('click', (e: MouseEvent) =>{

    const valor1 = parseFloat(numero1.value)
    const valor2 = parseFloat(numero2.value)

    if (isNaN(valor1) || isNaN(valor2)){
        resposta?.id = 'resultadoDaMulti--is-open'
        resposta?.innerHTML = `<p> Não existe valor para ser Multiplicado, Digite 2 números</p>`
    } else{
        const resultado = valor1 * valor2

        resposta.id = 'resultadoDaMulti--is-open'
        resposta.innerHTML = `<p>O resultado da sua multiplicação é ${resultado}</p>`
        
    }

})

// Nome

const seuNome = document.getElementById('nome') as HTMLInputElement
const botaoDoNome = document.getElementById('botaoNome')
const resultadoDoNome = document.getElementById('resultadoDoNome')

botaoDoNome?.addEventListener('click', (e: MouseEvent) => {
    const nome: string = seuNome.value

    if ( nome == ''){
        resultadoDoNome.id = 'resultadoDaMulti--is-open'
        resultadoDoNome?.innerHTML = '<p>Digite algo na caixa de texto!</p>'
    } else {
        resultadoDoNome.id = 'resultadoDaMulti--is-open'
        resultadoDoNome?.innerHTML = `<p>Olá, ${nome}, como vai?</p>`
    }
}) 



