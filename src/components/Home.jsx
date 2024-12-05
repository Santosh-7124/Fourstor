import React from "react";
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
