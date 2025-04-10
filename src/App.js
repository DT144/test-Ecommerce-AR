// src/App.js
import React, { useState } from "react";
import products from "./products";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const showProducts = (category) => {
    setCurrentCategory(category);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Vijay Sales</h1>
        <nav>
          <button onClick={() => setCurrentCategory(null)}>Home</button>
          <button onClick={() => showProducts("washingMachines")}>
            Washing Machines
          </button>
        </nav>
      </header>
      <main>
        {currentCategory && !selectedProduct && (
          <ProductList
            products={products[currentCategory]}
            onSelect={setSelectedProduct}
          />
        )}
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </main>
    </div>
  );
}

export default App;
