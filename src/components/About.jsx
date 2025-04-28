import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import send_button from "../assets/svg/send_button.svg";

const About = () => {
  const statistic_1 = useRef(null);
  const statistic_2 = useRef(null);

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
      gsap.registerPlugin(ScrollTrigger);

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
    "commitment to environmental",
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
    <section id="about" className="w-full h-auto relative">
      <div className="flex flex-col justify-end gap-28">
        <h1 className="mb-8 mr-10 text-right relative top-16 text-7xl leading-[1.1]">
          <b>
            The future
            <br /> is not Waited
          </b>
        </h1>
        <div className="relative flex gap-4 mb-8 top-2/4 justify-center items-center ">
          <p className="relative text-right top-2/4 pl-4  text-xl font-light">
            {phrases.map((phrase, index) => {
              return <AnimatedText key={index}>{phrase}</AnimatedText>;
            })}
          </p>
          <div
            style={{ height: "18vh", width: "50px" }}
            className="bg-dark_blue rounded-full relative mr-10 "
          ></div>
        </div>
        <div className="statistic_1 flex pl-10 items-center gap-4 relative">
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
          <h2>
            More than <b>3.000.000</b>
            <br /> square feet built.
          </h2>
        </div>
        <div className="statistic_2 flex pr-10 items-center gap-4  justify-end text-right relative">
          <h2>
            More than <b>$ 800.000.000</b>
            <br /> investments.
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
            More than <b>200 </b>
            properties
            <br /> under development.
          </h2>
        </div>
        <div className=" statistic_2 relative flex pr-10 items-center gap-4  justify-end text-right">
          <h2>
            Return of up to <b>35 %</b>
            <br /> in less than 3 months.
          </h2>
          <div
            style={{ height: "6vh", width: "5px" }}
            className="bg-dark_blue rounded-full relative "
          ></div>
        </div>

        <div className="flex gap-4 justify-center pb-20 w-full items-center">
          <h2 className="text-xl font-bold">
            Start your new
            <br /> investment now
          </h2>
          <img className="h-8" src={send_button} alt="investment_button"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
