import React from "react";
import GeneralEngineering from "../../assets/Home/Features/Fourstor General Engineering.png";
import Automotive from "../../assets/Home/Features/Fourstor Automotive.png";
import Aerospace from "../../assets/Home/Features/Fourstor Aerospace.png";
import RenewableEnergy from "../../assets/Home/Features/Fourstor Renewable Energy.png";

function Features() {
    return (
        <div className="home-section">
            <div className="home-section-heading">
                <h2>
                    Why Choose <span>Fourstor? </span>
                </h2>
                <p>
                    Delivering tailored industrial solutions with innovation, expertise,
                    and a commitment to excellence
                </p>
            </div>
            <div className="home-features">
                <div className="home-features-left">
                    <h3>Industries We Serve</h3>
                    <div className="home-features-cards-container">
                        <div className="home-features-cards">
                            <div className="home-features-card">
                                <img src={Automotive} />
                                <p>Automotive</p>
                            </div>
                            <div className="home-features-card">
                                <img src={Aerospace} />
                                <p>Aerospace</p>
                            </div>
                        </div>
                        <div className="home-features-cards">
                            <div className="home-features-card">
                                <img src={GeneralEngineering} />
                                <p>General Engineering</p>
                            </div>
                            <div className="home-features-card">
                                <img src={RenewableEnergy} />
                                <p>Renewable Energy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-features-right">
                    <div className="home-features-right-up">
                        <span>FOURSTOR</span>
                        <div className="home-competition">
                            <h3>Our Competitive Edge</h3>
                            <ul>
                                <li>
                                    <h4>International Suppliers</h4>
                                    <p>
                                        Access to international suppliers and cutting-edge
                                        technology
                                    </p>
                                </li>
                                <span></span>
                                <li>
                                    <h4>System Integration</h4>
                                    <p>Expertise in system integration and prototyping</p>
                                </li>
                                <span></span>
                                <li>
                                    <h4>Customer Support</h4>
                                    <p>Dedicated customer support from design to delivery</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="home-features-right-down">
                        <div className="home-features-dots-container">
                            <div className="home-features-dot"></div>
                            <div className="home-features-dot"></div>
                            <div className="home-features-dot"></div>
                        </div>
                        <p>Driving Innovation, Delivering Results</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
