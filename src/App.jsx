// import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/" element={<Footer />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
