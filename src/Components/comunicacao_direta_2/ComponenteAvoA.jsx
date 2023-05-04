import React from "react";
import ComponentePaiA from "./ComponentePaiA";

export default function ComponenteAvoA(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Avô: Moisés </p>
            <ComponentePaiA nome="Vinicius" sobrenome="Abdala"/>
        </div>
    )
}