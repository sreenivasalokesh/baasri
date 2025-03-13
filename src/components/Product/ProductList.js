import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import Papa from "papaparse";

const parseDetails = (detailsStr) => {
  try {
    return JSON.parse(detailsStr.replace(/'/g, '"')); // Fix single quotes
  } catch (error) {
    console.error("Error parsing details:", detailsStr, error);
    return {};
  }
};

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const label = searchParams.get("label");

  const [sarees, setSarees] = useState([]);
        useEffect(() => {
          const fetchSarees = async () => {
            try {
              const response = await fetch("/data/sarees.csv"); // Ensure correct path
              const csvText = await response.text();
      
              const result = await new Promise((resolve) => {
                Papa.parse(csvText, {
                  header: true,
                  skipEmptyLines: true,
                  complete: resolve,
                });
              });
      
              const processedData = result.data.map((row) => ({
                ...row,
                labels: row.labels ? row.labels.split(",").map((l) => l.trim()) : [],
                images: row.images ? row.images.split(",").map((img) => img.trim()) : [],
                details: row.details ? parseDetails(row.details) : {},
              }));
      
              
  
              if(processedData){
                  let sareesTemp = [];
                  if(category){
                    sareesTemp = processedData.filter((product) => product.category == category);
                  }else{
                    sareesTemp = processedData.filter((product) => product.labels.includes(label));
                  }
                  
                  setSarees(sareesTemp);                 
              }
            } catch (error) {
              console.error("Error fetching sarees:", error);
            }
          };
      
          fetchSarees();
        }, [])

  console.log("sarees: "+sarees);
  console.log("cat: "+category);
  console.log("label: "+label);

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
