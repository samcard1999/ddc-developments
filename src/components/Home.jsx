import React from "react";
import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
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
      <NavBar />
      <h1 className="text-9xl text-left  ">
        Designing the future, Building a Legacy
      </h1>
      <div className="flex absolute bottom-0 left-0 p-6 justify-between items-center w-full h-auto">
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
    </>
  );
};

export default Home;
