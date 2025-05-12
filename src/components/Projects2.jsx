import React from "react";
import AnimatedTextSpan from "./AnimatedText";

const Projects2 = () => {
  return (
    <section id="projects" className="h-auto w-full relative overflow-hidden">
      <div className="flex flex-col gap-4 ">
        <div className="relative p-6 w-[80%] flex flex-col gap-4">
          <h1 className=" text-6xl text-dark_blue font-bold">
            <AnimatedTextSpan parts={2}>
              Explore some of our projects
            </AnimatedTextSpan>
          </h1>
          <h2 className="text-xl text-dark_blue fade-in-on-scroll">
            We convert designs into reality through innovative the modular
            construction method.
          </h2>
          <a href="/" className="rounded-full py-4 px-6 bg-white_gray w-fit">
            <span className="flex items-center">
              <div className="mr-2">
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 23 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4448 11.7649L21.5378 1.67188"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M11.4448 11.7649L1.3518 1.67187"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-bold">See all cases</span>
            </span>
          </a>
        </div>
        <div className="projects_carousel fade-in-on-scroll h-full relative flex overflow-x-auto  w-screen gap-2 origin-bottom-left ">
          <a className="carousel_card relative flex flex-col snap-start p-2 scroll-ms-6 bg-white_gray rounded-xl">
            <img
              alt="bg_1"
              src="assets/projects/bg/bg__1.jpeg"
              className="rounded-[0.5rem] mb-4 object-cover h-full w-full"
            ></img>
            <button className="mb-3 ml-3 font-bold text-left">
              Villa Ochoa
            </button>
            <img
              alt="arrow_button"
              src="assets/projects/arrow_projects.svg"
              className="h-6 absolute right-4 bottom-6"
            ></img>
          </a>
          <a className="carousel_card relative flex flex-col snap-start p-2 scroll-ms-6 bg-white_gray rounded-xl">
            <img
              alt="bg_2"
              src="assets/projects/bg/bg__2.jpeg"
              className="rounded-[0.5rem] mb-4 object-cover h-full w-full"
            ></img>
            <button className="mb-3 ml-3 font-bold text-left">
              Villa Victor
            </button>
            <img
              alt="arrow_button"
              src="assets/projects/arrow_projects.svg"
              className="h-6 absolute right-4 bottom-6"
            ></img>
          </a>
          <a className="carousel_card relative flex flex-col snap-start p-2 scroll-ms-6 bg-white_gray rounded-xl">
            <img
              alt="bg_3"
              src="assets/projects/bg/bg__3.jpeg"
              className="rounded-[0.5rem] mb-4 object-cover h-full w-full"
            ></img>
            <button className="mb-3 ml-3 font-bold text-left">
              Villa Santa Marta
            </button>
            <img
              alt="arrow_button"
              src="assets/projects/arrow_projects.svg"
              className="h-6 absolute right-4 bottom-6"
            ></img>
          </a>
          <a className="carousel_card relative flex flex-col snap-start p-2 scroll-ms-6 bg-white_gray rounded-xl">
            <img
              alt="bg_4"
              src="assets/projects/bg/bg__4.jpeg"
              className="rounded-[0.5rem] mb-4 object-cover h-full w-full"
            ></img>
            <button className="mb-3 ml-3 font-bold text-left">
              Villa Esplanade
            </button>
            <img
              alt="arrow_button"
              src="assets/projects/arrow_projects.svg"
              className="h-6 absolute right-4 bottom-6"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
