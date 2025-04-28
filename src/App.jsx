import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedBackground from "./components/Background/Background";
import Preloader from "./components/Preloader";

function App() {
  const [isPreloading, setIsPreloading] = useState(true); // Estado para manejar la visibilidad del preloader

  useEffect(() => {
    // Simula que la carga ha finalizado después de 3 segundos
    const timeoutId = setTimeout(() => {
      setIsPreloading(false);
    }, 3500); // El tiempo aquí puede ajustarse según el tiempo que dure tu animación

    return () => clearTimeout(timeoutId); // Limpia el timeout si el componente se desmonta
  }, []);

  return (
    <ReactLenis options={{ duration: 0.7 }} root>
      <AnimatedBackground />
      <Home isPreloading={isPreloading} />
      <Preloader isPreloading={isPreloading} />
    </ReactLenis>
  );
}

export default App;
