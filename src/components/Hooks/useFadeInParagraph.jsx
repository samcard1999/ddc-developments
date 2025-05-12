import { useEffect } from "react";
import gsap from "gsap";

const useFadeInParagraphs = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".fade-in-on-scroll");
    // Reiniciar estado visual antes de observar (por si Safari o caché)
    paragraphs.forEach((p) => {
      gsap.set(p, { opacity: 0.1 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              duration: 0.75,
              ease: "power1.out",
              overwrite: "auto",
              onComplete: () => observer.unobserve(el)
            });
          }
        });
      },
      { threshold: 0.7 }
    );

    // Observar todos los párrafos
    paragraphs.forEach((p) => {
      observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);
};

export default useFadeInParagraphs;
