import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import slides from "../data/slides.js";
const Projects = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const bgRef = useRef(null);
  const cardImageRef = useRef(null);
  const indexRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      const images = bgRef.current.children; // Accede a los hijos solo si bgRef.current no es null
      const cardImages = cardImageRef.current.children;
      const paragraph = paragraphRef.current.children;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          end: "+400% ",
          pin: true,
          pinSpacing: true,
          //markers: true,
          scrub: 0.8
        }
      });

      const paragraphLength = [0];
      const lengthPx = [];
      for (let i = 0; i < paragraph.length; i++) {
        lengthPx.push(paragraph[i].offsetHeight);
        const lengthPercentage =
          (paragraph[i].offsetHeight / paragraphRef.current.offsetHeight) * 100;

        paragraphLength.push(lengthPercentage + (paragraphLength[i] || 0));
      }

      const animateCardElements = (index, direction) => {
        const translateDirection = direction === "up" ? -100 : 100,
          indexDirection = direction === "up" ? index + 1 : -index;
        const CalcY = indexDirection * (translateDirection / images.length);

        indexRef.current.style.transform = `translateY(${CalcY}%)`;
        headingRef.current.style.transform = `translateY(${CalcY}%)`;
        paragraphRef.current.style.transform = `translateY(${-paragraphLength[
          index + (direction === "down" ? 0 : 1)
        ]}%)`;
        console.log(lengthPx);
        paragraphRef.current.parentElement.style.height = `${
          lengthPx[index + (direction === "down" ? 0 : 1)]
        }px`;
      };

      const tlWithoutScrub = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "-40% top",
          end: "top top"
          //markers: true
        }
      });
      const tlWithScrub = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "-40% top",
          end: "top top",
          scrub: 0.8
        }
      });

      gsap.set(".project__card", {
        y: "500px"
      });
      gsap.set(".bg__projects", {
        // transform: "translate(0%, -30%)"
      });
      tlWithoutScrub.to(".project__card", {
        y: "0px",
        duration: 1
      });
      tlWithScrub.to(".bg__projects", {
        //transform: "translate(0%, 0%)",
        //scrub: true,
        //ease: "none"
      });

      for (let i = 0; i < images.length; i++) {
        gsap.set(cardImages[i], {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "none",
          zIndex: images.length - i
        });
        gsap.set(images[i], {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "none",
          scale: 1.1,
          zIndex: images.length - i
        });
        if (i < images.length - 1) {
          tl.to(
            images[i],
            {
              clipPath: "inset(0% 0% 100% 0%)"
            },
            "+=0.1"
          );
          tl.to(
            images[i],
            {
              onComplete: () => animateCardElements(i, "up")
            },
            "<=-50%"
          );
          tl.to(
            images[i],
            {
              onReverseComplete: () => animateCardElements(i, "down")
            },
            "<=50%"
          );
          tl.to(
            cardImages[i],
            {
              clipPath: "inset(0% 0% 100% 0%)"
            },
            "<"
          );
          tl.to(
            [images[i], images[i + 1]],
            {
              scale: "1.15",
              filter: "blur(1px)"
            },
            "<"
          );
        }
      }
    }
  }, []);

  return (
    <section id="projects" className="h-screen w-full relative overflow-hidden">
      <div className="keep__scrolling absolute bottom-6 z-10 w-full">
        <h2 className="text-center text-dark_grey text-lg">
          ( Keep Scrolling )
        </h2>
      </div>
      <div className="projects__heading absolute flex items-center justify-center gap-4 top-6 z-10 w-full">
        <svg
          width="13"
          height="16"
          viewBox="0 0 13 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z"
            fill="#5e6673"
          ></path>
        </svg>
        <h2 className="text-center text-dark_grey text-xl">Projects</h2>
      </div>
      <div className="project__card z-10 bg-white_gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[34rem] rounded-xl">
        <div className="project__card__container  relative flex flex-col gap-8 p-6">
          <div className="project__card__index  h-6 overflow-hidden flex items-start gap-1 justify-center">
            <div ref={indexRef} className="project__card__index__container ">
              <span>01 </span>
              <span>02 </span>
              <span>03 </span>
              <span>04 </span>
            </div>
            <span>- 04</span>
          </div>
          <div className="project__card__headding h-8 text-center overflow-hidden">
            <div ref={headingRef} className="project__card__heading__container">
              <h1>Villa Atlantico</h1>
              <h1>Villa Dorticos</h1>
              <h1>Villa Nukes</h1>
              <h1>Villa Guajira</h1>
            </div>
          </div>
          <div
            ref={cardImageRef}
            id="scrollImage"
            className="project__card__image relative w-full h-[13rem] "
          >
            <img
              src="assets/projects/bg/bg__3.jpeg"
              alt="image__3"
              className="image__3"
            />

            <img
              src="assets/projects/bg/bg__1.jpeg"
              alt="image__1"
              className="image__1"
            />
            <img
              src="assets/projects/bg/bg__2.jpeg"
              alt="image__2"
              className="image__2"
            />
            <img
              src="assets/projects/bg/bg__4.jpeg"
              alt="image__4"
              className="image__4"
            />
          </div>
          <div className="project__card__paragraph h-[6rem] text-center overflow-hidden">
            <div
              ref={paragraphRef}
              className="project__card__paragraph__container border-l border-dark_blue"
            >
              <p>
                This modern home harmonizes with its natural surroundings
                through a minimalist exterior, clean lines, and earthy tones.
                Wooden accents and dark textures add elegance.
              </p>
              <p>
                Villa Guajira is a modern duplex in Miami, offering clean lines,
                warm textures, and tropical landscaping. Its design blends
                indoor-outdoor living with private pools, luxurious interiors,
                and a serene.
              </p>
              <p>
                Villa Nukes embraces calm sophistication through clean design
                and natural elegance.
              </p>
              <p>
                Villa Dorticos blends bold geometry and organic softness. A
                dark, elegant façade contrasts with natural wood and lush
                greenery. Inside, expansive layouts, warm tones, and curated
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bgRef}
        className="bg__projects !absolute overflow-hidden top-0 left-0 right-0 bottom-0"
      >
        <img
          className=" mask__image bg__3"
          alt="bg__3"
          src="assets/projects/bg/bg__3.jpeg"
        ></img>

        <img
          className=" bg__1 "
          alt="bg__1"
          src="assets/projects/bg/bg__1.jpeg"
        ></img>
        <img
          className=" bg__2 "
          alt="bg__2"
          src="assets/projects/bg/bg__2.jpeg"
        ></img>
        <img
          className="  bg__4"
          alt="bg__4"
          src="assets/projects/bg/bg__4.jpeg"
        ></img>
      </div>
    </section>
  );
};

export default Projects;
