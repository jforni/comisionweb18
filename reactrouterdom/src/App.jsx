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
import AdminPage from './pages/AdminPage';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  const [auth, setAuth] = useState(false);

  function logIn() {
    setAuth(true);
  }

  function logOut(){
    setAuth(false);
  }

  return (
    <BrowserRouter>
      <HeaderComponent logIn={logIn} logOut={logOut} auth={auth}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/turnos' element={<TurnosPage/>}/>
        <Route path='/admin' element={
          <ProtectedRoutes auth={auth}>
            <AdminPage/>
          </ProtectedRoutes>
        }/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
