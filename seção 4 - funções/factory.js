function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        fala: function(assunto) {// quando temos função dentro de um objeto chamamos de método
            return `${nome} esta falando do ${assunto}`
        }
    };
}

const p1 = criaPessoa('Guilherme','Almeida')
console.log(p1.fala('Terraplanismo'));