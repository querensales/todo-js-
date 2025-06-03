const criarTarefa = (evento) => {
    evento.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    list.appendChild(tarefa)

    input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa)

const BotaoConcluir = () => {
    const BotaoConcluir = document.createElement('button')
    BotaoConcluir.classList.add('check-button')
    BotaoConcluir.innerText = 'Concluir'
    BotaoConcluir.addEventListener('click', concluirTarefa)

    return BotaoConcluir
}

const concluirTarefa = (evento) => {
    const BotaoConcluir = evento.target
    const tarefaCompleta = BotaoConcluir.parentElement
    tarefaCompleta.classList.toggle('done')
}