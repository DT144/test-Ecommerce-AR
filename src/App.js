import React from 'react';
import products from './products';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const tvProduct = products.tvs[0];

  return (
    <div className="App">
      <header>
        <h1>Vijay Sales</h1>
      </header>
      <main>
        <ProductDetails product={tvProduct} />
      </main>
    </div>
  );

export default App;