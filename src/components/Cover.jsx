import React from "react";

import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";

const Cover = () => {
  return (
    <section id="cover" className="flex items-center relative full-screen-safe">
      <div className="justify-center gap-12 items-center w-auto h-auto hidden">
        <img
          className="w-auto h-[3vh] absolute -translate-x-[calc(50%+56px)]"
          src={logo_letters}
          alt="logo_letters"
        />
        <div
          style={{ height: "15vh", width: "5px" }}
          className="bg-dark_blue rounded-full absolute"
        />
        <img
          className="w-auto h-[10vh] absolute translate-x-[calc(50%+56px)]"
          src={logo_circle}
          alt="logo_circle"
        />
      </div>

      <div className="flex justify-center items-stretch absolute left-6 gap-4">
        <div
          style={{ width: "6px" }}
          className="bg-dark_blue rounded-full relative"
        />
        <h1 className="text-5xl text-left md:text-7xl">
          <b>Designing</b> the future, <br className="hidden md:block" />
          <b>Building</b> a Legacy
        </h1>
      </div>

      <div className="flex absolute font-bold bottom-5 left-0 px-10 justify-between items-center w-full h-auto pb-[env(safe-area-inset-bottom)]">
        <a href="#projects" className="text-inherit hover:underline">
          Projects
        </a>
        <a href="#team" className="text-inherit hover:underline">
          Team
        </a>
        <a href="#technologies" className="text-inherit hover:underline">
          Technologies
        </a>
      </div>
    </section>
  );
};

export default Cover;
