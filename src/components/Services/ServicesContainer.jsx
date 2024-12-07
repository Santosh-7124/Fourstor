import React from "react";
import Printing3D from "./Printing3D";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RenewableEnergy from "./RenewableEnergy";
import IndustrialAutomation from "./IndustrialAutomation";
import Pneumatics from "./Pneumatics";
import Mechatronics from "./Mechatronics";

function ServicesContainer() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="home-section">
      <div className="home-section-heading">
        <h2>
          Transforming <span> Ideas into Impact</span>
        </h2>
        <p>
          Delivering tailored industrial solutions with innovation, expertise,
          and a commitment to excellence
        </p>
      </div>
      <div className="services-container">
        <div className="services-card" id="3d_Printing">
          <Printing3D />
        </div>
        <div className="services-card" id="Renewable_Energy">
          <RenewableEnergy />
        </div>
        <div className="services-card" id="Industrial_Automation">
          <IndustrialAutomation />
        </div>
        <div className="services-card" id="Pneumatics">
          <Pneumatics />
        </div>
        <div className="services-card" id="Mechatronics">
          <Mechatronics />
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
