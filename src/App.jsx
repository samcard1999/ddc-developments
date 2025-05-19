import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedBackground from "./components/Background/Background";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import Investments from "./components/Investments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import Investments_mobile from "./components/Investments_mobile";

function App() {
  const [isPreloading, setIsPreloading] = useState(true); // Estado para manejar la visibilidad del preloader
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    // Simula que la carga ha finalizado después de 3 segundos
    const timeoutId = setTimeout(() => {
      setIsPreloading(false);
    }, 100); // El tiempo aquí puede ajustarse según el tiempo que dure tu animación

    return () => clearTimeout(timeoutId); // Limpia el timeout si el componente se desmonta
  }, []);

  return (
    <ReactLenis options={{ duration: 0.9 }} root>
      <AnimatedBackground />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home isPreloading={isPreloading} />} />
          <Route
            path="/investments"
            element={isMobile ? <Investments_mobile /> : <Investments />}
          />
        </Routes>
      </Router>

      {/* <Preloader isPreloading={isPreloading} /> */}
    </ReactLenis>
  );
}

export default App;
