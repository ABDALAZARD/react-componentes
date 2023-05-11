import React, { useState, useEffect, useMemo } from 'react'

export default function App() {
    const [valor, setValor] = useState(() => { return 0 })
    const [numero, setNumero] = useState(() => { return 1000 })

    // const valorCalculado = funcaoDemorada(valor)

    //Renderiza a cada interação da pagina
    useEffect(() => {
        console.log('render')
    })

    //Essa função soma a const numero, e por isso não reage a demora
    function incrementar1() {
        setNumero((oldNumero) => oldNumero + 1)
    }

    //Essa função soma a const valor referenciada na função useMemo(), e por isso reage a demora
    function incrementar2() {
        setValor((oldValor) => oldValor + 1)
    }

    //Essa função executa uma demora de aproximadamente 1 segundo
    function funcaoDemorada(num) {

        for (let i = 0; i < 1000000000; i++) { }
        return num * 2
    }

    //Essa função reage a cada alteração da const valor, ou seja, sempre que o botao "incrementar2"
    //for clicado, o useMemo será executado já vinculando a demora a esta variavel
    const valorCalculado = useMemo(() => {
        return funcaoDemorada(valor)
    }, [valor])

    return (
        <div>
            <h1>React Hooks - useMemo</h1>
            <p>Valor: {valor}</p>
            <p>Numero: {numero}</p>
            <p>Valor Calculado: {valorCalculado}</p>
            <button onClick={incrementar1}>Incrementar</button>
            <button onClick={incrementar2}>Incrementar 2</button>
        </div>
    )
}