import React, { useState } from "react";
import { Link } from "react-router-dom";
import Printing3DImg from "../../assets/Home/Gallery/Fourstor 3d Printing.png";
import RenewableEnergyImg from "../../assets/Home/Gallery/Fourstor Renewable Energy.png";
import IndustrialAutomationImg from "../../assets/Home/Gallery/Fourstor Industrial Automation.png";
import PneumaticsImg from "../../assets/Home/Gallery/Fourstor Pneumatics.png";
import MechatronicsImg from "../../assets/Home/Gallery/Fourstor Mechatronics.png";
import Arrow from "../../assets/arrow without line.svg";
import Point from "../../assets/arrow circle up.png";

function Gallery() {
  const serviceData = [
    {
      title: "3d Printing",
      image: Printing3DImg,
      info: [
        "Basic and customized 3D printers",
        "Printing for plastic, ceramic, and metal components",
        "End-to-end prototyping services",
      ],
      link: "/services#3d_Printing",
    },
    {
      title: "Renewable Energy",
      image: RenewableEnergyImg,
      info: [
        "Solar-based lighting solutions for farms",
        "Off-grid and on-grid solar systems for homes and industries",
      ],
      link: "/services#Renewable_Energy",
    },
    {
      title: "Industrial Automation",
      image: IndustrialAutomationImg,
      info: [
        "Automation of conveyor lines and workstations",
        "Customized industrial system design and installation",
      ],
      link: "/services#Industrial_Automation",
    },
    {
      title: "Pneumatics",
      image: PneumaticsImg,
      info: [
        "Advanced motion control products: shock absorbers, dampers, and speed controllers",
        "Expert technical assistance for spare parts",
      ],
      link: "/services#Pneumatics",
    },
    {
      title: "Mechatronics",
      image: MechatronicsImg,
      info: [
        "Modular machine-building kits",
        "Linear actuation and gas spring solutions",
      ],
      link: "/services#Mechatronics",
    },
  ];

  const [dataIndex, setDataIndex] = useState(0);

  function handleNextData() {
    if (dataIndex < serviceData.length - 1) {
      setDataIndex(dataIndex + 1);
    }
  }

  function handlePrevData() {
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
    }
  }

  return (
    <div className="home-section home-gallery-container">
      <div className="home-section-heading">
        <h2>
          Industry Expertise in
          <span> Mechatronics and Pneumatics Solutions</span>
        </h2>
        <p>
          Explore our wide range of industrial solutions designed for efficiency
          and innovation
        </p>
      </div>
      <div className="home-gallery">
        <div className="home-gallery-card">
          <div className="home-gallery-card-left">
            <section>
              <h3>{serviceData[dataIndex].title}</h3>
            </section>
            <img
              src={serviceData[dataIndex].image}
              alt={`Fourstor ${serviceData[dataIndex].title} Image `}
            />
          </div>
          <div className="home-gallery-card-right">
            <ul>
              {serviceData[dataIndex].info.map((point, index) => (
                <li key={index}>
                  <img src={Point} />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <Link
              to={serviceData[dataIndex].link}
              className="light-blue-button"
            >
              Learn More
              <img src={Arrow} />
            </Link>
          </div>
        </div>
        <div className="home-gallery-controls">
          <button onClick={handlePrevData}>
            <img
              src={Arrow}
              style={{
                opacity: `${dataIndex === 0 ? "0.4" : ""}`,
                transform: "rotate(180deg)",
              }}
            />
          </button>
          <button onClick={handleNextData}>
            <img
              src={Arrow}
              style={{
                opacity: `${dataIndex === serviceData.length - 1 ? "0.4" : ""}`,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
