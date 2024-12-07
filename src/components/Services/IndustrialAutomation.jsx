import React from "react";
import Gear from "../../assets/Services/gear.png";
import Tick from "../../assets/green tick.svg";
import MainImg from "../../assets/Services/Services Container/Industrial Automation.png";

function IndustrialAutomation() {
  return (
    <>
      <div className="services-card-left">
        <div className="heading">
          <h3>Industrial Automation</h3>
          <p>
            Our industrial automation services are designed to improve
            operational efficiency, reduce manual labor, and enhance
            productivity. From design to installation, we provide comprehensive
            solutions tailored to your specific needs.
          </p>
        </div>
        <div className="services-offerings">
          <h4>Our Offerings</h4>
          <ul>
            <li>
              <h5>Conveyor System Automations</h5>
              <p>
                Streamlining production with automated conveyor belts for faster
                and more reliable operations.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Workstation Automation</h5>
              <p>
                 Integration of automated sub-assemblies and workbenches for
                smoother workflows.
              </p>
            </li>
            <div className="testimony-line"></div>
            <li>
              <h5>Custom Design and Installation</h5>
              <p>
                End-to-end services from conceptualization to commissioning.
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
              <img src={Tick} /> <p>Manufacturing assembly lines</p>
            </li>
            <li>
              <img src={Tick} /> <p>Material handling and logistics</p>
            </li>
            <li>
              <img src={Tick} /> <p>Industrial warehousing</p>
            </li>
          </ul>
        </div>
        <div className="services-card-right-img">
          <section>
            <p>Revolutionizing Manufacturing with Advanced Automation</p>
            <div className="home-features-dots-container">
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
              <div className="home-features-dot"></div>
            </div>
          </section>
          <div className="services-card-right-img-container">
            <img src={MainImg} alt="Fourstor Industrial Automation" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustrialAutomation;
