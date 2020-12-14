import React, { useState } from 'react';
import './styles/education.css';
import pu_logo from '../../images/pu_logo.png';
import softuni_logo from '../../images/softuni_logo.png';
import { Link2 } from 'react-feather';
import { softuni } from './data.js';

export default () => {
  const [certificatesPopUps, setSertificatesPopUps] = useState({});

  const dots = new Array(softuni.length).fill().map((_, i) => <div className="dot" key={`dot-${i}`} />);

  const [left, right] = softuni.reduce(
    ([left, right], { name, date, grade, certificate: { image, link, alt }, icons }, i) => {
      (i % 2 === 0 ? left : right).push(
        <div className="softuni-card" key={`softuni-card-${i}`}>
          <div className="softuni-title">{name}</div>
          <div className="softuni-info">
            <div>
              <span>{date}</span>
              <span>{grade}/6.00</span>
            </div>
            <div>
              {icons.map(({ icon, title, alt }, i) => (
                <img key={`softuni-icon-${name}-${i}`} src={icon} alt={alt} title={title} />
              ))}
            </div>
          </div>
          <img
            className="softuni-sertificate-card"
            src={image}
            alt={alt}
            onMouseEnter={() => setSertificatesPopUps((prev) => ({ ...prev, [name]: true }))}
            style={certificatesPopUps[name] ? { height: 30, marginTop: 50 } : {}}
          />
          {certificatesPopUps[name] && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="softuni-cert-link-wrap">
              <div>{`/details/${link.split('details/').pop()}`}</div>
              <div>
                <Link2 className="link-icon-cert" />
              </div>
            </a>
          )}
        </div>
      );

      return [left, right];
    },
    [[], []]
  );

  return (
    <center id="education">
      <div className="softuni-wrapper">
        <a className="softuni-link" href="https://softuni.bg/" target="_blank" rel="noopener noreferrer">
          <img className="education-softuni" src={softuni_logo} alt="softuni logo" />
        </a>
        <div className="softuni-cards">
          <div>
            <div className="softuni-left">{left}</div>
            <div className="softuni-separator">{dots}</div>
            <div className="softuni-right">{right}</div>
          </div>
        </div>
      </div>
      <a href="https://uni-plovdiv.bg/en/" target="_blank" rel="noopener noreferrer" className="education-university">
        <img src={pu_logo} alt="pu logo" />
        <Link2 className="link-icon" />
        Informatics - 2016/2019
      </a>
    </center>
  );
};
