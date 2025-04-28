import React from "react";

const Team = () => {
  return (
    <section id="team" className="h-auto w-full relative">
      <div className="team_wrapper p-6 flex flex-col gap-8">
        <div className="flex gap-4 items-center justify-start">
          <div
            style={{ height: "7rem", width: "5px" }}
            className="bg-dark_blue rounded-full  "
          ></div>
          <h1 className="text-left">
            Our <b>Team</b>
          </h1>
        </div>
        <div className="employee_info text-right flex flex-col gap-3">
          <div className="image_container max-h-[42vh] overflow-hidden">
            <img
              loading="lazy"
              src="assets/employees/employee_1.png"
              alt="employee_1"
            ></img>
          </div>
          <div>
            <h2>Danilo Dominguez</h2>
            <h3>CEO and Founder</h3>
          </div>
          <p>
            Our founder, Danilo Dominguez, has been dedicating his life to
            better understanding how we can better connect all real estate
            industries. From Real Estate Brokerage to Residential & Commercial
            construction. For him, it's all about the clients' experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
