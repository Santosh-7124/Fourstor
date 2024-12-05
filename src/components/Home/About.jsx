import React from 'react'
import { Link } from "react-router-dom";
import AboutImg1 from "../../assets/Home/About/Fourstor About Img 1.png"
import AboutImg2 from "../../assets/Home/About/Fourstor About Img 2.png"
import AboutImg3 from "../../assets/Home/About/Fourstor About Img 3.png"
import Arrow from "../../assets/arrow without line.svg"

function About() {
    return (
        <div className='home-section'>
            <div className="home-section-heading">
                <h2>Our  <span> Vision and Values</span></h2>
                <p>Delivering tailored industrial solutions with innovation, expertise, and a commitment to excellence</p>
            </div>
            <div className='home-about'>
                <div className='home-about-imgs'>
                    <img src={AboutImg1} alt='Fourstor About Image' />
                    <img src={AboutImg2} alt='Fourstor About Image' />
                    <img src={AboutImg3} alt='Fourstor About Image' />
                </div>
                <section>
                    <p>Fourstor Solutions Pvt. Ltd. is your partner for technical sales, consultancy, and industrial services. With a commitment to quality and trust, we deliver tailored solutions across India, Australia, and the USA.</p>
                    <Link to="/about" className='light-blue-button'>
                        Learn More
                        <img src={Arrow} />
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default About