//Obejrtivo: atraves do js colocar os paragrafos em cor fundo igual o do body e mudar a cor deles para branco


const paragrafos = document.querySelector('.paragrafo')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const corFundo = estiloBody.backgroundColor

for(let p of ps){
    p.style.backgroundColor = corFundo
    p.style.color = '#fff'
}