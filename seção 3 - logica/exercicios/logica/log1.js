/* Escreva uma função que rcebe 2 numeros e retorne o maior deles */

function MaiorN (n1, n2){    
    if(n1> n2) return n1
    // caso nao for no primeiro if ele vai para a linha de baixo
    return n2
}
console.log(MaiorN(90,30))