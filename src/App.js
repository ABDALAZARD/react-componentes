import React, { useState } from 'react';

export default function App() {

    const [escuro, setEscuro] = useState(false)
    return (
        <div style={{
            backgroundColor: escuro ? "black" : "white",
            color: escuro ? "white" : "black",
            padding: 15
        }}>
            <h1>React - Tema Claro / Escuro</h1>
            <hr />
            <button onClick={() => { setEscuro(old => !old) }}>Tema</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada sem volutpat ligula vestibulum, eget placerat turpis gravida. Maecenas id fermentum quam. Cras consequat tristique pharetra. Ut porttitor ullamcorper laoreet. Suspendisse cursus nunc eget justo pulvinar sagittis. Suspendisse magna nulla, interdum non hendrerit in, fringilla sit amet massa. Quisque a lacinia mauris, id ultrices lorem. Quisque eget porttitor tellus, in fermentum ipsum. Praesent sagittis eu tellus dapibus mattis. Pellentesque nec dolor ligula. Vivamus a sem ex. Proin aliquet, urna eget aliquam cursus, justo orci facilisis massa, eu finibus augue lectus quis velit. Nunc imperdiet massa magna, vitae suscipit enim sodales et. Sed ipsum nunc, commodo id convallis sollicitudin, rhoncus eget nibh. Fusce faucibus lectus risus, sit amet lacinia turpis rutrum in. In hac habitasse platea dictumst.</p>
        </div>
    )
}