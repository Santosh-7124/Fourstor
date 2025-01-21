import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Contact/Banner";
import Form from "./Contact/Form";
import Social from "./Contact/Social";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Fourstor Solutions | Industrial Solutions Experts</title>
        <meta
          name="description"
          content="Get in touch with Fourstor Solutions Pvt. Ltd. for innovative industrial solutions in 3D Printing, Renewable Energy, Automation, and more. Contact us today!"
        />
      </Helmet>
      <Banner />
      <Form />
      <Social />
    </>
  );
}

export default Contact;
