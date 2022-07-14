const inputTarefa = document.querySelector('.inputTarefa')
const btnTarefa = document.querySelector('.btnTarefa')
const tarefas = document.querySelector('.tarefa')


// cria o elemento li(html)
function criaLi(){
    const li= document.createElement('li')
    return li
}

function criaTarefa(textoInput){
   const li = criaLi()// chama a função que cria o li
   li.innerHTML = textoInput// insere o texto do input dentro do li
   tarefas.appendChild(li) // coloca o li dentro do ul(tarefas)
   limpaInput()// chama a função que limpa o input
   criaBotaoApagar(li)//chama a função que cria o botao e passa o li como parametro
   salvarTarefas();//chama a função que salva a tarefa
}

//Envento de click
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)// chama a função criaTarefa acima e passa o valor do input como parametro    
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

//cria um botato apagar ao lado de cada tarefa
function criaBotaoApagar(li) {
    li.innerText += '  ';// espaço no botao e o texto
    const botaoApagar = document.createElement('button')// cria o elemento botao
    botaoApagar.innerHTML = 'apagar' // coloca um texto apgar dentro do botão
    //que atributo eu quero criar     nome dele
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)    
}

document.addEventListener('click', function(e){
    const el = e.target

    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')// seleciono todos os li dentro de tarefas('ul')
    const listaDeTarefas= []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '')
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJson= JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}