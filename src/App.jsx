// import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Products from './Components/Products';
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
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
