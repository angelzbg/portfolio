import React, { useState } from 'react';
import './styles/education.css';
import { Link2 } from 'react-feather';
import { softuni } from './data';

const pu_logo = require('../../images/pu_logo.png');
const softuni_logo = require('../../images/softuni_logo.png');

export default () => {
  const [certificatesPopUps, setSertificatesPopUps] = useState({} as { [key: string]: boolean });

  const dots = new Array(softuni.length).fill(0).map((_, i) => <div className="dot" key={`dot-${i}`} />);

  const [left, right] = softuni.reduce(
    ([left, right], { name, date, grade, certificate, icons }, i) => {
      (i % 2 === 0 ? left : right).push(
        <div className="softuni-card" key={`softuni-card-${i}`}>
          <div className="softuni-title">{name}</div>
          <div className="softuni-info">
            <div>
              <span>{date}</span>
              <span>{grade}/6.00</span>
            </div>
            <div>
              {icons &&
                icons.map(({ icon, title, alt }, i) => (
                  <img key={`softuni-icon-${name}-${i}`} src={icon} alt={alt} title={title} />
                ))}
            </div>
          </div>
          {certificate && (
            <img
              className="softuni-sertificate-card"
              src={certificate.image}
              alt={certificate.alt}
              onMouseEnter={() => setSertificatesPopUps((prev) => ({ ...prev, [name]: true }))}
              style={certificatesPopUps[name] ? { height: 30, marginTop: 50 } : {}}
            />
          )}
          {certificate && certificatesPopUps[name] && (
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="softuni-cert-link-wrap">
              <div>{`/details/${certificate.link.split('details/').pop()}`}</div>
              <div>
                <Link2 className="link-icon-cert" />
              </div>
            </a>
          )}
        </div>
      );

      return [left, right];
    },
    [[], []] as [JSX.Element[], JSX.Element[]]
  );

  return (
    <center>
      <div id="education">
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
      </div>
    </center>
  );
};
