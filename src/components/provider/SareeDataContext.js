import React, { createContext, useEffect, useState } from "react";
import Papa from "papaparse";

// Create Context
export const SareeDataContext = createContext();

export const SareeDataProvider = ({ children }) => {
  const [sarees, setSarees] = useState([]);

  useEffect(() => {
    fetch("/data/sarees.csv") // Ensure the correct path
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // First row as keys
          skipEmptyLines: true,
          complete: (result) => {
            const processedData = result.data.map((row) => ({
              ...row,
              labels: row.labels ? row.labels.split(",").map((l) => l.trim()) : [],
              images: row.images ? row.images.split(",").map((img) => img.trim()) : [],
              details: row.details ? parseDetails(row.details) : {},
            }));

            console.log("sd: "+processedData);
            setSarees(processedData);
          },
        });
      });
  }, []);

  // Function to parse details JSON safely
  const parseDetails = (detailsStr) => {
    try {
      return JSON.parse(detailsStr.replace(/'/g, '"')); // Fix single quotes
    } catch (error) {
      console.error("Error parsing details:", detailsStr, error);
      return {};
    }
  };

  return (
    <SareeDataContext.Provider value={{ sarees }}>
      {children}
    </SareeDataContext.Provider>
  );
};
