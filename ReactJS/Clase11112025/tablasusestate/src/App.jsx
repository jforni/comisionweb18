import { useState } from 'react';
import './App.css';

/* function App() {
  function EliminarUltimaFila(){
    if(articulos.length > 0){
      const temp = Array.from(articulos);
      temp.pop();
      setArticulos(temp);
    }
  }

  const [articulos, setArticulos] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.52
    }, 
    {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 21
    }, 
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.20
    }, 
    {
      codigo: 4,
      descripcion: 'lechuga',
      precio: 20
    },
    {
      codigo: 5,
      descripcion: 'tomate',
      precio: 45
    }
  ])

  return (
    <>
      <table border='1'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return(
              <tr>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={EliminarUltimaFila}>Eliminar última fila</button>
    </>
  )
}

export default App */


function App() {
  function BorrarElemento(cod){
    const temp = articulos.filter((art) => art.codigo !== cod);
    setArticulos(temp)
  }

  const [articulos, setArticulos] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.52
    }, 
    {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 21
    }, 
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.20
    }, 
    {
      codigo: 4,
      descripcion: 'lechuga',
      precio: 20
    },
    {
      codigo: 5,
      descripcion: 'tomate',
      precio: 45
    }, 
    {
      codigo: 6,
      descripcion: 'frutilla',
      precio: 100
    }
  ])

  return (
    <>
      <table border='1'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Borrar?</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return(
              <tr>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
                <td><button onClick={() => BorrarElemento(art.codigo)}>Borrar</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </>
  )
}

export default App