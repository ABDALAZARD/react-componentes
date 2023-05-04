import React from "react";

export default function ComponenteDez(props){
        return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <p style={{color: props.corTexto}} >Texto do parágrafo</p>
        </div>
    )
}