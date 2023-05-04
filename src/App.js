import React, { useState } from 'react'

export default function App() {

     const [valor, setValor] = useState(0)

     function decrementar(){
        setValor(valor - 1)  
     }

     function incrementar(){
        setValor(valor + 1)
     }

    return (        
        <div>
            <h1>React Hooks</h1>
            <p>Valor: {valor}</p>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}