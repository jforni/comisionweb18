import { useState } from 'react'
import ListadoResultados from './components/ListadoResultados';
import './App.css'

function App() {
  const [operaciones, setOperaciones] = useState([]);

  function sumar(e) {
    e.preventDefault();
    const num1 = parseInt(e.target.valor1.value, 10);
    const num2 = parseInt(e.target.valor2.value, 10);
    const suma = num1 + num2;
    const nuevo = {
      resultado: suma,
      valor1: num1,
      valor2: num2
    }

    setOperaciones([nuevo, ...operaciones])
    e.target.valor1.value = '';
    e.target.valor2.value = '';

  }
  return (
    <>
      <form onSubmit={sumar}>
        <p>Ingrese primer valor: <input type="text" name="valor1" /></p>
        <p>Ingrese segundo valor: <input type="text" name="valor2" /></p>
        <input type="submit" value="Sumar" />
      </form>
      <ListadoResultados resultados={operaciones}/>
    </>
  )
}

export default App;