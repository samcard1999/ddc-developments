import React from "react";
import CountUp from "react-countup";

const BentoStatCard = ({ number, suffix = "", prefix = "", label }) => {
  return (
    <div className="rounded-2xl w-[30vw] md:w-[40vw]  aspect-square p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#162d57] to-[#dcdfe2] shadow-lg">
      <div className="text-5xl md:text-6xl font-bold text-dark_blue">
        <CountUp
          end={number}
          duration={9.5}
          separator=","
          prefix={prefix}
          suffix={suffix}
        />
      </div>
      <p className="mt-4 text-xl md:text-2xl text-[#070f1d]">{label}</p>
    </div>
  );
};

export default BentoStatCard;
