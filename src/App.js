import React, { useState, useEffect } from 'react'

export default function App() {

    const [valor, setValor] = useState(100)
    const [valor2, setValor2] = useState(100)

    //O useState altera uma variavel sempre que for chamada, por exemplo por uma função
    //O useEffect é alterado/renderizado uma vez, ou ao referenciar uma variavel e sempre que ela for alterada o useEffect é chamado
    //ou com o segundo parametro vazio indicando a renderização durante a montagem da pagina

    function alterar(){
        setValor(valor + 10)
    }

    function alterar2(){
        setValor2(valor2 + 10)
    }

    //Essa função é executada quando a pagina for renderizada/montada
    useEffect(() => {
        console.log("alterado")
    }, []) 
    //Nesta função só passaremos 1 ou 2 parametros: a função realizando a rotina do bloco
    // e a variavel referenciando a alteração


    //Essa função só é executada quando a variavel referenciada(valor) for alterada
    useEffect(() => {
        console.log("alterado")
    }, [valor]) 


    return (        
        <div>
            <h1>React Hooks - useEffect</h1>
            <hr />
            <h3>Valor: {valor}</h3>
            <h3>Valor 2: {valor2}</h3>
            <button onClick={alterar}>Alterar</button>
            <button onClick={alterar2}>Alterar 2</button>

            
        </div>
        
    )
}