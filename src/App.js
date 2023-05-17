import React from 'react';

//Importando bootstrap

//npm install bootstrap
//Adicionar as linhas no index.js
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle'

export default function App() {

    return (
        <div>
            <h2>React - Adicionar o bootstrap ao projeto</h2>
            <hr />
            <a href="#" className='btn btn-primary'>Botão de bootstrap</a>
            <div class="alert alert-success" role="alert">Operação realizada com sucesso!</div>
        </div>
    )
}