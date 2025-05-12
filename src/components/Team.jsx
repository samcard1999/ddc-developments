import React, { useEffect, useRef, useState } from "react";
import AnimatedTextSpan from "./AnimatedText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import gsap from "gsap";
import useRepeatableFadeInParagraphs from "./Hooks/useRepeatableFadeInParagraphs";
import AnimatedTextSpanRepeatable from "./AnimatedTextSpanRepeatable";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const employees = [
  {
    name: "Danilo Dominguez",
    role: "CEO and Founder",
    description:
      "Our CEO, Danilo Dominguez, has been dedicating his life to better understanding how we can better connect all real estate industries. From Real Estate Brokerage to Residential & Commercial construction. For him, it's all about the clients' experiences.",
    image: "assets/employees/danilo1.png",
    class: "mt-20 scale-110 translate-x-6"
  },
  {
    name: "Danilo Dominguez Catasus",
    role: "Chief Operating Officer",
    description:
      "A veteran builder, Danilo turns strategy into flawless execution. He fine-tunes procurement, scheduling, and on-site workflows so our modular builds rise faster and safer. His hands-on leadership safeguards cost, quality, and compliance, delivering the operational excellence clients and investors expect from DDC.",
    image: "assets/employees/danilo2.png"
  },
  {
    name: "Israel Gonzalez",
    role: "Senior Business Developer",
    description:
      "Israel opens new doors for DDC. With keen market insight and an investor-first mindset, he scouts opportunities, negotiates strategic partnerships, and builds pipelines that fuel our modular projects. His blend of financial acumen and relationship savvy turns prospects into long-term collaborators who share DDC’s vision.",
    image: "assets/employees/israel.png"
  },
  {
    name: "Alejandro Fonticoba",
    role: "Project Manager",
    description:
      "Alejandro keeps every DDC build on track. From permitting to punch-list, he aligns architects, engineers, and trades, tracking costs and milestones so modules arrive and assemble without delays. His rigorous oversight safeguards budgets and ensures DDC’s signature quality reaches the site as designed.",
    image: "assets/employees/alejandro.png",
    class: "translate-x-6"
  },
  {
    name: "Javi Ferrer",
    role: "Marketing & Brand Director",
    description:
      "Javi turns ideas into stories people remember. Using clear data and fresh creativity, he builds campaigns that show why DDC’s modular projects stand out. From a social-post to an investor pitch, he keeps every detail polished so clients and partners feel the distinction and quality that define DDC.",
    image: "assets/employees/javi.png",
    class: "scale-[1.2] -translate-y-12"
  }
];

const Team = () => {
  const swiperRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      {
        threshold: 0.55 // Puedes ajustar cuánto del carrusel debe estar visible
      }
    );

    if (swiperContainerRef.current) {
      observer.observe(swiperContainerRef.current);
    }

    return () => {
      if (swiperContainerRef.current) {
        observer.unobserve(swiperContainerRef.current);
      }
    };
  }, []);

  const paragraph = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useRepeatableFadeInParagraphs();

  return (
    <section id="team" className="h-auto w-full relative">
      <div
        ref={swiperContainerRef}
        className="team_wrapper  lg:px-20 flex flex-col gap-8"
      >
        <div className="flex gap-4 items-center justify-start pl-6">
          <div
            style={{ height: "7rem", width: "5px" }}
            className="bg-dark_blue rounded-full"
          ></div>
          <h1 className="text-left">
            <AnimatedTextSpan parts={2}>
              Our <b>Team</b>
            </AnimatedTextSpan>
          </h1>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectCoverflow, Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          autoplay={{
            delay: 4500, // milisegundos entre slides
            disableOnInteraction: false // sigue corriendo aunque el usuario interactúe
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 32,
            depth: 320,
            modifier: 3,
            slideShadows: false,
            scale: 0.95
          }}
          className="w-full max-w-screen-xl"
        >
          {employees.map((member, index) => {
            const isActive = index === activeIndex;
            const paragraphRef = useRef(null);
            useRepeatableFadeInParagraphs(isActive, paragraphRef); // ⬅️ le pasamos el ref individual

            return (
              <SwiperSlide key={index}>
                <div className="employee_info text-right lg:text-left flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="image_container lg:order-2 h-[52vh] lg:h-[80vh] lg:mb-24 overflow-hidden">
                    <img
                      loading="eager"
                      src={member.image}
                      alt={member.name}
                      className={`lg:h-full lg:pr-24 ${member.class} `}
                    />
                  </div>
                  <div className="px-6 lg:order-1 lg:max-w-[35vw] lg:text-lg lg:flex lg:flex-col lg:gap-2">
                    <div>
                      <h2>
                        <AnimatedTextSpanRepeatable
                          parts={1}
                          isActive={index === activeIndex}
                        >
                          {member.name}
                        </AnimatedTextSpanRepeatable>
                      </h2>
                      <h3>
                        <AnimatedTextSpanRepeatable
                          parts={2}
                          isActive={index === activeIndex}
                        >
                          {member.role}
                        </AnimatedTextSpanRepeatable>
                      </h3>
                    </div>
                    <p ref={paragraphRef} className="my-4 fade-in-on-scroll-1">
                      {member.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
