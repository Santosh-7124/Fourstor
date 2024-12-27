import React from "react";
import MailIcon from "../../assets/Contact/Mail Icon.png";
import LocationIcon from "../../assets/Contact/Location Icon.png";
import CallIcon from "../../assets/Contact/Call Icon.png";

function Form() {
  return (
    <div className="contact-form">
      <div className="contact-info-div">
        <div className="contact-info-container">
        <h2>Reach Us Here</h2>
        <div className="contact-info">
          <a href="#" target="_blank">
            <img src={MailIcon} />
            <section>
              <div>
                <h3>Email Us</h3>
                <span>Your queries, our priority</span>
              </div>
              <p>fourstor@outlook.com</p>
            </section>
          </a>
          <a href="#" target="_blank">
            <img src={LocationIcon} />
            <section>
              <div>
                <h3>Visit Us</h3>
                <span>Step in for a warm welcome</span>
              </div>
              <p>
                Fourstor Solutions Pvt. Ltd. No. 2, 1st Floor, Jayaram
                BuildingOpp. <br /> NICEFAIR, Ramamurthy Nagar - Bangalore -
                560016
              </p>
            </section>
          </a>
          <a href="#" target="_blank">
            <img src={CallIcon} />
            <section>
              <div>
                <h3>Call us</h3>
                <span>Mon - Fri 10 AM - 6PM</span>
              </div>
              <p>7353301096 / 7892046177</p>
            </section>
          </a>
        </div>
      </div>
      </div>
      <form action="https://formspree.io/f/mgvvopbl" method="POST">
        <div className="form-name-input">
          <section>
            <label htmlFor="first-name">
              First Name<span>*</span>
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First name"
              required
            />
          </section>
          <section>
            <label htmlFor="last-name">
              Last Name<span>*</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last name"
              required
            />
          </section>
        </div>
        <section>
          <label htmlFor="email">
            Email Address<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@info.com"
            required
          />
        </section>
        <section>
          <label htmlFor="mobile">
            Mobile Number<span>*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="+123-456-789"
            required
          />
        </section>
        <section>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
