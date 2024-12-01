import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/Home/Home Banner Img.png";

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-container">
        <img src={BannerImg} alt="Fourstor Home Banner Image" />
        <h1>Engineering the Future, Today!</h1>
        <p>
          Fourstor Solutions Pvt. Ltd., established in 2020, delivers innovative
          industrial solutions in 3D Printing, Pneumatics, Mechatronics,
          Renewable Energy, and more to drive global efficiency and excellence.
        </p>
        <Link to="/about" className="transparent-button">
          Explore Now
        </Link>
      </div>
    </div>
  );
}

export default Banner;
