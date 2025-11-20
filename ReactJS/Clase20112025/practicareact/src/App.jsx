import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import HomePage from './pages/homePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <HomePage/>
      <FooterComponent/>
    </>
  )
}

export default App
