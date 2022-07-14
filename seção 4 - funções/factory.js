function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        fala: function(assunto) {// quando temos função dentro de um objeto chamamos de método
            return `${nome} esta falando do ${assunto}`
        },
        peso: peso,
        altura: altura,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Guilherme','Almeida', 80, 1.74)
console.log(p1.fala('Terraplanismo'));
console.log(p1.imc());