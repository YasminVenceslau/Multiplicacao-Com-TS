// Multiplicação
const numero1 = document.getElementById('n1') as HTMLInputElement  
const numero2 = document.getElementById('n2') as HTMLInputElement
const botaoResulatado = document.getElementById('botaoMult')
const resposta = document.getElementById('resultadoDaMulti')

botaoResulatado?.addEventListener('click', (e: MouseEvent) =>{

    const valor1 = parseFloat(numero1.value)
    const valor2 = parseFloat(numero2.value)

    function Multiplicar(valor1: number, valor2: number): void{
        if (isNaN(valor1) || isNaN(valor2)){
            resposta?.setAttribute('id', 'resultadoDaMulti--is-open'),
            resposta!.innerHTML = `<p> Não existe valor para ser Multiplicado, Digite 2 números</p>`
        } else{
            const resultado = valor1 * valor2
    
            resposta?.setAttribute('id', 'resultadoDaMulti--is-open'),
            resposta!.innerHTML = `<p>O resultado da sua multiplicação é ${resultado}</p>`
            
        }
    }

    Multiplicar(valor1, valor2)
})

// Nome

const seuNome = document.getElementById('nome') as HTMLInputElement
const botaoDoNome = document.getElementById('botaoNome')
const resultadoDoNome = document.getElementById('resultadoDoNome')

botaoDoNome?.addEventListener('click', (e: MouseEvent) => {

    const nome: string = seuNome.value
    function DizerNome(nome: string){
  
    
        if ( nome.trim() === ''){
            resultadoDoNome?.setAttribute('id ', 'resultadoDaMulti--is-open')
            resultadoDoNome!.innerHTML = '<p>Digite algo na caixa de texto!</p>'
        } else {
            resultadoDoNome?.setAttribute('id ', 'resultadoDaMulti--is-open')
            resultadoDoNome!.innerHTML = `<p>Olá, ${nome}, como vai?</p>`
        }

    }
    DizerNome('nome')
}) 



