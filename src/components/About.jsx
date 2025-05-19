import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import send_button from "../assets/svg/send_button.svg";
import HeadlineSplitText from "./AnimatedText";
import AnimatedTextSpan from "./AnimatedText";
import BentoStatCard from "./BentoStatCard";
import CountUp from "react-countup";
import CountUpOnVisible from "./CountUpOnVisible";
import { Link } from "react-router-dom";

const About = () => {
  const statistic_1 = useRef(null);
  const statistic_2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.utils.toArray(".statistic_1").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "240px bottom",
          end: "bottom+=250px bottom",
          scrub: false,
          toggleActions: "play none none none"
        },
        right: "200px",
        filter: "blur(10px)",
        opacity: 0.1,
        duration: 1,
        ease: "power1.inOut"
      });
    });
    gsap.utils.toArray(".statistic_2").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "240px bottom",
          end: "bottom+=250px bottom",
          scrub: false,

          toggleActions: "play none play none"
        },
        left: "200px",
        filter: "blur(10px)",
        opacity: 0.1,
        duration: 1,
        ease: "power1.inOut"
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

  return (
    <section
      id="about"
      className="w-full flex flex-col gap-28 h-auto relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:px-32 justify-center items-stretch mt-32 gap-20 lg:gap-12">
        <h1 className="flex-1 mb-8 mr-10 lg:content-center lg:top-0 lg:mr-0 lg:mb-0 lg:leading-[0.7] w-auto font-bold text-right relative  text-7xl leading-[1.1] ">
          <AnimatedTextSpan parts={2} className="hidden lg:inline text-5xl ">
            The future is
            <br /> not Waited, it is
            <br /> built
          </AnimatedTextSpan>

          <AnimatedTextSpan className="lg:hidden" parts={2}>
            The future is not Waited
          </AnimatedTextSpan>
        </h1>
        <div
          style={{ width: "6px" }}
          className="bg-dark_blue rounded-full h-auto relative hidden lg:block"
        ></div>
        <div className="flex-1 relative flex gap-4 justify-center items-center ml-4">
          <p className="flex-1 relative tracking-wider text-right text-lg  font-light lg:text-left fade-in-on-scroll">
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
      <div className="flex flex-col gap-3 px-4 ">
        <div className="statistic_2 bento_card flex flex-col pr-10 items-center gap-4  justify-end text-right relative">
          <img
            src="assets/about/investments.png"
            alt="investments.png"
            className="w-full h-full object-contain"
          />
          <h2 className="text-left">
            +
            <b>
              {" "}
              <CountUpOnVisible
                prefix={"$"}
                start={700000000}
                end={800000000}
                duration={2}
              />
            </b>
            <br /> Investments in projects.
          </h2>
        </div>
        <div className=" statistic_1 bento_card relative flex pl-10 items-center gap-4 ">
          <h2>
            <b>Modular construction</b> with
            <br />
            power to manufacture{" "}
            <b>
              <CountUpOnVisible end={40} start={0} duration={2.3} /> properties
            </b>
            <br />
            per day and build{" "}
            <b>
              <CountUpOnVisible end={2500} start={2000} duration={2.3} />
            </b>{" "}
            of perimeter
            <br />
            per day.
          </h2>
        </div>
        <div className=" statistic_1 bento_card relative flex pl-10 items-center gap-4 ">
          <h2>
            In house manufacture <br />
            <b>facility </b>
            in Florida
          </h2>
        </div>
        <div className="statistic_1 bento_card flex pl-10 items-center gap-4 relative">
          <h2>
            More than{" "}
            <b>
              <CountUpOnVisible start={200} end={300} duration={2} />
            </b>{" "}
            properties.
          </h2>
        </div>

        <Link
          to={"/investments"}
          className="flex !bg-[#0f1932] bento_card w-full content-center py-2 px-6 gap-4 !justify-between mb-20 !items-center"
        >
          <h2 className="text-xl text-white_gray font-bold">
            Start your new
            <br /> investment now
          </h2>
          <img className="h-8" src={send_button} alt="investment_button"></img>
        </Link>
      </div>
    </section>
  );
};

export default About;
