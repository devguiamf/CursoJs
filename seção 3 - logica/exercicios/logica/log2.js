/* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura deuma imgem(numbr)Retorne true se a imagem estivr no modod paisagem */

//modo paisagem : deitada

function ePaisagem(altura, largura){
    
    return largura > altura ? largura : altura // como é uma condição ele ja retorna true ou false
}

console.log(ePaisagem(2000, 1920));