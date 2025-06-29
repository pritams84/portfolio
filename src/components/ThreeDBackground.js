import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ThreeDBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: '#f0f4ff' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#60a5fa', '#a78bfa', '#34d399', '#fbbf24'] },
          links: {
            color: '#a78bfa',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1.5,
          },
          collisions: { enable: true },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.7 },
          shape: { type: 'circle' },
          size: { value: { min: 3, max: 7 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ThreeDBackground; 