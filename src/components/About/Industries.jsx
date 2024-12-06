import React from "react";
import GeneralEngineering from "../../assets/Home/Features/Fourstor General Engineering.png";
import Automotive from "../../assets/Home/Features/Fourstor Automotive.png";
import Aerospace from "../../assets/Home/Features/Fourstor Aerospace.png";
import RenewableEnergy from "../../assets/Home/Features/Fourstor Renewable Energy.png";

function Industries() {
  return (
    <div className="home-section">
      <div className="home-section-heading">
        <h2>
          <span> Industries </span>
          We Serve
        </h2>
        <p>
          Delivering tailored industrial solutions with innovation, expertise,
          and a commitment to excellence
        </p>
      </div>
      <div className="industries-container">
        <div className="home-features-card">
          <img src={Automotive} />
          <p>Automotive</p>
        </div>
        <div className="home-features-card">
          <img src={GeneralEngineering} />
          <p>General Engineering</p>
        </div>
        <div className="home-features-card">
          <img src={RenewableEnergy} />
          <p>Renewable Energy</p>
        </div>
        <div className="home-features-card">
          <img src={Aerospace} />
          <p>Aerospace</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;
