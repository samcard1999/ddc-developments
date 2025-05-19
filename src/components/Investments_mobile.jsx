import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUpOnVisible from "./CountUpOnVisible";

const Investments_mobile = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.utils.toArray(".animated_1").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "40px bottom",
          end: "bottom+=50px bottom",
          scrub: false,

          toggleActions: "play none none none"
        },
        right: "300px",
        filter: "blur(10px)",
        opacity: 0.1,
        duration: 1,
        ease: "power1.inOut"
      });
    });
    gsap.utils.toArray(".animated_2").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Cada elemento será su propio trigger
          start: "40px bottom",
          end: "bottom+=50px bottom",
          scrub: false,

          toggleActions: "play none play none"
        },
        left: "300px",
        filter: "blur(10px)",
        opacity: 0.1,
        duration: 1,
        ease: "power1.inOut"
      });
    });
  }, []);

  return (
    <section className="min-h-screen w-full h-auto flex gap-3 z-10 pt-20 pb-5 px-5 ">
      <div className="flex flex-col gap-3 h-full">
        <div className="animated_2 bento_card flex flex-col h-full w-full gap-16 justify-between relative">
          <h1 className="text-dark_blue text-3xl font-bold">
            Why Invest with DDC <br />
            Developments?
          </h1>

          <h2 className="text-dark_blue  text-2xl underline underline-offset-8">
            Download <strong>PDF</strong>
          </h2>
        </div>
        <div className="animated_1 bento_card flex flex-col gap-3 ">
          <img
            className="w-full h-auto"
            alt="ROI.svg"
            src="assets/investments/ROI.svg"
          />
          <h1 className="font-bold text-6xl text-dark_blue">
            {" "}
            <CountUpOnVisible end={30} start={0} duration={2.7} />%
          </h1>
          <h2 className="font-bold">Lower Costs - Maximized ROI</h2>
        </div>
        <div className="animated_2 bento_card flex flex-col gap-6 ">
          <h1 className="text-dark_blue text-xl text-left">
            Faster <b>Returns</b>
          </h1>
          <img
            src="assets/investments/faster_returns.svg"
            alt="faster_returns.svg"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="animated_1 bento_card fade-in-on-scroll">
          <h1 className="text-dark_blue text-2xl text-center">
            Proven <b>Structural Strength</b> Durable, reliable assets
          </h1>
        </div>
        <div className="animated_2 bento_card flex flex-col gap-1 h-auto relative ">
          <h1 className="text-dark_blue text-3xl font-bold text-left leading-10 tracking-[0.2rem]">
            Smart, Scalable Entry <br />
            Points
          </h1>
          <h2 className="text-left text-dark_blue text-2xl">
            Flexible investor models
          </h2>
          <img
            src="assets/investments/flexible_investor.svg"
            alt="flexible_investor.svg"
            className="w-auto h-80 object-fill"
          />
          <div className="flex gap-8 mb-6">
            <img
              src="assets/investments/eco.svg"
              alt="eco.svg"
              className="w-auto h-16"
            />
            <div className="flex flex-col gap-5 text-lg items-center justify-center font-bold">
              <h2>Eco-Conscious Construction</h2>
              <h2>100% recyclable materials</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investments_mobile;
