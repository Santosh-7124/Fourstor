import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Text from "./Home/Text";
import Advantage from "./Home/Advantage";
import About from "./Home/About";
import Gallery from "./Home/Gallery";
import Features from "./Home/Features";
import Contact from "./Home/Contact";
import Testimony from "./Home/Testimony";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Innovative Industrial Solutions | Fourstor Solutions Pvt Ltd
        </title>
        <meta
          name="description"
          content="Explore innovative industrial solutions in 3D Printing, Pneumatics, Mechatronics, and more. Fourstor drives efficiency with tailored expertise."
        />
      </Helmet>
      <Banner />
      <Advantage />
      <About />
      <Gallery />
      <Features />
      <Contact />
      <Testimony />
      <Text />
    </>
  );
}

export default Home;
