import React, { useRef, useState, useEffect } from "react";
import "@google/model-viewer";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  const modelViewerContainer = useRef(null);
  const [show3D, setShow3D] = useState(false);
  const [showAR, setShowAR] = useState(false);

  const view3D = () => {
    setShow3D(true);
    setShowAR(false); // Ensure AR is hidden when showing 3D
  };

  const viewAR = () => {
    setShow3D(true);
    setShowAR(true); // Show AR mode
  };

  useEffect(() => {
    if (show3D && modelViewerContainer.current) {
      if (showAR) {
        modelViewerContainer.current.innerHTML = `<model-viewer src="${product.model}" ar ar-scale="auto" camera-controls style="width: 100%; height: 500px; margin: auto;"></model-viewer>`;
      } else {
        modelViewerContainer.current.innerHTML = `<model-viewer src="${product.model}" camera-controls style="width: 100%; height: 500px; margin: auto;"></model-viewer>`;
      }
    }
  }, [show3D, showAR, product.model]);

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
          <button onClick={view3D}>View in 3D</button>
          <button onClick={viewAR}>View in your space (AR)</button>
        </div>
        {show3D && (
          <div ref={modelViewerContainer} id="model-viewer-container"></div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
