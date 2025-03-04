import React from 'react';
import { Link } from 'react-router-dom';
import SareeCard from './SareeCard';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="main-image">
        <img src="main-panel-nalli-1.jpg" alt="Saree Manufacturer Work" />
      </div>
      <div className='saree-collection'> <h1>Saree collection</h1>  </div>
      <div className="sarees-section">
        <SareeCard imageName="silk-saree-card-1.png" 
          title="Silk Collection" 
          description="This category features sarees meticulously crafted using premium silk fabric and intricately woven zari work, showcasing elegance, tradition, and fine craftsmanship." 
          target="/products" />
        <SareeCard imageName="art-silk-saree-card-1.png" 
          title="Art Silk Collection" 
          description="This category features sarees crafted from high-quality art silk fabrics, such as Chiffon, Georgette, Crepe, Brasso, and Satin, adorned with intricate zari work. These sarees offer a perfect blend of elegance, affordability, and refined craftsmanship." 
          target="/sarees" />
        {/* <Link to="/sarees">
          <div className="card">Silk Sarees</div>
        </Link>
        <Link to="/sarees">
          <div className="card">Art Silk Sarees</div>
        </Link> */}
      </div>
      
    </div>
  );
}

export default LandingPage;