import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SareeCard from './SareeCard';
import ImageGallery from './ImageGallery';
import { NewsLetter } from './NewsLetter';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const slides = [
  {
    image: "carousal/latest-saree-collection-2.jpg",
    title: "Latest Trending",
    description: "Fresh designs, modern elegance for every occasion.",
    link: "/page1",
  },
  {
    image: "carousal/heritage-saree-colleciton.jpg",
    title: "Timeless Weaves",
    description: "Fresh designs, modern elegance for every occasion.",
    link: "/page2",
  },
  {
    image: "carousal/we-1.jpg",
    title: "Our Craft",
    description: "Quality, creativity, and perfection in weaving.",
    link: "/page3",
  },
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 2-second auto-slide

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
            <a href={slides[currentIndex].link} className="explore">Know more</a>
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
            target="/products" />
          <SareeCard imageName="art-silk-saree-card-1.png"
            title="Art Silk Collection"
            description="This category features sarees crafted from high-quality art silk fabrics, such as Chiffon, Georgette, Crepe, Brasso, and Satin, adorned with intricate zari work. These sarees offer a perfect blend of elegance, affordability, and refined craftsmanship."
            target="/sarees" />

        </div>
      </div>
      <div  id="discover" className="sarees-section-container" >
      <div className='saree-collection'> <p>Discover Baasri</p>  </div>
      </div>
      <ImageGallery />

      {/* <NewsLetter />    */}

      <Footer />
      <FloatingContact  />
    </div>
  );
}

export default LandingPage;