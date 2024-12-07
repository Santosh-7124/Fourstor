import React from "react";
import Icon1 from "../../assets/Services/Advantage/End to End Services.svg";
import Icon2 from "../../assets/Services/Advantage/Custom Solutions.svg";
import Icon3 from "../../assets/Services/Advantage/Expert Guidance.svg";

function Advantage() {
  return (
    <div className="home-section">
      <div className="home-section-heading">
        <h2>
          Why Choose <span> Fourstor Solutions?</span>
        </h2>
        <p>
          Delivering tailored industrial solutions with innovation, expertise,
          and a commitment to excellence
        </p>
      </div>
      <div className="home-advantage">
        <div className="home-advantage-set">
          <img src={Icon1} alt="Fourstor End to End Services Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>End to End Services</h3>
            <p>From design and prototyping to assembly and commissioning.</p>
          </section>
        </div>
        <div className="home-advantage-set">
          <img src={Icon2} alt="Fourstor Custom Solutions Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>Custom Solutions</h3>
            <p>Tailored to meet your unique industrial requirements.</p>
          </section>
        </div>
        <div className="home-advantage-set">
          <img src={Icon3} alt="Fourstor Quality Commitment Icon" />
          <div className="home-advantage-line"></div>
          <section>
            <h3>Expert Guidance</h3>
            <p>Technical consulting from industry specialists.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
