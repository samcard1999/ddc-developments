import { useEffect } from "react";
import gsap from "gsap";

const useRepeatableFadeInParagraphs = (isActive = true, ref) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    gsap.set(el, { opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isActive) {
          gsap.to(el, {
            opacity: 1,
            duration: 0.75,
            ease: "power1.in",
            overwrite: "auto"
          });
        } else {
          gsap.to(el, {
            opacity: 0,
            duration: 0.1,
            ease: "power1.in",
            overwrite: "auto"
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isActive, ref]);
};

export default useRepeatableFadeInParagraphs;
