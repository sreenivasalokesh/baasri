import React from 'react';
import { Link } from 'react-router-dom';

function Sarees() {
  return (
    <div className="sarees-page">
      <h2>Sarees</h2>
      <div className="cards">
        <Link to="/sarees/silk">
          <div className="card">Silk</div>
        </Link>
        <Link to="/sarees/art-silk">
          <div className="card">Art Silk</div>
        </Link>
      </div>
    </div>
  );
}

export default Sarees;