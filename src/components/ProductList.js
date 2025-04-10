// src/components/ProductList.js
import React from "react";

function ProductList({ products, onSelect }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => onSelect(product)}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
