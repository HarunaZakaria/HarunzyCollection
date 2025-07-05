// import { useState } from 'react';
import data from './data';

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

        <Products />
        <Footer />
        <main>
          <h1>New Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.countInStock}>
                <a href={`/product${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product${product.slug}`}>
                    <p>{product.name}</p>
                  </a>

                  <p>
                    <strong>{product.price} </strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
