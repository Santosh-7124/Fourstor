import React from "react";
import Gear from "../../assets/Services/gear.png";
import Tick from "../../assets/green tick.svg";
import MainImg from "../../assets/Services/Services Container/Mechatronics.png";

function Mechatronics() {
  return (
    <>
      <div className="services-card-left">
        <div className="heading">
          <h3>Mechatronics Solutions</h3>
          <p>
            Our mechatronics solutions combine mechanical engineering and
            electronic control systems to simplify complex machinery and enhance
            performance.
          </p>
        </div>
        <div className="services-offerings">
          <h4>Our Offerings</h4>
          <ul>
            <li>
              <h5>Linear Actuation Solutions</h5>
              <p>
                High-precision actuators for smooth and controlled movement.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Gas Springs</h5>
              <p>
                Reliable and durable gas springs for various industrial
                applications.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Modular Machine-Building Kits</h5>
              <p>
                Ready-to-use kits for assembling custom machinery quickly and
                efficiently.
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
              <img src={Tick} /> <p>Robotics and automation systems</p>
            </li>
            <li>
              <img src={Tick} />
              <p>Custom-built machinery for industrial tasks</p>
            </li>
            <li>
              <img src={Tick} />
              <p>Precision tools for engineering applications</p>
            </li>
          </ul>
        </div>
        <div className="services-card-right-img">
          <section>
            <p>Integrating Mechanics and Electronics for Smart Systems</p>
            <div className="home-features-dots-container">
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
            </div>
          </section>
          <div className="services-card-right-img-container">
            <img src={MainImg} alt="Fourstor Mechatronics" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mechatronics;
