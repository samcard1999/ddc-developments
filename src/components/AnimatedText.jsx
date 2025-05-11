import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedTextSpan = ({ children, parts = 1, className = "" }) => {
  const containerRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Aplicar SplitType sobre los elementos ya renderizados (incluye <strong>)
    splitInstance.current = new SplitType(el, { types: "words" });

    const originalWords = el.querySelectorAll(".word");

    originalWords.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.lineHeight = "normal";
      wrapper.style.verticalAlign = "bottom";

      word.style.display = "inline-block";
      word.style.whiteSpace = "nowrap";

      word.parentNode.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    const animatedWords = el.querySelectorAll(".word");

    gsap.set(animatedWords, { y: "100%" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const groupSize = Math.ceil(animatedWords.length / parts);
          const groups = Array.from({ length: parts }, (_, i) =>
            Array.from(animatedWords).slice(i * groupSize, (i + 1) * groupSize)
          );

          groups.forEach((group, index) => {
            gsap.to(group, {
              y: "0%",
              ease: "power4.out",
              duration: 0.8,
              stagger: 0.1,
              delay: index * 0.3
            });
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      splitInstance.current?.revert?.();
    };
  }, [children, parts]);

  return (
    <span
      ref={containerRef}
      className={`inline-block align-bottom ${className}`}
    >
      {children}
    </span>
  );
};

export default AnimatedTextSpan;
