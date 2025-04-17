import React from "react";
import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";

const NavBar = () => {
  return (
    <div className="flex fixed justify-between items-center top-0 left-0  p-6 h-[10vh] w-full">
      <a href="/" className="text-dark_blue text-2xl hover:text-inherit">
        DDC DEVELOPMENTS
      </a>
      <img src={logo_circle} alt="logo-circle" className="h-[7vh]"></img>
      <div className="text-2xl text-dark_blue flex  ">
        <a className="text-inherit hover:text-dark_grey mr-12" href="#">
          Contact
        </a>

        <a href="/en" className="text-inherit hover:text-dark_grey">
          EN
        </a>
        <a
          href="/es"
          className="text-inherit hover:text-dark_grey  before:content-['|']"
        >
          {" "}
          ES
        </a>
      </div>
    </div>
  );
};

export default NavBar;
