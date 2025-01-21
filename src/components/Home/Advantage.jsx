import React from "react";
import Icon1 from "../../assets/Home/Advantage/Icon 1.svg";
import Icon2 from "../../assets/Home/Advantage/Icon 2.svg";
import Icon3 from "../../assets/Home/Advantage/Icon 3.svg";

function Advantage() {
  return (
    <div className="home-section">
      <div className="home-section-heading">
        <h2>
          Discover the <span> Fourstor Advantage in Industrial Solutions</span>
        </h2>
        <p>
          Delivering tailored industrial solutions with innovation, expertise,
          and a commitment to excellence
        </p>
      </div>
      <div className="home-advantage">
        <div className="home-advantage-set">
          <img src={Icon1} alt="Fourstor Industry Expertise Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>Industry Expertise</h3>
            <p>Industry-leading expertise in diverse domains</p>
          </section>
        </div>
        <div className="home-advantage-set">
          <img src={Icon2} alt="Fourstor Custom Solutions Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>Custom Solutions</h3>
            <p>Customized solutions to meet specific requirements</p>
          </section>
        </div>
        <div className="home-advantage-set">
          <img src={Icon3} alt="Fourstor Quality Commitment Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>Quality Commitment</h3>
            <p>A commitment to quality, service, and long-term relationships</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
