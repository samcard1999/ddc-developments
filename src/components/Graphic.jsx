import React from "react";

const Graphic = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-dark_blue relative text-white_gray text-xs flex flex-col gap-4">
        <h3 className="absolute top-14 left-12">DDC Modular Construction</h3>
        <h3 className="absolute bottom-20 left-12">Traditional Construction</h3>
        <h3 className="absolute top-28 left-12">
          Project <br />
          Funding
        </h3>
        <h3 className="absolute bottom-6 left-24">
          Project
          <br /> Funding
        </h3>
        <svg className="w-full h-fit -mb-16">
          <g className="flex flex-row-reverse gap-0">
            <line
              x1="50"
              y1="100"
              x2="100"
              y2="100"
              stroke="red"
              strokeWidth="4"
            />
            <circle cx="50" cy="100" r="6" fill="white" />
          </g>
          <line
            x1="100"
            y1="100"
            x2="150"
            y2="100"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="150"
            y1="100"
            x2="1050"
            y2="-220"
            stroke="green"
            strokeWidth="4"
          />
        </svg>
        <svg className="w-full h-fit">
          <g className="flex flex-row-reverse gap-0">
            <line
              x1="50"
              y1="100"
              x2="220"
              y2="100"
              stroke="red"
              strokeWidth="4"
            />
            <circle cx="50" cy="100" r="6" fill="white" />
          </g>
          <line
            x1="220"
            y1="100"
            x2="350"
            y2="100"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="350"
            y1="100"
            x2="1050"
            y2="-220"
            stroke="green"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Graphic;
