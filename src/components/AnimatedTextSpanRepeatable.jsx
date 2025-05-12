import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedTextSpanRepeatable = ({
  children,
  parts = 1,
  className = "",
  isActive = true
}) => {
  const containerRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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

    let visible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;

        if (visible && isActive) {
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
              delay: index * 0.3,
              overwrite: "auto"
            });
          });
        } else {
          gsap.to(animatedWords, { y: "100%", duration: 0.1 });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      splitInstance.current?.revert?.();
    };
  }, [children, parts, isActive]);

  return (
    <span
      ref={containerRef}
      className={`inline-block align-bottom ${className}`}
    >
      {children}
    </span>
  );
};

export default AnimatedTextSpanRepeatable;
