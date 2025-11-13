import { useState } from 'react'
import './App.css'

/*
function App() {
  function GenerarAleatorio() {
    const num = Math.trunc(Math.random() * 100);
    setNumero(num);
  }

  const [numero, setNumero] = useState(0);

  return (
    <>
      <p>Número aleatorio: {numero}</p>
      <button onClick={GenerarAleatorio}>Generar número aleatorio</button>
    </>
  )
}

export default App */



export default function App() {
  function GenerarAleatorios() {
    const numerosAleatorios = new Array(6);
    for (let i = 0; i < numerosAleatorios.length; i++) {
      numerosAleatorios[i] = Math.trunc(Math.random() * 47)      
    }
    setNumeros(numerosAleatorios)
  }

  const [numeros, setNumeros] = useState([0,0,0,0,0,0]);

  return(
    <div>
      <p>Números aleatorios: </p>
      {numeros.map(num => (<p>{num}</p>))}
      <button onClick={GenerarAleatorios}>Generar números aleatorios</button>
    </div>
  )
}
