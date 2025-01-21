import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Services/Banner";
import Advantage from "./Services/Advantage";
import ServicesContainer from "./Services/ServicesContainer";
import Contact from "./Home/Contact";
import Testimony from "./Home/Testimony";
import Text from "./Home/Text";

function Services() {
  return (
    <>
      <Helmet>
        <title>Comprehensive Industrial Solutions | Fourstor Services</title>
        <meta
          name="description"
          content="Discover tailored industrial solutions in 3D Printing, Renewable Energy, and Automation. Fourstor transforms ideas into impactful results."
        />
      </Helmet>
      <Banner />
      <Advantage />
      <ServicesContainer />
      <Contact />
      <Testimony />
      <Text />
    </>
  );
}

export default Services;
