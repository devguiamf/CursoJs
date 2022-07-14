const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let valor of numeros) {
    
    if (valor === 2) {
        console.log('numero 2 encontrado, continue...');
        continue //continua a iteração do laço       
    }    

    if (valor === 7 ) {
        console.log('Numero 7 encontrado, saindo');
        break // para a execução do comando e sai do bloco
    }
    console.log(valor);
    
}