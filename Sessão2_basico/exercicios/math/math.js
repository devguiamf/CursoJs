const num = Number(prompt('digite um numero'))
const numero = document.getElementById('numero')
const texto = document.getElementById('texto')

numero.innerHTML = num
texto.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}<p/>`
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}<p/>`
texto.innerHTML += `<p>É NaN ${Number.isNaN(num)}<p/>`
texto.innerHTML += `<p>Arredondadno para baixo ${Math.floor(num)}<p/>`
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(num)}<p/>`
texto.innerHTML += `<p>Com duas casas decimais ${num.toFixed(2)}<p/>`
                   