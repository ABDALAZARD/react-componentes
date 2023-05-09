import React, { useState } from 'react'

export default function App() {

    const [valor, setValor] = useState(() => { return 0 });

    function diminuir() {
        setValor(valor_antigo => valor_antigo - 1);
    }

    function aumentar() {
        setValor(valor_antigo => valor_antigo + 1);

    }

    return (        
        <div>
            <h1>React Hooks - useState</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>Valor: {valor}</span>
            <button onClick={aumentar}>Aumentar</button>

            <button onClick={() => {
                setValor(va => va + 100)
            }}>Aumentar v2</button>

            
        </div>
        
    )
}