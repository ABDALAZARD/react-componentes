import React from "react";
import ComponenteFilhoA from "./ComponenteFilhoA";

export default function ComponentePaiA(props) {
    return (
        <div>
            <p >Pai: Claudio {props.sobrenome} </p>
            <ComponenteFilhoA {...props}/>
        </div>
    )
}