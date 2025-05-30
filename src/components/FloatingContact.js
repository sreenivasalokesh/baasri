import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";


const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {

  // }, [isContactUsOpen]);

  return (
    <div className="floating-contact">
      {/* Floating Icon Button */}
      <button className="contact-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : 
        <div>       
          <div className="ripple"></div>
          <div className="ripple"></div>
          <div className="ripple"></div>
          <FaWhatsapp />
        </div>}
      </button>

      {/* Contact Tray */}
      {isOpen && (
        <div className="contact-tray">
          <div className="contact-option contact-us-icon" style={{ fontWeight: "bold",  color: 'white' , backgroundColor: '#333' }}>
            <FaSquarePhoneFlip/>
            Contact Us
          </div>   
          
          <a href="tel:+1234567890" className="contact-option">
            <FaPhone /> Call Us +123 456 7890
          </a>
          <a href="mailto:example@email.com" className="contact-option">
            <FaEnvelope /> Write to us hello@bhaskarasilks.com
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-option">
            <FaWhatsapp /> WhatsApp us +123 456 7890
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;
