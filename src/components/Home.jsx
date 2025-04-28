import React from "react";
import Cover from "./Cover";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Team from "./Team";
import AnimatedBackground from "./Background/Background";

const Home = () => {
  return (
    <>
      <NavBar />
      <Cover />
      <About />
      <Projects />
      <Technologies />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
