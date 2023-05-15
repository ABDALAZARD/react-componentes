import React, { useState } from 'react';

export default function App() {

    const [valor, setValor] = useState(1)

    const multiplicar = () => {
        if (isNaN(valor)) return []
        let produtos = []
        for (let m = 1; m <= 10; m++) {
            produtos.push(`${valor} x ${m} =  ${valor * m}`)
        }
        return produtos
    }

    return (
        <div>
            <h1>React - Tabuada</h1>
            <hr />
            <input type="number" onChange={(e) => { setValor(parseInt(e.target.value)) }} value={valor} />
            {multiplicar().map(item => <p>{item}</p>)}
        </div>
    )
}