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
        "Sunt voluptate anim eiusmod consectetur magna anim sunt ut velit. In officia labore est voluptate officia dolore sunt commodo duis et. Minim amet sint et fugiat incididunt ipsum ex sint do labore veniam. Fugiat magna ea voluptate proident excepteur veniam aliqua esse dolor.",
      number: "01"
    },
    {
      title: "Augmented Reality",
      answer:
        "Eiusmod fugiat laborum laborum cupidatat exercitation enim adipisicing exercitation. Sit adipisicing consequat Lorem exercitation ipsum cupidatat eu fugiat qui. Duis duis est cillum exercitation in id est qui laboris. Est enim elit do occaecat voluptate.",
      number: "02"
    },
    {
      title: "Software BIM",
      answer:
        "Labore Lorem ex et laboris dolore elit eiusmod dolor esse. Nisi aliqua ea pariatur ipsum anim irure quis anim cupidatat tempor consectetur ut nisi ut. Aute ex nostrud voluptate cillum. Est id proident adipisicing esse aliqua enim est id ullamco qui. Consequat irure adipisicing tempor incididunt in duis quis officia dolor ad excepteur. Lorem et magna anim exercitation cillum culpa reprehenderit. Elit in aute officia quis Lorem in excepteur et id amet eu excepteur sunt.",
      number: "03"
    },
    {
      title: "Real Estate Tokenization",
      answer:
        "Veniam reprehenderit commodo veniam dolor. Et ex labore pariatur sint irure exercitation ex quis. Ex velit elit ad velit commodo veniam magna dolore eu est. Fugiat nisi eu in do.",
      number: "04"
    },
    {
      title: "The DDC App",
      answer:
        "Ex ad anim esse non. Aliquip tempor incididunt est ea veniam. Sint eu veniam velit minim deserunt proident eiusmod enim nulla aliqua incididunt sunt.",
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

  // Configura el Intersection Observer
  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Si el contenedor está en el viewport, activa el autoplay
        autoplayRef.current = true;
        autoplay();
      } else {
        // Si el contenedor sale del viewport, pausa el autoplay
        autoplayRef.current = false;
        clearInterval(intervalRef.current); // Limpia el autoplay
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null, // Usa el viewport como referencia
      threshold: 0.1 // Activa cuando el 10% del contenedor sea visible
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    // Limpia el observer y los temporizadores al desmontar el componente
    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
      clearTimeout(timeoutRef.current); // Limpia el timeout
      clearInterval(intervalRef.current); // Limpia el intervalo
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-1/4">
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
  );
};

export default AccordionContainer;
