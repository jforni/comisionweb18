import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoutesAdmin from './routes/ProtectedRoutesAdmin';

function App() {
  const [authAdmin, setAuthAdmin] = useState(false);

  function logInAdmin() {
    setAuthAdmin(true)
  }

  function logOutAdmin() {
    setAuthAdmin(false)
  }

  return (
    <BrowserRouter>
      <HeaderComponent logInAdmin={logInAdmin} logOutAdmin={logOutAdmin}  authAdmin={authAdmin}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/admin' element={
          <ProtectedRoutesAdmin authAdmin={authAdmin}>
            <AdminPage/>
          </ProtectedRoutesAdmin>
        }/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    
  )
}

export default App
