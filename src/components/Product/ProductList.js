import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { SareeDataContext } from "../provider/SareeDataContext";

const ProductList = () => {
  const { sarees } = useContext(SareeDataContext);

  console.log("sa: "+JSON.stringify(sarees));

  return (
    <div className="product-grid">
      {sarees.map((saree) => (
        <Link key={saree.id} to={`/product/${saree.sku}`} className="product-card">
          <img src={"/sarees/"+saree.sku+"/"+saree.images[0]} alt={saree.title} className="product-image" />
          <h2 className="product-name">{saree.title}</h2>
          <p className="product-code">Code: {saree.sku}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
