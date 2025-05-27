// import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Products from './Components/Products';
import './App.css'

function App() {

  return (
    <>
      
      <Router>
          <Header />
          <Products />
          <Footer /> 
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>     
    </>
  );
}

export default App
