import { useEffect, useState } from 'react'
import './App.css'
import CardsPhotos from './components/cardsPhotos';

function App() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => { return response.json()})
      .then((usuariosApi) => {setUsuarios(usuariosApi)})
      .catch((error) => {console.log(error)})
  }, []);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Username</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => {
            return (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.address.street}{usuario.address.suite}</td>
                <td>{usuario.address.city}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <CardsPhotos/>
    </>
  )
}

export default App
