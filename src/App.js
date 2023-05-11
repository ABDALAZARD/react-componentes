import React, { useState, useRef } from 'react';

export default function App() {

    //STATE
    //A primeira const gera uma lista de arrays vazia
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    //const e método usado para criar nova tarefa 
    const [tarefa, setTarefa] = useState(() => { return '' })

    //REF
    //prepara variavel para um id diferente a cada tarefa
    const idTarefa = useRef(0)
    //variavel usada para focar no input
    const inputRef = useRef()

    function adicionarTarefa() {
        //Verifica e adiciona as antigas tarefas a nova lista e adiciona uma nova tarefa com um novo id
        setListaTarefas(old => { return [...old, { id: idTarefa.current, texto: tarefa }] })
        //Toda vez que uma nova tarefa for adicionada, o id sofrerá uma soma, gerando um novo id diferente
        idTarefa.current = idTarefa.current + 1
        //Limpa o input de tarefas
        setTarefa('')
        //Sempre que o botão "adicionar" for clicado, o input referenciado será focado para adicionar outras
        inputRef.current.focus()
    }

    function limparTarefas() {
        //Reseta a lista de tarefas
        setListaTarefas([])
        //Reseta os ids da lista de tarefas
        idTarefa.current = 0
    }

    function removerTarefa(id) {
        //lista e filtra e separa as tarefas que possuem o id diferente do parametor
        const tmp = listaTarefas.filter(tarefa => tarefa.id !== id)
        //Atualiza nova lista de tarefas sem a tarefa do id excluido acima
        setListaTarefas(tmp)
    }

    return (
        <div>
            <h3>Gestor de Tarefas</h3>
            <hr />
            <input ref={inputRef} type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value) }} />
            <hr />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas: </p>
            { //Lista e mapeia todas as tarefas, referenciando um id para cada tarefa, diferenciando uma das outras
                // Cria também um botão para remover uma tarefa especifica
                listaTarefas.map((tarefa) => {
                    return <p key={tarefa.id}>{tarefa.texto} <span onClick={() => { removerTarefa(tarefa.id) }}>[REMOVER]</span></p>
                })}

        </div>
    )
}