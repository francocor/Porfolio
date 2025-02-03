import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import Preloader from "./Pre";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Proyectos from "./Pages/Proyectos";
import Resume from "./Pages/Resume";
import "./Css/App.css";
import "./Css/style.css";
import Particle from "./Particle";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    console.log("Preloader activo:", load); // Verificar si el preloader se activa
    const timer = setTimeout(() => {
      updateLoad(false);
      console.log("Preloader desactivado"); // Verificar si el preloader se desactiva
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load && <Preloader load={load} />} {/* Muestra el preloader antes de cargar */}
      <Router>
        <Particle />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Proyectos />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
