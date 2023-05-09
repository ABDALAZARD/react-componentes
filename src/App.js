import React, { useState, useEffect } from 'react';
import './App.css'
import User from './components/Users'

export default function App() {

    //State
    const [users, setUsers] = useState([])

    //Effect
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json.users)
                setUsers(json.users)

            })
    }, [])

    return (
        <div>
            <h3>Olá React!!!</h3>
            <hr />
            {(users.map(user => {
                return <User key={user.id} usuario={user} />
            }))}
        </div>
    )
}