import Particles from 'react-tsparticles';
import React from 'react';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async main => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = container => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'white',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 5,
            },
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          color: {
            value: '#000000FF',
          },
          links: {
            color: '#000000FF',
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 1000,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
