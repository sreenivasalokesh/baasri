import React, { useEffect, useState } from "react";

const galley = [
    {
        image: "/gallery/vision.jpg",
        title: "Our goal",
    },
    {
        image: "/gallery/about-1.jpg",
        title: "About us",
    },
    {
        image: "/gallery/services-1.jpg",
        title: "Our services",
    },
    {
        image: "/gallery/about-2.jpg",
        title: "Testimonials",
    }
];

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextSlide = () => {
    
    setHoveredIndex((prev) => {if(prev < galley.length - 1) return prev + 1; else return 0} );
    //alert("nextSlide"+hoveredIndex);
  };

  useEffect(() => {
    setHoveredIndex(0);
  }, []);

  const prevSlide = () => {
    setHoveredIndex((prev) => {if(prev > 0) return prev - 1; else return galley.length - 1} );
  };

  return (
    <div className="gallery">
      {galley.map((src, index) => (
        <div
          key={index}
          className={`image-container ${hoveredIndex === index ? "expanded" : hoveredIndex !== null ? "collapsed" : ""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ backgroundImage: `url(${src.image})` }}
        >
            <div className="caption">{src.title}</div>

        </div>

    
      ))}

      <button className="image-prev" onClick={prevSlide}>&#10094;</button>
      <button className="image-next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageGallery;
