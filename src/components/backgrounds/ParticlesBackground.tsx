import { useEffect, useState } from 'react';
import { vmin } from '../../utils/utils';
import Particles from 'react-particles-js';
import './styles/particles.css';
import { icons } from '../education/data';
import icon_react1 from '../../images/icon_react1.png';
import icon_data from '../../images/icon_data.png';
//import icon_typescript from '../../images/icon_typescript.png';
import icon_sass from '../../images/icon_sass.png';
import icon_mobx from '../../images/icon_mobx.png';
import icon_vsc from '../../images/icon_vsc.png';

const fe_icons = Object.values([icons.css, icons.html, icons.javascript, icons.firebase])
  .map(({ icon }) => icon)
  .concat([icon_react1, icon_sass, icon_react1, icon_mobx, icon_vsc])
  .map((src) => ({ src }));

const be_icons = Object.values([icons.express, icons.mongodb, icons.nodejs])
  .map(({ icon }) => icon)
  .concat([/*icon_typescript,*/ icon_data])
  .map((src) => ({ src }));

/*const allIcons = Object.values(icons)
  .map(({ icon }) => icon)
  .concat([icon_react1, icon_data, icon_typescript, icon_sass, icon_mobx, icon_vsc])
  .map((src) => ({ src }));*/

const allIcons = [...fe_icons, ...be_icons];

const getParticleSize = (p: number) => vmin(p);

const ParticlesBackground = () => {
  const [particleSize, setParticleSize] = useState(getParticleSize(1));

  useEffect(() => {
    const refreshParticleSize = (() => {
      let timer: any;
      return () => {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => setParticleSize(getParticleSize(1)), 150);
      };
    })();
    window.addEventListener('resize', refreshParticleSize);
    return () => {
      window.removeEventListener('resize', refreshParticleSize);
    };
  }, []);

  return (
    <Particles
      width="100vw"
      height="100vh"
      className="area-particles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: Math.round(particleSize * 100),
            },
          },
          shape: {
            type: ['image'],
            image: allIcons,
          },
          size: {
            value: particleSize,
            random: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
          },
        },
      }}
    />
  );

  /*return (
    <>
      <Particles
        width="100vw"
        height="100vh"
        className="area-particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: Math.round(particleSize * 100),
              },
            },
            move: {
              speed: 1,
              out_mode: 'out',
            },
            shape: {
              type: ['image'],
              image: be_icons,
            },
            size: {
              value: particleSize,
              random: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
            },
          },
        }}
      />
      <Particles
        width="100vw"
        height="100vh"
        className="area-particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: Math.round(particleSize * 100),
              },
            },

            shape: {
              type: ['image'],
              image: fe_icons,
            },
            size: {
              value: particleSize,
              random: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
            },
          },
        }}
      />
    </>
  );*/
};

export default ParticlesBackground;
