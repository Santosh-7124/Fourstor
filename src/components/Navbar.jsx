import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";

function Navbar() {
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
      <Link className="blue-button">Contact Us</Link>
    </header>
  );
}

export default Navbar;
