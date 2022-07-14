/*
    Quando trabalhamos com data sempre utilizamos new Date dentro de uma variavel, no caso esta sendo chamada de data, nele temos o data.toLocalTimeString que retorna a hora do maquina atual
*/
function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}
console.log(mostraHora());

// quando queremos trabalhar com intervalo de tempo utilizamos a funcação ja pronta setInterval onde passamos 2 parametros que são a função a ser executada e de quanto tempo(ms) ela vai ser executada
timer = setInterval (function (){
    console.log(mostraHora());
}, 1000)

//podemos escolher em quanto tempo para o timer usando timeout
setTimeout (function(){
    clearInterval(timer); // comando para limpar as horas
}, 3000)// ira para em 3 segundos




