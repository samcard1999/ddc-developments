import { Accordion } from "@radix-ui/react-accordion";
import React from "react";
import { Progress } from "./ui/progress";
import AccordionDemo from "./Accordion/Accordion2";
import AccordionContent from "./Accordion/AccordionContent";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="w-full h-screen relative flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl text-right top-10 right-12 absolute">
        Our Areas <br />
        and <b>Technologies</b>
      </h1>
      <div
        style={{ height: "7rem", width: "5px" }}
        className="bg-dark_blue rounded-full absolute top-10 right-8 "
      ></div>
      <AccordionContent />
    </section>
  );
};

export default Technologies;
