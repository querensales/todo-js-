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
    tarefa.appendChild(BotaoDeletar())
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

const BotaoDeletar = () => {
    const botao = document.createElement('button')
    botao.classList.add('delete-button')

    // Aqui vai o ícone de lixeira do Font Awesome
    botao.innerHTML = '<i class="fas fa-trash-alt"></i>'

    botao.addEventListener('click', (evento) => {
        const botaoClicado = evento.target.closest('button')
        const tarefa = botaoClicado.parentElement
        tarefa.remove()
    })

    return botao
}

