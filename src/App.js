import React, { useId } from 'react';

export default function App() {

    const id1 = useId()
    const id2 = useId()

    return (
        <div>
            <h1>React - useId</h1>
            <hr />
            <form action="#" method="post">
                <div>
                    <input type="checkbox" name="check_masculino" id={id1} />
                    <label htmlFor={id1}>Texto da checkbox 1</label>
                </div>
                <div>
                    <input type="checkbox" name="check_masculino" id={id2} />
                    <label htmlFor={id2}>Texto da checkbox 2</label>
                </div>
            </form>
        </div>
    )
}