import React from "react";
import ComponenteFilho from "./ComponenteFilho";

export default function ComponentePai(props) {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="Administrador">
                Vinicius Abdala
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Secretária">
                Ana Silva
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Operador">
                Carlos Silva
            </ComponenteFilho>
        </div>
    )
}