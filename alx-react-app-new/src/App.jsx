import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Hello rasta</h2>
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
