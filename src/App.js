import React from 'react';
import { Componente1, Componente2, Componente3 } from './componentes.jsx'
export default function App() {

    return (
        <div>
            <h2>React - Multiplos componentes no mesmo arquivo</h2>
            <hr />
            <Componente1 />
            <Componente2 />
            <Componente3 />
        </div>
    )
}