import React from 'react'
import ComponenteUm from './Components/ComponenteUm'
import ComponenteDois from './Components/ComponenteDois'
import ComponenteTres from './Components/ComponenteTres'
import ComponenteQuatro from './Components/ComponenteQuatro'
import ComponenteSeis from './Components/ComponenteSeis'
import ComponenteSete from './Components/ComponenteSete'
import ComponenteOito from './Components/ComponenteOito'
import './App.css'


export default function App() {
    return (
        <div>
            <ComponenteUm />
            <ComponenteDois />
            <ComponenteTres titulo="teste" subtitulo="Texto do componente três" />
            <ComponenteQuatro titulo="Componente Quatro" /> 
            <ComponenteSeis titulo="Componente Seis" />
            <ComponenteSete titulo ="Componente Sete" valor={1}/>
            <ComponenteOito titulo="Componente Oito" valor={20}/>
        </div>
    )
}