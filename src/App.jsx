import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />      
    </>
  )
}

export default App
