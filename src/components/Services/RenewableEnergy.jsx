import React from "react";
import Gear from "../../assets/Services/gear.png";
import Tick from "../../assets/green tick.svg";
import MainImg from "../../assets/Services/Services Container/Renewable Energy Solutions.png";
import Arrow from "../../assets/arrow top right.svg";

function RenewableEnergy() {
  return (
    <>
      <div className="services-card-left">
        <div className="heading">
          <h3>Renewable Energy Solutions</h3>
          <p>
            We are committed to creating a greener future through our renewable
            energy solutions. Designed for both urban and rural applications,
            our solar solutions are cost-effective and reliable.
          </p>
        </div>
        <div className="services-offerings">
          <h4>Our Offerings</h4>
          <ul>
            <li>
              <h5>Solar Outdoor Lighting</h5>
              <p>
                Energy-efficient solutions for farms, ensuring sustainable
                operations even in remote areas.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Solar Power Systems:</h5>
              <section>
                <img src={Arrow} />
                <h6>Off Grid Sytems</h6>
              </section>
              <p>
                Perfect for standalone operations without relying on the main
                power grid.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Prototyping Services</h5>
              <section>
                <img src={Arrow} />
                <h6>On Grid Sytems</h6>
              </section>
              <p>
                Seamless integration with existing electrical systems for homes
                and industries.
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
              <img src={Tick} /> <p>Agricultural operations requiring consistent lighting</p>
            </li>
            <li>
              <img src={Tick} /> <p>Residential and commercial solar installations</p>
            </li>
            <li>
              <img src={Tick} /> <p>Industrial energy optimization</p>
            </li>
          </ul>
        </div>
        <div className="services-card-right-img">
          <section>
            <p>Driving Sustainability with Solar Power</p>
            <div className="home-features-dots-container">
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
            </div>
          </section>
          <div className="services-card-right-img-container">
            <img src={MainImg} alt="Fourstor Renewable Energy Solutions" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RenewableEnergy;
