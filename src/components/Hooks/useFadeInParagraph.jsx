import { useEffect } from "react";
import gsap from "gsap";

const useFadeInParagraphs = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".fade-in-on-scroll");
    const tl = gsap.timeline();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              duration: 1,
              ease: "power1.out",
              onComplete: () => observer.unobserve(el)
            });
          }
        });
      },
      { threshold: 1 }
    );

    // Establece opacidad inicial solo si está fuera de viewport
    paragraphs.forEach((p) => {
      const rect = p.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!isVisible) {
        gsap.set(p, { opacity: 0 });
      }
      observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);
};

export default useFadeInParagraphs;
