import React, { useEffect } from "react";
import logo_circle from "../assets/svg/logo_circle.svg";
import logo_letters from "../assets/svg/logo_letters.svg";
import gsap from "gsap";

const NavBar = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    // Seleccionamos el header
    const header = document.querySelector("#header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el scroll ha bajado más de 600px, ocultamos el header al hacer scroll hacia abajo
      if (currentScrollY > 600) {
        if (currentScrollY > lastScrollY) {
          console.log("arriba");
          // Si el scroll es hacia abajo, ocultamos el header desplazándolo hacia arriba
          gsap.to("#header", { y: -100, duration: 0.3, ease: "power2.out" });
        } else {
          console.log("abajo");
          // Si el scroll es hacia arriba, mostramos el header
          gsap.to("#header", { y: 0, duration: 0.3, ease: "power2.in" });
        }
      }

      lastScrollY = currentScrollY;
    };

    // Agregar el listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Añadimos un listener para manejar el evento de resize
    const handleResize = () => {
      // Recalculamos el aspecto del viewport si es necesario
      observer.disconnect();
      observer.observe(header);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed backdrop-blur flex z-50 transition-transform  justify-between items-center top-0 left-0 right-0 px-5 pt-6 pb-4 h-auto w-full"
    >
      <img src={logo_circle} alt="logo-circle" className="h-12"></img>
      <div className="text-base text-dark_blue flex  ">
        <a className="text-inherit hover:te</div>xt-dark_grey mr-4" href="#">
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
