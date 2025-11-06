import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from './pages/aboutPage'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      <AboutPage/>
    </>
  )
}

export default App
