import React from "react";
import ComponenteCinco from './ComponenteCinco'

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <ComponenteCinco texto="propriedade do componente cinco" />
        </div>
    )
}

export default ComponenteQuatro