import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import send_button from "../assets/svg/send_button.svg";
import HeadlineSplitText from "./AnimatedText";
import AnimatedTextSpan from "./AnimatedText";
import BentoStatCard from "./BentoStatCard";

const About = () => {
  const statistic_1 = useRef(null);
  const statistic_2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.utils.toArray(".statistic_1").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "-120px bottom",
          end: "bottom+=250px bottom",
          scrub: true,
          toggleActions: "play none play none"
        },
        right: "300px",
        opacity: 0.1,
        duration: 1.4
      });
    });
    gsap.utils.toArray(".statistic_2").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "-120px bottom",
          end: "bottom+=250px bottom",
          scrub: true,
          toggleActions: "play none play none"
        },
        left: "300px",
        opacity: 0.1,
        duration: 1.4
      });
    });
  }, []);

  function AnimatedText({ children }) {
    const text = useRef(null);

    useLayoutEffect(() => {
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          start: "-80px bottom",
          end: "bottom+=250px bottom",
          scrub: false
        },
        left: "100px",
        opacity: 0
      });
    }, []);
    return (
      <span className="relative  " ref={text}>
        {children}
      </span>
    );
  }

  const phrases = [
    "At DDC Developments, we are",
    " dedicated to transforming the ",
    "construction industry with a strong ",
    "commitment to environmental ",
    "responsibility. By leveraging cutting-",
    "edge technologies like our modular ",
    "systems, we offer innovative and",
    " sustainable solutions that redefine",
    " efficiency and performance. Our ",
    "disruptive approach positions us as an",
    " industry leader, driving progress and",
    " shaping the future of construction."
  ];

  return (
    <section
      id="about"
      className="w-full flex flex-col gap-28 h-auto relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:px-32 justify-center items-stretch mt-32 gap-20 lg:gap-12">
        <h1 className="flex-1 mb-8 mr-10  lg:top-0 lg:mr-0 lg:mb-0 lg:leading-[0.7] w-auto font-bold text-right relative  text-7xl leading-[1.1] ">
          <b className="hidden lg:inline text-5xl">The future is</b>
          {/* <b className="lg:hidden">The future </b>
          <span className="lg:hidden font-bold">
            {" "}
            is not
            <br /> Waited
          </span> */}
          <AnimatedTextSpan parts={2}>
            The future is not Waited
          </AnimatedTextSpan>
          <span className="hidden font-bold lg:inline text-5xl">
            <br /> not Waited, it is
            <br /> built
          </span>
        </h1>
        <div
          style={{ width: "6px" }}
          className="bg-dark_blue rounded-full h-auto relative hidden lg:block"
        ></div>
        <div className="flex-1 relative flex gap-4 justify-center items-center ml-4">
          <p className="flex-1 relative  text-right text-xl font-light lg:text-left fade-in-on-scroll">
            At DDC Developments, we are dedicated to transforming the
            construction industry with a strong commitment to environmental
            responsibility. By leveraging cutting- edge technologies like our
            modular systems, we offer innovative and sustainable solutions that
            redefine efficiency and performance. Our disruptive approach
            positions us as an industry leader, driving progress and shaping the
            future of construction
          </p>
          <div
            style={{ height: "18vh", width: "6px" }}
            className="bg-dark_blue rounded-full h-auto relative mr-10 lg:order-1 lg:hidden"
          ></div>
        </div>
      </div>
      <div className="flex flex-col gap-28 ">
        <div className="statistic_1 flex pl-10 items-center gap-4 relative">
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
          <h2>
            More than <b>300</b>
            <br /> properties.
          </h2>
        </div>
        <div className="statistic_2 flex pr-10 items-center gap-4  justify-end text-right relative">
          <h2>
            More than <b>$ 800.000.000</b>
            <br /> investments in projects.
          </h2>
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
        </div>
        <div className=" statistic_1 relative flex pl-10 items-center gap-4 ">
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
          <h2>
            In house manufacture <br />
            <b>facility </b>
            in Florida
          </h2>
        </div>
        <div className=" statistic_2 relative flex pr-10 items-center gap-4  justify-end text-right">
          <h2>
            <b>Investment</b>
            <br /> Platform.
          </h2>
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
        </div>
        <div className=" statistic_1 relative flex pl-10 items-center gap-4 ">
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
          <h2>
            <b>Modular construction</b> with
            <br />
            power to manufacture <b>40 properties</b>
            <br />
            per day and build <b>2500 sq.ft</b> of perimeter
            <br />
            per day.
          </h2>
        </div>
        <div className="flex gap-4 justify-center pb-20 w-full items-center">
          <h2 className="text-xl font-bold">
            Start your new
            <br /> investment now
          </h2>
          <img className="h-8" src={send_button} alt="investment_button"></img>
        </div>
      </div>
      <div className="flex gap-4 px-6 py-2 justify-between items-center">
        <BentoStatCard number={300} prefix="+" label="Houses" />
        <BentoStatCard number={300} prefix="+" label="Houses" />
      </div>
    </section>
  );
};

export default About;
