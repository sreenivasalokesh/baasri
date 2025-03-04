import React from 'react';
import { useParams } from 'react-router-dom';

function SareeDetails() {
  const { type } = useParams();

  return (
    <div className="saree-details-page">
      <h2>{type} Sarees</h2>
      {/* Add your saree cards here */}
      <div className="cards">
        {/* Example of a card */}
        <div className="card">Saree 1</div>
        <div className="card">Saree 2</div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default SareeDetails;