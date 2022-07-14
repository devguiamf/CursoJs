function meuEscopo() {
    const form = document.querySelector('.form')//selecionando o formulario aravés doa classe
    const resultado = document.querySelector('.esultado')

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');    
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');   
        const altura = form.querySelector('.altura');    

        pessoas.push({
            nome: nome.ariaValue,
            sobrenome: sobrenome.ariaValueMax,
            peso: peso.ariaValueMax,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> NOME: ${nome.value} SOBRENOME: ${sobrenome.value} PESO:${peso.value} ALTURA: ${altura.value}</p>`
        
    }
    form.addEventListener('submit',recebeEventoForm)
    
}

meuEscopo();