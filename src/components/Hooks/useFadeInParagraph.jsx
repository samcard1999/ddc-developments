import { useEffect } from "react";
import gsap from "gsap";

const useFadeInParagraphs = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".fade-in-on-scroll");

    // Establece opacidad inicial
    gsap.set(paragraphs, { opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              duration: 0.7,
              ease: "power1.out"
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    paragraphs.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
  }, []);
};

export default useFadeInParagraphs;
