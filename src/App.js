import React, { useState } from 'react'

export default function App() {

    // const [player, setPlayer] = useState({
    //     name: "Vinicius",
    //     score: 0
    // })

    const [playerName, setPlayerName] = useState(() => {
        return "Vinicius";
    })

    const [playerScore, setPlayerScore] = useState(() => {
        return 0;
    })

    function alterar() {
        setPlayerName(name_anterior => {
            return "Vinicius v2"
        })

        setPlayerScore(sc_anterior => {
            return sc_anterior + 10
        })

    }

    return (        
        <div>
            <h1>React Hooks - useState</h1>
            <hr />
            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>
            <button onClick={alterar}>Alterar a pontuação</button>
        </div>
        
    )
}