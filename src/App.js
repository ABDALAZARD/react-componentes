import React, { useState, useEffect } from 'react'

export default function App() {

    const clientes = ["João", "Ana", "Carlos"]
    const produtos = ['Pão', 'Manteiga', 'Leite']
    const vendas = ['1 x Pão (João)', '2 x Manteiga Ana', '3 x Leite (Carlos)']

    const [info, setInfo] = useState("clientes")
    const [valor, setValor] = useState(100)

    useEffect(() => {
        console.clear()
        // eslint-disable-next-line default-case
        switch (info) {
            case 'clientes':
                console.table(clientes)
                break;
            case 'produtos':
                console.table(produtos)
                break;
            case 'vendas':
                console.table(vendas)
                break;
        }
    }, [info])

    useEffect(() => {
        console.log('TESTE')
    }, [valor])


    return (
        <div>
            <h1>React Hooks - useEffect</h1>
            <hr />

            <button onClick={() => setInfo('clientes')}>Clientes</button>
            <button onClick={() => setInfo('produtos')}>Produtos</button>
            <button onClick={() => setInfo('vendas')}>Vendas</button>

            <h3>{info}</h3>
            <h2>Valor: {valor}</h2>

            <button onClick={() => { setValor(valor + 10) }}>Aumentar</button>

        </div>

    )
}