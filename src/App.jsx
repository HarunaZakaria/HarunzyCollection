import { useState } from 'react'
import Header from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Hello from Harunzy Collection</h1>
      
    </>
  )
}

export default App
