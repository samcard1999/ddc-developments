import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimatedTextLinesOnChange = ({ children, parts = 1, className = "" }) => {
  const containerRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Reset + dividir líneas
    splitInstance.current?.revert?.();
    splitInstance.current = new SplitType(el, {
      types: "lines",
      lineClass: "line"
    });

    const lines = el.querySelectorAll(".line");
    gsap.set(lines, { opacity: 0, y: 30 });

    const groupSize = Math.ceil(lines.length / parts);
    const groups = Array.from({ length: parts }, (_, i) =>
      Array.from(lines).slice(i * groupSize, (i + 1) * groupSize)
    );

    groups.forEach((group, index) => {
      gsap.to(group, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.8,
        stagger: 0.1,
        delay: index * 0.3,
        overwrite: "auto"
      });
    });

    return () => {
      splitInstance.current?.revert?.();
    };
  }, [children, parts]); // ⚠️ Re-anima cada vez que cambia `children`

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-normal leading-snug ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedTextLinesOnChange;
