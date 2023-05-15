import React, { useState, useCallback } from 'react';
import Lista from './Lista'

export default function App() {

    const [numero, setNumero] = useState(5)
    const [temaEscuro, setTemaEscuro] = useState(false)

    //Aumenta performace definindo que a função resultados
    const resultados = useCallback(() => {
        return [numero * 2, numero * 3, numero * 4]
    }, [numero])

    //tema do app
    const tema = {
        backgroundColor: temaEscuro ? "black" : "white",
        color: temaEscuro ? "white" : "black",
        height: "100vh"
    }

    return (
        <div style={tema}>
            <h1>React - useCallBack</h1>
            <hr />
            <button onClick={() => setTemaEscuro(!temaEscuro)}>Alterar Tema</button>
            <p>Número: {numero}</p>
            <button onClick={() => setNumero(oldNumero => oldNumero + 1)}>Incrementar</button>
            <hr />
            <Lista resultados={resultados} />
        </div>
    )
}