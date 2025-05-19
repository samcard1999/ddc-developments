import React from "react";

const ProjectsDesktop = () => {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-start">
      <div className="flex relative cards_container  h-[500px] overflow-x-auto  w-1/2 gap-2  ">
        <a className="desktop_roject_card">
          <img
            alt="bg_1"
            src="assets/projects/bg/bg__1.jpeg"
            className="rounded-[0.5rem] mb-4 object-cover h-full w-full"
          ></img>
          <button className="mb-3 ml-3 font-bold text-left">Villa Ochoa</button>
          <img
            alt="arrow_button"
            src="assets/projects/arrow_projects.svg"
            className="h-6 absolute right-4 bottom-6"
          ></img>
        </a>
        <a className=" desktop_roject_card">
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
        <a className=" desktop_roject_card">
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
        <a className=" desktop_roject_card">
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
    </section>
  );
};

export default ProjectsDesktop;
