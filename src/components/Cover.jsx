import React from "react";
import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";
const Cover = () => {
  return (
    <section className="flex items-center">
      <div className="flex justify-center gap-12 items-center w-auto h-auto hidden">
        <img
          className="w-auto h-[3vh] absolute -translate-x-[calc(50%+56px)]"
          src={logo_letters}
          alt="logo_letters"
        ></img>
        <div
          style={{ height: "15vh", width: "5px" }}
          className="bg-dark_blue rounded-full absolute"
        ></div>
        <img
          className="w-auto h-[10vh] absolute translate-x-[calc(50%+56px)]"
          src={logo_circle}
          alt="logo_circle"
        ></img>
      </div>
      <div
        style={{ height: "18vh", width: "5px" }}
        className="bg-dark_blue rounded-full absolute left-6 "
      ></div>
      <h1 className="text-5xl text-left ml-10 ">
        <b>Designing</b> the future,{" "}
        <span className="hidden md:block">
          <br />
        </span>
        <b>Building</b> a Legacy
      </h1>
      <div className="flex absolute bottom-5 left-0 p-6 justify-between items-center w-full h-auto">
        <a href="/" className=" hover: text-inherit">
          Projects
        </a>
        <a href="/" className=" hover: text-inherit">
          Team
        </a>
        <a href="/" className=" hover: text-inherit">
          Technologies
        </a>
      </div>
    </section>
  );
};

export default Cover;
