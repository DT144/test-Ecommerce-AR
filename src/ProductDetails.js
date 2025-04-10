// src/components/ProductDetails.js
import React from "react";
import "@google/model-viewer";
import "./ProductDetails.css"; // Create this CSS file

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <h3>Features</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3>Specifications</h3>
        <table>
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="view-buttons">
          <button
            onClick={() => {
              let detailsContent = document.getElementById("details-content");
              detailsContent.innerHTML += `<model-viewer src="${product.model}" ar ar-scale="auto" camera-controls style="width: 80%; height: 500px; margin: auto;"></model-viewer>`;
            }}
          >
            View in your space (AR)
          </button>
          <button
            onClick={() => {
              let detailsContent = document.getElementById("details-content");
              detailsContent.innerHTML += `<model-viewer src="${product.model}" ar-scale="auto" auto-rotate camera-controls style="width: 80%; height: 500px; margin: auto;"></model-viewer>`;
            }}
          >
            View in 3D
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
