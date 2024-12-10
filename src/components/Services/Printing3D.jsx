import React from "react";
import Gear from "../../assets/Services/gear.png";
import Tick from "../../assets/green tick.svg";
import MainImg from "../../assets/Services/Services Container/3D Printing.png";

function Printing3D() {
  return (
    <>
      <div className="services-card-left">
        <div className="heading">
          <h3>3d Printing</h3>
          <p>
            We offer end-to-end 3D printing solutions tailored to the unique
            needs of our clients. Whether you’re a student, a professional, or
            an industrial enterprise, our services cater to all skill levels and
            industries.
          </p>
        </div>
        <div className="services-offerings">
          <h4>Our Offerings</h4>
          <ul>
            <li>
              <h5>Basic 3D Printers</h5>
              <p>
                Affordable and user-friendly printers for educational
                institutions and small businesses.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Customized 3D Printing Solutions</h5>
              <p>
                Advanced 3D printing for creating complex parts in plastic,
                ceramic, and metal materials.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Prototyping Services</h5>
              <p>
                Rapid prototyping of industrial components to reduce design
                cycles and accelerate product development.
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
              <img src={Tick} /> <p>Aerospace and automotive prototypes</p>
            </li>
            <li>
              <img src={Tick} /> <p>Medical implants and equipment</p>
            </li>
            <li>
              <img src={Tick} /> <p>Customized tools and fixtures</p>
            </li>
          </ul>
        </div>
        <div className="services-card-right-img">
          <section>
            <p>Empowering Innovation with Precision Manufacturing</p>
            <div className="home-features-dots-container">
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
            </div>
          </section>
          <div className="services-card-right-img-container">
            <img src={MainImg} alt="Fourstor 3D Printing" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Printing3D;
