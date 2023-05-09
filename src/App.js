import React, { useState, useRef, useEffect } from 'react';

export default function App() {
    const [texto, setTexto] = useState('')
    const anterior = useRef('')

    useEffect(() => {
        anterior.current = texto
    }, [texto])

    function executar() {
    }

    return (
        <div>
            <h3>React Hooks - useRef</h3>
            <hr />
            <input type='text' onChange={e => { setTexto(e.target.value) }} />
            <br />
            <hr />
            <button onClick={executar}>Executar</button>
            <p>Texto: {texto} (anteriormente) {anterior.current}</p>
        </div >
    )
}