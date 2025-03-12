import React from "react";
import "./about.css"; // Import the CSS file

export default function AboutPage() {
  const sections = [
    {
      title: "Our Values",
      text: "We aim to provide the best services with top-notch quality and customer satisfaction.",
      image: "/gallery/vision.jpg",
      id: "goal"
    },
    {
      title: "Our Services",
      text: "Integrity, quality, and commitment define everything we do.",
      image: "/gallery/services-1.jpg",
      id: "services"
    },
    {
      title: "About us",
      text: "We envision a future where innovation and excellence drive our industry forward.",
      image: "/gallery/about-1.jpg",
      id: "about"
    },
    {
      title: "Testimonials",
      text: "Our story is one of passion, persistence, and dedication to excellence.",
      image: "/gallery/about-2.jpg",
      id: "testimonials"
    },
  ];

  return (
    <div className="about-container">
      {sections.map((section, index) => (
        <div
          id = {section.id}
          key={index}
          className={`about-section ${index % 2 === 0 ? "row-normal" : "row-reverse"}`}
        >
          {/* Image */}
          <div className="about-image">
            <img src={section.image} alt={section.title} />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
