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
import Projects2 from "./Projects2";
import Graphic from "./Graphic";
import useFadeInParagraphs from "./Hooks/useFadeInParagraph";
import BentoGrid from "./BentoGrid";
import DDCComparisonChart from "./DDCComparisonChart";

const Home = ({ isPreloading }) => {
  useFadeInParagraphs();
  return (
    <div
      id="home"
      style={{
        visibility: isPreloading ? "hidden" : "visible",
        opacity: isPreloading ? "0" : "1",
        overflow: "hidden"
      }}
    >
      <NavBar />
      <Cover />
      <About />
      <DDCComparisonChart />
      <BentoGrid />
      {/* <Graphic /> */}
      <Projects2 />
      <Technologies />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
