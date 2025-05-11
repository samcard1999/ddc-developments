import React from "react";
import AnimatedTextSpan from "./AnimatedText";

const Team = () => {
  return (
    <section id="team" className="h-screen w-full relative">
      <div className="team_wrapper p-6 lg:px-20 flex flex-col gap-8">
        <div className="flex gap-4 items-center justify-start">
          <div
            style={{ height: "7rem", width: "5px" }}
            className="bg-dark_blue rounded-full  "
          ></div>
          <h1 className="text-left">
            <AnimatedTextSpan parts={2}>
              Our <b>Team</b>
            </AnimatedTextSpan>
          </h1>
        </div>
        <div className="employee_info text-right lg:text-left flex lg:h-[60vh] flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="image_container lg:order-2 h-[52vh]  lg:h-[80vh] lg:mb-24 overflow-hidden">
            <img
              loading="lazy"
              src="assets/employees/employee_1_lg.png"
              alt="employee_1_lg"
              className="lg:h-full lg:pr-24"
            ></img>
          </div>
          <div className="lg:order-1 lg:max-w-[35vw] lg:text-lg lg:flex lg:flex-col lg:gap-2">
            <div>
              <h2>
                <AnimatedTextSpan parts={2}>Danilo Dominguez</AnimatedTextSpan>
              </h2>
              <h3>
                <AnimatedTextSpan parts={2}>CEO and Founder</AnimatedTextSpan>
              </h3>
            </div>
            <p className="fade-in-on-scroll">
              Our founder, Danilo Dominguez, has been dedicating his life to
              better understanding how we can better connect all real estate
              industries. From Real Estate Brokerage to Residential & Commercial
              construction. For him, it's all about the clients' experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
