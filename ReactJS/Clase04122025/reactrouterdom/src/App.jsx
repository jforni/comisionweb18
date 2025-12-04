import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPAge';
import TurnosPage from './pages/TurnosPage';
import ErrorPage from './pages/ErrorPage';
import HeaderComponent from './components/HeaderComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/turnos' element={<TurnosPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
