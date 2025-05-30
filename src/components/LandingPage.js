import React, { useEffect, useState } from 'react';
import SareeCard from './SareeCard';
import ImageGallery from './ImageGallery';

const slides = [
  {
    image: "carousal/latest-saree-collection-2.jpg",
    title: "Latest Trending",
    description: "Fresh designs, modern elegance for every occasion.",
    link: "/products?label=latest",
  },
  {
    image: "carousal/heritage-saree-colleciton.jpg",
    title: "Timeless Weaves",
    description: "Fresh designs, modern elegance for every occasion.",
    link: "/products?label=heritage",
  },
  {
    image: "carousal/we-1.jpg",
    title: "Our Craft",
    description: "Quality, creativity, and perfection in weaving.",
    link: "/about/#services",
  },
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 2-second auto-slide

    return () => clearInterval(interval);
  }, [currentIndex]);

  

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="landing-page">
      {/* <div className="main-image">
        <img src="main-panel-nalli-1.jpg" alt="Saree Manufacturer Work" />
      </div> */}
      <div className="carousel-container">
        <div className="carousel">
          {/* Image Section (70% on larger screens) */}
          <div className="carousel-image">
            <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
          </div>

          {/* Text Section (30% on larger screens, below image on small screens) */}
          <div className="carousel-text">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <hr className="grey-divider"></hr>
            <a href={slides[currentIndex].link} className="explore">View more</a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>

        {/* Progress Indicator */}
        <div className="indicator">
          {slides.map((_, index) => (
            <div key={index} className={`dot ${currentIndex === index ? "active" : ""}`}></div>
          ))}
        </div>
      </div>
      <div id="sarees-collection" className="sarees-section-container">
        <div className='saree-collection'> <p>Saree collection</p>  </div>
        <div className="sarees-section">
          <SareeCard imageName="silk-saree-card-1.png"
            title="Silk Collection"
            description="This category features sarees meticulously crafted using premium silk fabric and intricately woven zari work, showcasing elegance, tradition, and fine craftsmanship."
            target="/products?category=silk" />
          <SareeCard imageName="art-silk-saree-card-1.png"
            title="Art Silk Collection"
            description="This category features sarees crafted from high-quality art silk fabrics, such as Chiffon, Georgette, Crepe, Brasso, and Satin, adorned with intricate zari work. These sarees offer a perfect blend of elegance, affordability, and refined craftsmanship."
            target="/products?category=art-silk" />

        </div>
      </div>
      <div  id="discover" className="sarees-section-container" >
      <div className='saree-collection'> <p>Discover Bhasjara Silks</p>  </div>
      </div>
      <ImageGallery />

      {/* <NewsLetter />    */}

      
    </div>
  );
}

export default LandingPage;