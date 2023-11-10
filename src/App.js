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
      <header className="App-header">
        <h4>Boca de urnas</h4>
        <div className='cajas'>
          <div className='caja'>
            <p>Candidato 1</p>
            <p className='contador'>{contador1}</p>
            <div className='botones'>
              <button onClick={() => restar(contador1, setContador1)}>-</button>
              <button onClick={() => sumar(contador1, setContador1)}>+</button>
            </div>
          </div>
          <div className='caja'>
            <p>Candidato 2</p>
            <p className='contador'>{contador2}</p>
            <div className='botones'>
              <button onClick={() => restar(contador2, setContador2)}>-</button>
              <button onClick={() => sumar(contador2, setContador2)}>+</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
