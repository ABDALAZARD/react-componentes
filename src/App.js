import React, { useState, useRef } from 'react';

export default function App() {

    const [texto, setTexto] = useState('')
    const inputRef = useRef()
    const input2Ref = useRef()

    function focus1() {
        // inputRef.current.focus()
        inputRef.current.focus()
    }

    function alterar_texto_2() {
        // inputRef.current.focus()
        input2Ref.current.value = "Vinicius Abdala"
        input2Ref.current.focus()
    }

    return (
        <div>
            <h3>React Hooks - useRef</h3>
            <hr />
            <input ref={inputRef} type='text' value={texto} onChange={evento => setTexto(evento.target.value)} />
            <hr />
            <input type="text" ref={input2Ref} />
            <hr />
            <button onClick={focus1}>Focus 1</button>
            <button onClick={alterar_texto_2}>Alterar o texto do input 2</button>

        </div>
    )
}