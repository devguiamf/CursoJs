const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const pesoInput = e.target.querySelector('.peso')
    const alturaInput = e.target.querySelector('.altura')
    
    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso){
        setResultado('Peso invalido')
        return;
    }

    if (!altura){
        setResultado('Altura invalido')
        return;
    }
    
    
    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu imc é ${imc} (${nivelImc})`

    setResultado(msg)
})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso','Peso Normal','Sobrepeso','Obesidade de grau 1',
     'Obesidade de grau 2','Obesidade de grau 3'];

     if(imc >= 39.9){return nivel[5]} 
     if(imc >= 34.9){return nivel[4]}
     if(imc >= 29.9){return nivel[3]}
     if(imc >= 24.9){return nivel[2]}
     if(imc >= 18.5){return nivel[1]}
     if(imc < 18.5){return nivel[0]}
    
}

function getImc(peso, altura){
    const imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function criaP() {
    const p = document.createElement('p')    
    return p
}

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ' '

    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);
    
}