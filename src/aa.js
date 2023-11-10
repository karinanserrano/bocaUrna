import React, { useState } from 'react';
import './App.css';

function App() {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const sumar = (contador, setContador) => {
        setContador(contador + 1);
    };

    const restar = (contador, setContador) => {
        setContador(contador - 1);
    };

    return (
        <div className="App">
            <div className="cuadrado">
                <h2>Contador 1</h2>
                <p>{contador1}</p>
                <button onClick={() => sumar(contador1, setContador1)}>+</button>
                <button onClick={() => restar(contador1, setContador1)}>-</button>
            </div>
            <div className="cuadrado">
                <h2>Contador 2</h2>
                <p>{contador2}</p>
                <button onClick={() => sumar(contador2, setContador2)}>+</button>
                <button onClick={() => restar(contador2, setContador2)}>-</button>
            </div>
        </div>
    );
}

export default App;
