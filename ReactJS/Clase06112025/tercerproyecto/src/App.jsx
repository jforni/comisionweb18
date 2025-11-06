import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import './App.css'
import Header from './components/header';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

function App() {
  const [count, setCount] = useState(0)
  function mostrarMensaje(){
    alert('Probando botón RB');
  }

  return (
    <>
      <Header/>
      <HomePage/>
      {/* <AboutPage/> */}
    </>
  )
}

export default App
