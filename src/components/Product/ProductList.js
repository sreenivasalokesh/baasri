import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const products = [
  { id: 1, name: "Saree A", code: "SR001", image: "/silk/87654321/main.jpg" },
  { id: 2, name: "Saree B", code: "SR002", image: "/silk/87654322/main.jpg" },
  { id: 1, name: "Saree A", code: "SR001", image: "/silk/87654321/main.jpg" },
  { id: 2, name: "Saree B", code: "SR002", image: "/silk/87654322/main.jpg" },
  { id: 1, name: "Saree A", code: "SR001", image: "/silk/87654321/main.jpg" },
  { id: 2, name: "Saree B", code: "SR002", image: "/silk/87654322/main.jpg" },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-code">Code: {product.code}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
