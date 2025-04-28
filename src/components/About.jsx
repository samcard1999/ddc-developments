import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-[100vh] relative">
      <h1 className="mb-8 mr-10 text-right absolute top-16 text-7xl leading-[1.1]">
        <b>
          The future
          <br /> is not Waited
        </b>
      </h1>
      <div className="absolute flex gap-4 top-2/4 justify-center items-center ">
        <p className="relative text-right top-2/4 pl-4  text-xl font-light">
          At <b>DDC</b> Developments, we are dedicated to transforming the{" "}
          <b>construction industry</b> with a strong commitment to environmental
          responsibility. By leveraging cutting-edge technologies like our{" "}
          <b>modular systems</b>, we offer innovative and{" "}
          <b>sustainable solutions</b>
          that redefine efficiency and performance. Our{" "}
          <b>disruptive approach </b>
          positions us as an industry leader, driving progress and shaping the
          future of construction.
        </p>
        <div
          style={{ height: "18vh", width: "50px" }}
          className="bg-dark_blue rounded-full relative mr-10 "
        ></div>
      </div>
    </section>
  );
};

export default About;
