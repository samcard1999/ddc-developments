import React from "react";

const Investments = () => {
  return (
    <section className="min-h-screen w-full flex gap-3 z-10 pt-20 pb-4 px-8 ">
      <div className="flex flex-col gap-3 h-full w-[65%]">
        <div className="bento_card flex flex-col h-full w-full gap-16 justify-between relative">
          <h1 className="text-dark_blue text-5xl font-bold">
            Why Invest with DDC <br />
            Developments?
          </h1>

          <h2 className="text-dark_blue absolute right-0 bottom-0 p-6 text-2xl underline underline-offset-8">
            Download <strong>PDF</strong>
          </h2>
        </div>
        <div className="flex gap-3 items-stretch">
          <div className="bento_card flex flex-col gap-3 w-1/2">
            <img
              className="w-full h-auto"
              alt="ROI.svg"
              src="assets/investments/ROI.svg"
            />
            <h1 className="font-bold text-6xl text-dark_blue">30%</h1>
            <h2 className="font-bold">Lower Costs - Maximized ROI</h2>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div className="bento_card flex flex-col gap-6">
              <h1 className="text-dark_blue text-xl text-left">
                Faster <b>Returns</b>
              </h1>
              <img
                src="assets/investments/faster_returns.svg"
                alt="faster_returns.svg"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bento_card">
              <h1 className="text-dark_blue text-2xl text-center">
                Proven <b>Structural Strength</b> Durable, reliable assets
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bento_card flex flex-col gap-3 h-full w-[35%] relative">
        <h1 className="text-dark_blue text-3xl font-bold text-left leading-10 tracking-[0.2rem]">
          Smart, Scalable entry <br />
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
        <div className="flex gap-8 mt-6">
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
    </section>
  );
};

export default Investments;
