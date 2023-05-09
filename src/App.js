import React, { useState, useEffect, useRef } from 'react';

export default function App() {

    const [texto, setTexto] = useState('')
    const total = useRef(1)

    useEffect(() => {
        total.current++
    })

    return (
        <div>
            <h3>React Hooks - useRef</h3>
            <hr />
            <input type='text' value={texto} onChange={evento => setTexto(evento.target.value)} />
            <hr />
            <p>O texto é: <strong>{texto}</strong></p>
            <hr />
            <p>Total: {total.current}</p>
        </div>
    )
}