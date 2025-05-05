import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const Testimonials = () => {
  // useLayoutEffect(() => {
  //   gsap.utils.toArray(".horizontal_testimonial").forEach((element) => {
  //     gsap.from(element, {
  //       scrollTrigger: {
  //         trigger: element, // Cada elemento será su propio trigger
  //         start: "-120px bottom",
  //         end: "bottom+=50px bottom",
  //         scrub: true,
  //         toggleActions: "play none play none"
  //       },
  //       left: "300px",
  //       bottom: "150px",
  //       opacity: 0.3,
  //       duration: 1.4
  //     });
  //   });

  //   gsap.from(".vertical_testimonial", {
  //     scrollTrigger: {
  //       trigger: ".vertical_testimonial", // Cada elemento será su propio trigger
  //       start: "-120px bottom",
  //       end: "bottom+=50px bottom",
  //       scrub: true,
  //       markers: true,
  //       toggleActions: "play none play none"
  //     },
  //     right: "300px",
  //     bottom: "150px",
  //     opacity: 0.3,
  //     duration: 1.4
  //   });
  // }, []);

  useLayoutEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1 // Trigger when 50% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateX(0)";
          entry.target.style.opacity = "1";
          entry.target.style.transition =
            "transform 0.8s ease, opacity 0.8s ease";
        } else {
          entry.target.style.transform = "translateX(-20px)";
          entry.target.style.opacity = "0";
        }
      });
    };

    const handleIntersection1 = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translate(0)";
          entry.target.style.opacity = "1";
          entry.target.style.transition =
            "transform 0.8s ease, opacity 0.8s ease";
        } else {
          entry.target.style.transform = "translateX(20px)";
          entry.target.style.opacity = "0";
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const observer1 = new IntersectionObserver(
      handleIntersection1,
      observerOptions
    );

    const elements_horizontal = document.querySelectorAll(
      ".horizontal_testimonial"
    );
    const element_vertical = document.querySelectorAll(".vertical_testimonial");

    elements_horizontal.forEach((el) => observer.observe(el));
    element_vertical.forEach((el) => observer1.observe(el));

    // Cleanup: Dejar de observar los elementos al desmontar el componente
    return () => {
      elements_horizontal.forEach((el) => observer.unobserve(el));
      element_vertical.forEach((el) => observer1.unobserve(el));
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full h-auto relative overflow-hidden"
    >
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
        <div className="horizontal_testimonial lg:w-[40%] flex flex-col gap-1 text-left items-start justify-center relative w-full">
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
        <div className="vertical_testimonial flex flex-col  text-right items-end justify-end relative w-full lg:mt-[-24rem]">
          <img
            loading="lazy"
            src="assets/testimonials/testimonial_3.jpeg"
            alt="testimonial_2"
            className="lg:w-[50%]"
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
          <p className="lg:w-1/3">
            <b>“ </b> DDC Developments was the missing piece to my puzzle. From
            start to finish, they solved every problem and helped us achieve our
            goals in the most professional way possible.and knowledgable.{"   "}
            <b> ”</b>
          </p>
        </div>
        <div className="horizontal_testimonial last_testimonial flex flex-col w-full lg:w-[50%] lg:mt-[-10rem] text-left items-start justify-center relative ">
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
