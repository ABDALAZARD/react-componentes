import React, { useReducer } from 'react'

export default function App() {

    //Reducer
    //Essa função cria um objeto chamado state, no qual os valores são mostrados abaixo.
    const [state, dispatch] = useReducer(reducer, {
        valor: 1000,
        mostrar: true
    })

    //função reducer
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENTAR':
                return {
                    valor: state.valor + 1,
                    mostrar: state.mostrar
                }
            case 'VISIBILIDADE':
                return {
                    valor: state.valor,
                    mostrar: !state.mostrar
                }

            default:
                return state
        }
    }

    return (
        <div>
            <h1>React Hooks - useReducer</h1>
            <hr />
            {state.mostrar && <p>Valor: {state.valor}</p>}
            {state.mostrar && <p>Colocar Visível</p>}
            <button onClick={() => { dispatch({ type: 'INCREMENTAR' }) }}>Incrementar</button>
            <button onClick={() => { dispatch({ type: 'VISIBILIDADE' }) }}>Mostrar/Esconder</button>
        </div>
    )
}