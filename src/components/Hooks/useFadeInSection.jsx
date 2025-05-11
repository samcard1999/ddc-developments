import { useEffect } from "react";

const useFadeInSection = (
  sectionSelector,
  itemSelector = ".fade-in-on-scroll"
) => {
  useEffect(() => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const items = section.querySelectorAll(itemSelector);

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transition = "opacity 0.7s ease";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el) => {
            el.classList.add("fade-in-visible");
          });
          observer.unobserve(entry.target); // solo una vez por sección
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionSelector, itemSelector]);
};

export default useFadeInSection;
