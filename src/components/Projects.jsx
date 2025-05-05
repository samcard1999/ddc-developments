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
    if (bgRef.current && window.innerWidth < 600) {
      const images = bgRef.current.children; // Accede a los hijos solo si bgRef.current no es null
      const cardImages = cardImageRef.current.children;
      const paragraph = paragraphRef.current.children;
      let waitingForAnimation2 = false;
      let isReversing = false; // bandera para detectar dirección
      let currentSection = 0;
      let triggeredSection = null;
      const animationArray = [];
      const nextAnimationArray = [];
      const animationTl = gsap.timeline({ paused: true });

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
        // paragraphRef.current.style.transform = `translateY(${-paragraphLength[
        //   index + (direction === "down" ? 0 : 1)
        // ]}%)`;
        // paragraphRef.current.parentElement.style.height = `${
        //   lengthPx[index + (direction === "down" ? 0 : 1)]
        // }px`;
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

      const tlParagraph = gsap.timeline();

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
        gsap.set(`.desc__${i === 3 ? 3 : i + 1} .masking__text div`, {
          transform: "translate(0%, 130%)"
        });

        if (i < images.length - 1) {
          const animation = gsap.to(`.desc__${i} .masking__text div`, {
            transform: "translate(0%, -130%)",
            stagger: 0.05,
            duration: 0.1,
            paused: true,
            ease: "power1.inOut",
            onComplete: () => {
              animation2.play();
            },
            onReverseComplete: () => {
              animation2.reverse();
            }
          });
          const animation2 = gsap.to(
            `.desc__${i === 3 ? 3 : i + 1} .masking__text div`,
            {
              transform: "translate(0%, 0%)",
              stagger: 0.05,
              duration: 0.1,
              paused: true
            }
          );

          const animation3 = gsap.to(`.desc__${i} .masking__text div`, {
            transform: "translate(0%, 130%)",
            stagger: 0.1,
            duration: 0.5,
            paused: true,

            onComplete: () => {
              animation4.play();
            }
          });

          const animation4 = gsap.to(
            `.desc__${i === 0 ? 0 : i - 1} .masking__text div`,
            {
              transform: "translate(0%, 0%)",
              stagger: 0.1,
              duration: 0.5,
              paused: true
            }
          );

          animationArray.push(animation);
          nextAnimationArray.push(animation3);
          tl.to(images[i], {
            clipPath: "inset(0% 0% 100% 0%)",
            onComplete: () => {},
            onReverseComplete: () => {}
          });
          tl.to(
            images[i],
            {
              onComplete: () => {
                animateCardElements(i, "up");
                animationArray[i].play();
              }
            },
            "<=-50%"
          );
          tl.to(
            images[i],
            {
              onReverseComplete: () => {
                animateCardElements(i, "down");
                animationArray[i].reverse();
              }
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
    <section
      id="projects"
      className="h-screen w-full relative overflow-hidden lg:flex lg:gap-2 lg:pr-24 lg:justify-between lg:items-center"
    >
      <div className="projects__wrapper lg:hidden relative w-full h-full">
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
        <div className="project__card z-10 bg-[#c2c7cf] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[34rem] rounded-xl">
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
              <div
                ref={headingRef}
                className="project__card__heading__container"
              >
                <h1>Villa Ochoa</h1>
                <h1>Villa Santa Marta</h1>
                <h1>Villa Victor</h1>
                <h1>Villa Esplanade</h1>
              </div>
            </div>
            <div
              ref={cardImageRef}
              id="scrollImage"
              className="project__card__image relative w-full h-[13rem] "
            >
              <img
                loading="lazy"
                src="assets/projects/bg/bg__3.jpeg"
                alt="image__3"
                className="image__3"
              />

              <img
                loading="lazy"
                src="assets/projects/bg/bg__1.jpeg"
                alt="image__1"
                className="image__1"
              />
              <img
                loading="lazy"
                src="assets/projects/bg/bg__2.jpeg"
                alt="image__2"
                className="image__2"
              />
              <img
                loading="lazy"
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
                <div className="desc__0 absolute top-0 left-0 right-0 bottom-0 text-center w-full">
                  <div className="masking__text">
                    <div>This modern home harmonizes with its </div>
                  </div>
                  <div className="masking__text">
                    <div>natural surroundings through a minimalist </div>
                  </div>
                  <div className="masking__text">
                    <div>exterior, clean lines, and earthy tones. </div>
                  </div>
                  <div className="masking__text">
                    <div>Wooden accents and dark textures add </div>
                  </div>
                  <div className="masking__text">
                    <div>elegance.</div>
                  </div>
                </div>
                <div className="desc__1 absolute top-0 left-0 right-0 bottom-0 text-center w-full">
                  <div className="masking__text">
                    <div>Villa Santa Marta is a modern duplex in Miami,</div>
                  </div>
                  <div className="masking__text">
                    <div>offering clean lines, warm textures, and </div>
                  </div>
                  <div className="masking__text">
                    <div> tropical landscaping. Its design blends </div>
                  </div>
                  <div className="masking__text">
                    <div>indoor-outdoor living with private pools,</div>
                  </div>
                  <div className="masking__text">
                    <div>luxurious interiors, and a serene.</div>
                  </div>
                </div>
                <div className="desc__2 absolute top-0 left-0 right-0 bottom-0 text-center w-full">
                  <div className="masking__text">
                    <div>Villa Victor embraces calm sophistication </div>
                  </div>
                  <div className="masking__text">
                    <div>through clean design and natural elegance. </div>
                  </div>
                  <div className="masking__text">
                    <div>Indoor-outdoor living with private pools,</div>
                  </div>
                  <div className="masking__text">
                    <div>luxurious interiors, and a serene.</div>
                  </div>
                </div>
                <div className="desc__3 absolute top-0 left-0 right-0 bottom-0 text-center w-full">
                  <div className="masking__text">
                    <div>Villa Esplanade blends bold geometry and</div>
                  </div>
                  <div className="masking__text">
                    <div> organic softness. A dark, elegant façade</div>
                  </div>
                  <div className="masking__text">
                    <div> contrasts with natural wood and lush</div>
                  </div>
                  <div className="masking__text">
                    <div>greenery. Inside, expansive layouts, warm</div>
                  </div>
                  <div className="masking__text">
                    <div> tones, and curated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={bgRef}
          className="bg__projects !absolute overflow-hidden top-0 left-0 right-0 bottom-0"
        >
          <img
            loading="lazy"
            className=" mask__image bg__3"
            alt="bg__3"
            src="assets/projects/bg/bg__3.jpeg"
          ></img>

          <img
            loading="lazy"
            className=" bg__1 "
            alt="bg__1"
            src="assets/projects/bg/bg__1.jpeg"
          ></img>
          <img
            loading="lazy"
            className=" bg__2 "
            alt="bg__2"
            src="assets/projects/bg/bg__2.jpeg"
          ></img>
          <img
            loading="lazy"
            className="  bg__4"
            alt="bg__4"
            src="assets/projects/bg/bg__4.jpeg"
          ></img>
        </div>
      </div>
      <div className="w-[50%] h-1/2 rounded-2xl rounded-s-none pr-16 py-6 bg-yellow-50 flex items-start gap-2 relative">
        <img
          alt="bg_1"
          src="assets/projects/bg/bg__1.jpeg"
          className="rounded-xl object-cover h-full w-full"
        ></img>
        <button className="text-bold rotate-90 whitespace-nowrap text-2xl absolute top-16 right-[-2rem]">
          Villa Ochoa
        </button>
        <img
          alt="arrow_button"
          src="assets/projects/arrow_projects.svg"
          className="h-8 absolute right-4 bottom-6"
        ></img>
      </div>
      <div className="hidden lg:block text-right">
        <h1 className="font-bold">Explore Our Projects</h1>
        <h2 className="text-2xl text-right">
          Consult the essential data for your
          <br /> next investment
        </h2>
      </div>
    </section>
  );
};

export default Projects;
