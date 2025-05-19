import React, { useEffect, useRef, useState } from "react";

const Accordion = ({ title, answer, number, isOpen, onToggle }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Solo una vez
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } py-2 w-full px-4 lg:max-w-[35%]`}
    >
      <button
        onClick={onToggle}
        className={`flex justify-between items-center w-full border-b text-6xl ${
          isOpen ? "border-dark_blue" : "border-gray-400"
        } bg-transparent`}
      >
        <svg
          className="fill-dark_blue shrink-0 ml-2"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
        <div className="flex items-end">
          <span
            className={`text-xl pb-1 mr-[-.1rem] transition-all duration-700 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-45"
            }`}
          >
            <b>{title}</b>
          </span>
          <span
            className={`text-[3.5rem] transition-all duration-700 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-45"
            }`}
          >
            <b>{number}</b>
          </span>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-700 ease-in-out text-dark_blue text-md ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>

        <div className="lg:hidden overflow-hidden flex items-center justify-center mt-4">
          <img
            src={`assets/technologies/bg__${number}.gif`}
            alt={`${number}.gif`}
            className={`object-cover overflow-hidden ${
              isOpen ? "max-h-none" : "max-h-0"
            } w-[75vw] h-auto  rounded-xl object-contain`}
          />
        </div>
      </div>

      <div className="hidden lg:block absolute lg:left-1/2 lg:top-[20%]">
        <img
          src={`assets/technologies/bg__${number}.webp`}
          alt={`${number}.webp`}
          className={`object-cover overflow-hidden w-auto h-[60vh] ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700 object-fill`}
        />
      </div>
    </div>
  );
};

export default Accordion;
