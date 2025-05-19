import React from "react";

const Investments_mobile = () => {
  return (
    <section className="min-h-screen w-full h-auto flex gap-3 z-10 pt-20 pb-5 px-5 ">
      <div className="flex flex-col gap-3 h-full">
        <div className="bento_card flex flex-col h-full w-full gap-16 justify-between relative fade-in-on-scroll">
          <h1 className="text-dark_blue text-3xl font-bold">
            Why Invest with DDC <br />
            Developments?
          </h1>

          <h2 className="text-dark_blue  text-2xl underline underline-offset-8">
            Download <strong>PDF</strong>
          </h2>
        </div>
        <div className="bento_card flex flex-col gap-3 fade-in-on-scroll">
          <img
            className="w-full h-auto"
            alt="ROI.svg"
            src="assets/investments/ROI.svg"
          />
          <h1 className="font-bold text-6xl text-dark_blue">30%</h1>
          <h2 className="font-bold">Lower Costs - Maximized ROI</h2>
        </div>
        <div className="bento_card flex flex-col gap-6 fade-in-on-scroll">
          <h1 className="text-dark_blue text-xl text-left">
            Faster <b>Returns</b>
          </h1>
          <img
            src="assets/investments/faster_returns.svg"
            alt="faster_returns.svg"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="bento_card fade-in-on-scroll">
          <h1 className="text-dark_blue text-2xl text-center">
            Proven <b>Structural Strength</b> Durable, reliable assets
          </h1>
        </div>
        <div className="bento_card flex flex-col gap-1 h-auto relative fade-in-on-scroll">
          <h1 className="text-dark_blue text-3xl font-bold text-left leading-10 tracking-[0.2rem]">
            Smart, Scalable Entry <br />
            Points
          </h1>
          <h2 className="text-left text-dark_blue text-2xl">
            Flexible investor models
          </h2>
          <img
            src="assets/investments/flexible_investor.svg"
            alt="flexible_investor.svg"
            className="w-auto h-80 object-fill"
          />
          <div className="flex gap-8 mb-6">
            <img
              src="assets/investments/eco.svg"
              alt="eco.svg"
              className="w-auto h-16"
            />
            <div className="flex flex-col gap-5 text-lg items-center justify-center font-bold">
              <h2>Eco-Conscious Construction</h2>
              <h2>100% recyclable materials</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investments_mobile;
