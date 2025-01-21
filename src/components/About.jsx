import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./About/Banner";
import FOURsTWOr from "./About/FOURsTWOr";
import Vision from "./About/Vision";
import Advance from "./About/Advance";
import Strengths from "./About/Strengths";
import Industries from "./About/Industries";
import Contact from "./Home/Contact";
import Testimony from "./Home/Testimony";
import Text from "./Home/Text";

function About() {
  return (
    <>
      <Helmet>
        <title>
          About Fourstor Solutions | Leaders in Industrial Innovation
        </title>
        <meta
          name="description"
          content="Discover Fourstor Solutions: Experts in 3D Printing, Renewable Energy, Pneumatics, and Automation with a vision of innovation and excellence."
        />
      </Helmet>
      <Banner />
      <FOURsTWOr />
      <Vision />
      <Advance />
      <Strengths />
      <Industries />
      <Contact />
      <Testimony />
      <Text />
    </>
  );
}

export default About;
