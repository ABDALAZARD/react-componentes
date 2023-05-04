import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function ComponenteNove(props) {
    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            
            <CondicaoIf condicao={props.valor === "Vinicius"}>
                <p>Este é o meu nome!</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor === "Ana"}>
                <p>É a minha irmã!</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor !== "Vinicius" && props.valor !== "Ana"}>
                <p>Não reconheço este nome</p>
            </CondicaoIf>
        </div>
    )
}