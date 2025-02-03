import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main); // Carga el motor completo
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: { enable: true, speed: 2, direction: "none", outMode: "out" },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                    modes: { repulse: { distance: 100 } },
                },
                detectRetina: true,
            }}
        />
    );
}

export default Particle;