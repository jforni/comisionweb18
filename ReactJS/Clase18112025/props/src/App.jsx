/* import Dado from './components/dado';
import './App.css'

function App() {
  const valor1 = Math.trunc(Math.random()*6)+1;
  const valor2 = Math.trunc(Math.random()*6)+1;
  const valor3 = Math.trunc(Math.random()*6)+1;
  const valor4 = Math.trunc(Math.random()*6)+1;

  return (
    <>
      <Dado numero={valor1}/>
      <Dado numero={valor2}/>
      <Dado numero={valor3}/>
      <Dado numero={valor4}/>
    </>
  )
}

export default App */

import { useState } from "react";
import Dado from "./components/dado";

function App() {

  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  function tirarDado() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
    setNumero4(generarValor())
    setNumero5(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())
  const [numero4, setNumero4] = useState(generarValor())
  const [numero5, setNumero5] = useState(generarValor())

  return(
    <div>
      <Dado numero={numero1}/>
      <Dado numero={numero2}/>
      <Dado numero={numero3}/>
      <Dado numero={numero4}/>
      <Dado numero={numero5}/>
      <button onClick={tirarDado}>Tirar</button>
    </div>
  )
}

export default App;
