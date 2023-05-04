import React from "react";

export default function ComponenteFilhoA(props) {
    return (
        <div>
            <p>Filho: {props.nome} | Sobrenome do filho: {props.sobrenome}</p>
        </div>
    )
}