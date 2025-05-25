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
      <h1>Hello from Harunzy Collection</h1>
      
    </>
  )
}

export default App
