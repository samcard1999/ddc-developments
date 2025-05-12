import React, { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion2";

const AccordionContainer = () => {
  const [openAccordion, setOpenAccordion] = useState(null); // Estado para rastrear el acordeón abierto
  const autoplayRef = useRef(true); // Controla si el autoplay está activo
  const containerRef = useRef(null); // Referencia al contenedor del acordeón
  const observerRef = useRef(null); // Referencia al Intersection Observer
  const timeoutRef = useRef(null); // Referencia para el timeout
  const intervalRef = useRef(null); // Referencia para el intervalo del autoplay

  const data = [
    {
      title: "Modular System",
      answer:
        "Our proprietary modular construction system ensures faster execution, higher precision, and superior quality. Each component is prefabricated and assembled with efficiency, reducing construction time and environmental impact—redefining how real estate is developed in Florida.",
      number: "01"
    },
    {
      title: "Augmented Reality",
      answer:
        "We use Augmented Reality to offer immersive project previews, allowing clients and investors to visualize spaces before construction begins. This technology improves decision-making and creates a stronger emotional connection with every property.",
      number: "02"
    },
    {
      title: "Software BIM",
      answer:
        "Through BIM (Building Information Modeling), DDC guarantees project accuracy, cost control, and streamlined collaboration. This digital model centralizes architectural, structural, and MEP data—ensuring a smarter, more transparent construction process.",
      number: "03"
    },
    {
      title: "Real Estate Tokenization",
      answer:
        "We’re pioneering real estate tokenization to democratize access to investment. By converting property value into digital tokens, we make it easier for global investors to participate with transparency, liquidity, and lower entry barriers.",
      number: "04"
    },
    {
      title: "The DDC App",
      answer:
        "Our mobile app empowers investors to track progress, manage documents, and monitor returns—all in real-time. It’s your direct line to every DDC project, designed to make property investment simple, secure, and accessible.",
      number: "05"
    }
  ];

  // Función asíncrona para manejar el autoplay
  const autoplay = async () => {
    clearInterval(intervalRef.current); // Limpia cualquier intervalo previo
    intervalRef.current = setInterval(() => {
      setOpenAccordion((prev) => {
        if (!autoplayRef.current) return prev; // Detiene el autoplay si está desactivado
        const nextIndex =
          prev === null || prev === data.length - 1 ? 0 : prev + 1;
        return nextIndex;
      });
    }, 4000); // Cambia cada 4 segundos
  };

  // Pausa el autoplay durante 5 segundos si el usuario interactúa
  const handleUserInteraction = (index) => {
    autoplayRef.current = false; // Pausa el autoplay
    clearTimeout(timeoutRef.current); // Limpia cualquier timeout previo
    clearInterval(intervalRef.current); // Limpia el autoplay
    setOpenAccordion(openAccordion === index ? null : index); // Alterna el estado del acordeón
    timeoutRef.current = setTimeout(() => {
      autoplayRef.current = true; // Reactiva el autoplay después de 5 segundos
      autoplay(); // Reinicia el autoplay
    }, 5000);
  };

  useEffect(() => {
    let hasAutoplayStarted = false;

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (!hasAutoplayStarted) {
          setOpenAccordion(0); // abre el primer acordeón una sola vez
          hasAutoplayStarted = true;
        }

        autoplayRef.current = true;
        autoplay();
      } else {
        autoplayRef.current = false;
        clearInterval(intervalRef.current);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.6 // Se activa cuando el 60% del contenedor está visible
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex gap-16">
      <div
        ref={containerRef}
        className="absolute top-1/4 lg:top-[30%] lg:max-w-max"
      >
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            answer={item.answer}
            number={item.number}
            isOpen={openAccordion === index} // Verifica si este acordeón está abierto
            onToggle={() => handleUserInteraction(index)} // Maneja la interacción del usuario
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionContainer;
