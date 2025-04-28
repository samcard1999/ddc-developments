import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedBackground from "./components/Background/Background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ReactLenis options={{ duration: 0.7 }} root>
      <AnimatedBackground />
      <Home />
    </ReactLenis>
  );
}

export default App;
