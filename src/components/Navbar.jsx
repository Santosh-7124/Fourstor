import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

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
        <img
          src={Menu}
          alt="Fourstor Mobile navbar open"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          alt="Fourstor Mobile navbar close"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        />
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <nav>
          <Link to="/about" onClick={toggleMobileNav}>
            About Us
          </Link>
          <Link to="/services" onClick={toggleMobileNav}>
            Our Services
          </Link>
        </nav>
        <Link className="blue-button" to="/contact">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
