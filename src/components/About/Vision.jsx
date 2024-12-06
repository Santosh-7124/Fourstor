import React from "react";
import Tick from "../../assets/green tick.svg"
import Logo from "../../assets/Fourstor linear gradient text.png"

function Vision() {
    return (
        <div className="home-section">
            <div className="home-section-heading">
                <h2>
                    Our <span> Vision and Values</span>
                </h2>
                <p>
                    Delivering tailored industrial solutions with innovation, expertise,
                    and a commitment to excellence
                </p>
            </div>
            <div className="about-vision">
                <p className="about-vision-info">
                    Fourstor Solutions Pvt. Ltd., established in 2020, is a
                    Bangalore-based leader in technical sales, consultancy, and industrial
                    innovation. With a focus on quality and customized services, we cater
                    to a global clientele spanning India, Australia, and the USA.
                </p>
                <div className="about-vision-container">
                    <div className="vision-mission">
                        <div className="red-line"></div>
                        <section>
                            <h3>VISION</h3>
                            <p>
                                To be India’s premier provider of innovative components
                                andsystems globally.
                            </p>
                        </section>
                        <div className="testimony-line"></div>
                        <section>
                            <h3>MISSION</h3>
                            <p>
                                We provide innovative solutions for industries, customized components to meet unique requirements, and supportive partnerships built on trust and reliability.
                            </p>
                        </section>
                    </div>
                    <div className="core-principles">
                        <section>
                            <h3>CORE PRINCIPLES</h3>
                            <p>Delivering innovation, tailored solutions, and trusted partnerships for industrial excellence.</p>
                        </section>
                        <ul>
                            <li><img src={Tick} /> <p>Exceptional service with flexibility and competence</p> </li>
                            <li><img src={Tick} /> <p>Strong, ethical partnerships with customers, suppliers, and employees</p> </li>
                            <li><img src={Tick} /> <p>Commitment to growth beyond industry standards</p> </li>
                        </ul>
                    </div>
                    <div className="company-text">
                        <img src={Logo} alt="Fourstor Text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
