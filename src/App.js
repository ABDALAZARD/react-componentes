import React, { useState } from 'react';
import Nomes from './Components/Nomes'

export default function App() {

    const [nome, setNome] = useState("")
    const [nomes, setNomes] = useState([])

    function guardarNome() {
        setNomes(tmp => [...tmp, nome])
    }

    return (
        <div>
            <h3>React Unique Id</h3>
            <hr />
            <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
            <button onClick={guardarNome}>Guardar Nome</button>
            <hr />
            <Nomes nomes={nomes} />
        </div>
    )
}