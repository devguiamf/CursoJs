const elementos = [
    {tag: 'p', texto: 'frase 1'}, // indice 0 
    {tag: 'div', texto: 'frase 2'}, // indice 1
    {tag: 'footer', texto: 'frase 3'}, // indice 2
    {tag: 'section', texto: 'frase 4'} // indice 3
]

const container = document.querySelector('.container')

const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let elementoCriado = document.createElement(tag)
    elementoCriado.innerHTML = texto
    div.appendChild(elementoCriado)
}

container.appendChild(div)