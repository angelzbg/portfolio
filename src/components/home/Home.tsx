import React, { useState } from 'react';
import './styles/home.css';
import devData from './data';
const details = devData.details.slice().reverse();

const Home = () => {
  const [bofeHover, setBofeHover] = useState(-1);
  return (
    <center>
      <div className="home-wrapper">
        <div className="text-shadow" style={{ color: 'var(--lightest)' }}>
          Plovdiv, Bulgaria
        </div>
        <div className="text-shadow" style={{ color: 'var(--light)', fontSize: '80%' }}>
          *insert something boring here*
        </div>
        <br />
        <div className="text-shadow" style={{ color: 'var(--lightest)', fontSize: '105%' }}>
          My passion is <b>back of the front end</b> web development
        </div>
        <br />
        <div className="home-data-wrapper">
          <div className="home-menu" onMouseLeave={() => setBofeHover(-1)}>
            {details.map(({ title, information }, i) => (
              <div
                key={`home-menu-item-${i}`}
                className={bofeHover === i ? 'home-menu-item-hovered' : 'home-menu-item'}
                onMouseEnter={() => setBofeHover(i)}
                onMouseLeave={() => setBofeHover(-1)}
                style={
                  i === 0
                    ? {
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        ...(i === bofeHover - 1 ? { borderBottom: 'none' } : {}),
                      }
                    : i === details.length - 1
                    ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }
                    : i === bofeHover - 1
                    ? { borderBottom: 'none' }
                    : {}
                }
              >
                {title}
                {bofeHover === i && <div className="home-info">{information}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </center>
  );
};

export default Home;
