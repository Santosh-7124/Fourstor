import React from "react";
import FacebookIcon from "../../assets/Footer/Facebook Icon.png";
import InstagramIcon from "../../assets/Footer/Instagram Icon.png";
import LinkedinIcon from "../../assets/Footer/Linkedin Icon.png";

function Social() {
  return (
    <div className="home-contact contact-page">
      <div className="home-contact-container">
        <section>
          <h2>Stay updated with our latest solutions and projects!</h2>
          <p>Click the icon below to follow us on social media</p>
        </section>
        <div className="contact-social">
          <a href="#" target="_blank">
            <img src={FacebookIcon} />
          </a>
          <a href="#" target="_blank">
            <img src={InstagramIcon} />
          </a>
          <a href="#" target="_blank">
            <img src={LinkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
