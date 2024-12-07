import React from "react";
import Gear from "../../assets/Services/gear.png";
import Tick from "../../assets/green tick.svg";
import MainImg from "../../assets/Services/Services Container/Pneumatics.png";

function Pneumatics() {
  return (
    <>
      <div className="services-card-left">
        <div className="heading">
          <h3>Pneumatics Solutions</h3>
          <p>
            Our pneumatic solutions are engineered to meet the diverse motion
            control needs of industries. With high-quality components and expert
            technical support, we ensure seamless operations for your equipment.
          </p>
        </div>
        <div className="services-offerings">
          <h4>Our Offerings</h4>
          <ul>
            <li>
              <h5>Motion Control Products</h5>
              <p>
                &#8226; Shock absorbers and dampers for machinery longevity.
              </p>
              <p>
                &#8226; Speed controllers for smooth and efficient operations.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Spare Parts Selection</h5>
              <p>
                Expert assistance to help you choose the right components for
                your systems.
              </p>
            </li>
          </ul>
        </div>
        <div className="services-card-left-img">
          <img src={Gear} />
          <img src={Gear} />
        </div>
      </div>
      <div className="services-card-right">
        <div className="applications">
          <h4>Applications</h4>
          <ul>
            <li>
              <img src={Tick} /> <p>Industrial machinery</p>
            </li>
            <li>
              <img src={Tick} /> <p>Automotive assembly lines</p>
            </li>
            <li>
              <img src={Tick} /> <p>Packaging and processing equipment</p>
            </li>
          </ul>
        </div>
        <div className="services-card-right-img">
          <section>
            <p>Precision Motion Control for Industrial Systems</p>
            <div className="home-features-dots-container">
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
            </div>
          </section>
          <div className="services-card-right-img-container">
            <img src={MainImg} alt="Fourstor Pneumatics" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pneumatics;
