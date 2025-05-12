import React, { useEffect } from "react";
import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";
import gsap from "gsap";

const NavBar = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isHidden = false; // NUEVO: Estado de si el header está oculto o no

    const header = document.querySelector("#header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 600) {
        if (currentScrollY > lastScrollY && !isHidden) {
          // Scroll hacia abajo Y header visible -> lo ocultamos
          gsap.to(header, { y: -100, duration: 0.5, ease: "ease" });
          isHidden = true;
        } else if (currentScrollY < lastScrollY && isHidden) {
          // Scroll hacia arriba Y header oculto -> lo mostramos
          gsap.to(header, { y: 0, duration: 0.5, ease: "ease" });
          isHidden = false;
        }
      } else {
        // Menos de 600px de scroll, siempre visible si estaba oculto
        if (isHidden) {
          gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
          isHidden = false;
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed backdrop-blur flex z-50   justify-between items-center top-0 left-0 right-0 px-5 pt-6 pb-4 lg:px-6 lg:pt-8 lg:pb-6 w-full"
    >
      <img
        src={logo_letters}
        alt="logo-letters"
        className="h-3 hidden lg:block"
      ></img>
      <a href="#cover">
        <img
          src={logo_circle}
          alt="logo-circle"
          className="h-12 lg:absolute lg:left-1/2 lg:translate-x-[-50%]"
        ></img>
      </a>
      <div className="text-base text-dark_blue flex  ">
        <a
          className="text-inherit hover:te</div>xt-dark_grey mr-4"
          href="#contact"
        >
          Contact
        </a>
        <div className="mr-4">|</div>
        <a href="/" className="hover:text-inherit hover:text-dark_grey">
          Menu
        </a>
        {/* <a href="/en" className="text-inherit hover:text-dark_grey">
          EN
        </a>
        <a
          href="/es"
          className="text-inherit hover:text-dark_grey  before:content-['|']"
        >
          {" "}
          ES
        </a> */}
      </div>
    </header>
  );
};

export default NavBar;
