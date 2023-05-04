import React from 'react'
import ComponenteUm from './Components/ComponenteUm'
import ComponenteDois from './Components/ComponenteDois'
import ComponenteTres from './Components/ComponenteTres'
import ComponenteQuatro from './Components/ComponenteQuatro'
import ComponenteSeis from './Components/ComponenteSeis'
import ComponenteSete from './Components/ComponenteSete'
import ComponenteOito from './Components/ComponenteOito'
import ComponenteNove from './Components/ComponenteNove'
import ComponenteDez from './Components/ComponenteDez'
import ComponentePai from './Components/comunicacao_direta/ComponentePai'
import ComponenteMae from './Components/comunicacao_indireta/ComponenteMae'
import ComponenteA from './Components/comunicacao_indireta_2/ComponenteA'
import ComponenteAvoA from './Components/comunicacao_direta_2/ComponenteAvoA'
import './App.css'

export default function App() {
    return (
        <div>
            <ComponenteAvoA titulo="Comunicação direta v2"/>

            <ComponenteA titulo="Comunicacao indireta v2" />

            <ComponenteMae titulo="Comunicação Indireta" />

            <ComponentePai titulo="Comunicação Direta" />

            <ComponenteDez titulo="Componente Dez" corTexto="green" />

            <ComponenteNove titulo="Componente Nove" valor="Carlos" />

            <ComponenteOito titulo="Componente Oito" valor={20}/>
            
            <ComponenteSete titulo ="Componente Sete" valor={1}/>

            <ComponenteSeis titulo="Componente Seis" />

            <ComponenteQuatro titulo="Componente Quatro" /> 

            <ComponenteTres titulo="teste" subtitulo="Texto do componente três" />

            <ComponenteDois />

            <ComponenteUm />

        </div>
    )
}