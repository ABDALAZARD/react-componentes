import React from "react";
import ComponenteFilha from "./ComponenteFilha";


export default function ComponenteMae(props) {

    function clicou() {
        console.log("botão da filha foi clicado!")
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <ComponenteFilha titulo="Componente Filha" click={clicou}></ComponenteFilha>
        </div>
    )
}