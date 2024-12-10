import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header>
      <Link to="/" className="navbar-img">
        <img src={Logo} className="navbar-logo" />
        <img src={Name} className="navbar-name" />
      </Link>
      <nav className="desktop">
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Services</Link>
      </nav>
      <Link className="blue-button desktop" to="/contact">
        Contact Us
      </Link>

      <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        >
          <path
            d="M8 8H24M8 16H24M8 24H24"
            stroke="#111111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        >
          <path
            d="M1 1L16.5 17M1 17L17 1"
            stroke="#111111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}

export default Navbar;
