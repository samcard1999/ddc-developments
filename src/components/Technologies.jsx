import { Accordion } from "@radix-ui/react-accordion";
import React from "react";
import { Progress } from "./ui/progress";
import AccordionDemo from "./Accordion/Accordion2";
import AccordionContent from "./Accordion/AccordionContent";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="w-full lg:h-screen h-[150vh] relative flex flex-col justify-start items-start lg:mx-24 lg:gap-8 lg:my-24"
    >
      <div className="absolute lg:absolute lg:justify-end flex top-0 right-0 lg:inset-auto lg:w-[34%] gap-4">
        <h1 className="text-4xl w-max lg:text-5xl text-right top-10 right-12 absolute lg:inset-auto lg:relative">
          Our Areas <br />
          and <b>Technologies</b>
        </h1>
        <div
          style={{ height: "7rem", width: "5px" }}
          className="bg-dark_blue rounded-full absolute top-10 right-8 lg:inset-auto lg:relative"
        ></div>
      </div>

      <AccordionContent />
    </section>
  );
};

export default Technologies;
