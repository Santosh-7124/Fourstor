import React from "react";
import Image from "../../assets/Home/Precision Innovation Progress.png";
import MobileImage from "../../assets/Home/Precision Innovation Progress Mobile.png";

function Text() {
  return (
    <div className="home-text">
      <img
        src={Image}
        className="desktop"
        alt="Fourstor Precision Innovation Progres"
      />
      <img
        src={MobileImage}
        className="mobile"
        alt="Fourstor Precision Innovation Progres"
      />
    </div>
  );
}

export default Text;
