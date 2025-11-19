/* import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    document.title = texto
  }, [texto])

  function cambiar(e){
    setTexto(e.target.value);
  }

  return (
    <>
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>
    </>
  )
}

export default App */

import { useState } from "react";
import CoordenadaFlecha from "./components/coordenadaFlecha";

function App() {

  const [visible, setVisible] = useState(true);

  function ocultar() {
    setVisible(false);
  }

  function mostrar() {
    setVisible(true);
  }

  return(
    <div>
      {visible ? <CoordenadaFlecha/> : <p>Se ocultó la coordenada</p>}
      <button onClick={ocultar}>Ocultar</button>
      <button onClick={mostrar}>Mostrar</button>
    </div>
  )
}

export default App;