import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Company Logo Footer.png";
import Name from "/Company Name Footer.png";
import FacebookIcon from "../assets/Footer/Facebook Icon.png";
import InstagramIcon from "../assets/Footer/Instagram Icon.png";
import LinkedinIcon from "../assets/Footer/Linkedin Icon.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-up">
          <div className="footer-container-up-left">
            <div className="footer-logo-container">
              <div className="footer-img">
                <img src={Logo} className="footer-logo" />
                <img src={Name} className="footer-name" />
              </div>
              <span>Engineering the Future, Today.</span>
            </div>
            <p>© {currentYear} All rights reserved.</p>
          </div>
          <nav className="footer-container-up-right">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
        <div className="footer-container-down">
          <div className="footer-line"></div>
          <div className="footer-down">
            <p>
              Crafted by{" "}
              <a href="#" target="_blank">
                Koios Studio
              </a>
            </p>
            <div className="footer-social">
              <a href="#" target="_blank">
                <img src={FacebookIcon}></img>
              </a>
              <a href="#" target="_blank">
                <img src={InstagramIcon}></img>
              </a>
              <a href="#" target="_blank">
                <img src={LinkedinIcon}></img>
              </a>
            </div>
            <div className="footer-more-links">
              <Link to="/">Privacy Policy</Link>|
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
