import React from "react";
import Particles from "react-tsparticles";

const Background = () => (
  <Particles
    id="tsparticles"
    options={{
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 60 },
        color: { value: "#39ff14" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
      }
    }}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: -10
    }}
  />
);

export default Background;
