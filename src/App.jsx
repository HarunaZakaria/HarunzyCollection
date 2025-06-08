// import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import './App.css';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Products />
        <Testimonial />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
