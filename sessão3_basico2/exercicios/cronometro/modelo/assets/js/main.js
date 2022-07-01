function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'GMT'})
}



// selecionando os botoes e o timer por class usando querrySelector
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer


function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000)
}

// pegando o evento de click dos botoes para usalos no timer
iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()    
})
pausar.addEventListener('click', function(e){
    relogio.classList.add('pausado')
    clearInterval(timer)
    
})
zerar.addEventListener('click', function(e){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})


