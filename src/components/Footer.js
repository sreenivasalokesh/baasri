import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";



const Footer = () => {
  return (
    <footer id ="contact-us" className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Baasri</h2>
          <p><span className="footer-left-item">GST</span> 1234ABC87820UH1</p>
          <p><span className="footer-left-item"><FaPhone /></span> +123 456 7890</p>
          <p><span className="footer-left-item"><MdOutlineEmail /></span><a href="mailto:abc.com"></a>contactus@baasri.com</p>
          <p><span className="footer-left-item"><FaMapLocationDot /></span>Bengaluru Rural</p>
        </div>
        <div className="footer-center">
          <div className="footer-center-top">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>

          </div>
          <div className="footer-center-bottom">
            <p>&copy; Copyright 2025 Baasri All rights reserved.</p>
          </div>
        </div>
        <div className="footer-right">
          <p>Join our Newsletter</p>

          <div className="input-group">
            <div className="email" contentEditable={true}></div>
            <div className="button">Subscribe</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;