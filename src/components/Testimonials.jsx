import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full h-auto relative">
      <div className="testimonials_wrapper p-6 flex flex-col gap-16">
        <div className="flex gap-4 items-center justify-end">
          <h1 className="text-right">
            Some opinions from
            <br /> our <b>clients</b>
          </h1>
          <div
            style={{ height: "10rem", width: "5px" }}
            className="bg-dark_blue rounded-full  "
          ></div>
        </div>
        <div className="horizontal_testimonial flex flex-col gap-1 text-left items-start justify-center relative w-full">
          <img
            loading="lazy"
            src="assets/testimonials/testimonial_1.jpeg"
            alt="testimonial_1"
          />
          <h2>
            <b>Brandon</b> Vega
          </h2>
          <h3>
            <b>Operations Lead, General Entropy</b>
          </h3>
          <h3>
            <b>27-10-24</b>
          </h3>
          <p>
            <b>“ </b>I was really impressed with the way DDC Developments
            handled everything. From the first conversation to everything in
            between, they were very helpful and knowledgable.<b> ”</b>
          </p>
        </div>
        <div className="vertical_testimonial flex flex-col  text-right items-end justify-center relative w-full">
          <img
            loading="lazy"
            src="assets/testimonials/testimonial_3.jpeg"
            alt="testimonial_2"
          />
          <h2>
            <b>Crhis</b> Wey
          </h2>
          <h3>
            <b>Founder and CEO, Fair Market Barn</b>
          </h3>
          <h3>
            <b>04-01-23</b>
          </h3>
          <p>
            <b>“ </b> DDC Developments was the missing piece to my puzzle. From
            start to finish, they solved every problem and helped us achieve our
            goals in the most professional way possible.and knowledgable.{"   "}
            <b> ”</b>
          </p>
        </div>
        <div className="horizontal_testimonial last_testimonial flex flex-col  text-left items-start justify-center relative w-full">
          <img
            loading="lazy"
            src="assets/testimonials/testimonial_2.jpeg"
            alt="testimonial_3"
          />
          <h2>
            <b>Crhis</b> Wey
          </h2>
          <h3>
            <b>Founder and CEO, Fair Market Barn</b>
          </h3>
          <h3>
            <b>04-01-23</b>
          </h3>
          <p>
            <b>“ </b>DDC Developments was the missing piece to my puzzle. From
            start to finish, they solved every problem and helped us achieve our
            goals in the most professional way possible.and knowledgable.
            <b> ”</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
