import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import './styles/menu.css';
import { setColorScheme } from '../../utils/themes.js';
import { Home, BookOpen, FileText, Settings, Moon, Sun, Coffee } from 'react-feather';
import Articles from '../articles/Articles.js';
import { withRouter } from 'react-router-dom';

export default observer(
  withRouter(({ theme, nextTheme, setBlurred, location: { pathname } }) => {
    const [dropdown, setDropdown] = useState(false);
    const [tip, setTip] = useState(false);
    const [isBlur, setBlur] = useState(false);
    const [blurTop, setBlurTop] = useState(0);
    const [blurProf, setBlurProf] = useState(false);

    useEffect(() => {
      if (tip === 'Home') {
        setDropdown(false);
        setBlur(false);
        setBlurred(false);
      } else if (tip === 'Education') {
        setDropdown(false);
        setBlur(false);
        setBlurred(false);
      } else if (['Articles', 'Themes'].includes(tip)) {
        setBlurTop(document.querySelector('.app-wrapper').scrollTop);
        setDropdown(tip);
        setBlur(true);
        setBlurred(true);
      } else {
        setDropdown(false);
        setBlur(false);
        setBlurred(false);
      }
    }, [tip, dropdown, setBlurred]);

    useEffect(() => {
      if (blurProf) {
        setBlurTop(document.querySelector('.app-wrapper').scrollTop);
        setBlurred(true);
      } else {
        setBlurred(false);
      }
    }, [blurProf, setBlurred]);

    useEffect(() => {}, []);

    return (
      <div className="profile">
        <div className="prof-info-wrap" onMouseEnter={() => setBlurProf(true)} onMouseLeave={() => setBlurProf(false)}>
          <div className="prof-img" />

          <div className="prof-info">
            <div className="dev">Web Developer</div>
            <div className="name">Angel Zlatanov</div>
            <div className="separator" />
            <div className="contacts-wrap">
              {[
                { href: 'https://www.facebook.com/angel.zlatanovv', ext: true },
                { href: 'https://www.linkedin.com/in/angel-zlatanov-9379ba1ba/', ext: true },
                { href: 'https://github.com/angelzbg', ext: true },
                { href: 'https://stackoverflow.com/users/14342112/angel-zlatanov?tab=profile', ext: true },
                { href: 'mailto:angel.zlatanovv@gmail.com', ext: false },
              ].map(({ href, ext }, i) => (
                <a key={`prof-link-${i}`} href={href} target={ext ? '_blank' : '_self'} rel="noopener noreferrer">
                  <div />
                </a>
              ))}
            </div>
          </div>
        </div>
        {blurProf && <div className="blurProf" style={{ top: `calc(-1rem + ${blurTop}px)` }} />}

        {tip && <div className="menu-icon-tip">{tip}</div>}
        <div className="menu-wrapper" onMouseLeave={() => setTip(false)}>
          <a href="#/">
            <Home
              tip="Home"
              className={`icon-menu${pathname === '/' && (!tip || tip === 'Home') ? ' active' : ''}`}
              style={
                tip === 'Home'
                  ? {
                      /*padding: '0.05rem'*/
                    }
                  : { ...{ zIndex: dropdown ? 2 : 0 } }
              }
              onClick={() => setTip('Home')}
              onMouseEnter={() => setTip('Home')}
              onMouseLeave={() => setTip(false)}
            />
          </a>
          <a href="#/education">
            <BookOpen
              tip="Education"
              className={`icon-menu${pathname === '/education' && (!tip || tip === 'Education') ? ' active' : ''}`}
              style={
                tip === 'Education'
                  ? {
                      /*padding: '0.05rem'*/
                    }
                  : { ...{ zIndex: dropdown ? 2 : 0 } }
              }
              onClick={() => setTip('Education')}
              onMouseEnter={() => setTip('Education')}
              onMouseLeave={() => setTip(false)}
            />
          </a>
          <div
            style={{ display: 'inline-block', borderRadius: '50%' }}
            onMouseEnter={() => setTip('Articles')}
            onMouseLeave={() => setTip(false)}
          >
            <FileText
              onClick={() => setTip('Articles')}
              tip="Articles"
              className="icon-menu"
              style={
                tip === 'Articles'
                  ? { backgroundColor: 'var(--medium)', color: 'var(--lightest)', zIndex: 2 }
                  : { ...{ zIndex: dropdown ? 2 : 0 } }
              }
            />
            <Articles isOpen={dropdown === 'Articles'} />
          </div>
          <div
            style={{ display: 'inline-block', borderRadius: '50%' }}
            onMouseEnter={() => setTip('Themes')}
            onMouseLeave={() => setTip(false)}
          >
            <Settings
              onClick={() => setTip('Themes')}
              tip="Themes"
              className="icon-menu"
              style={
                tip === 'Themes'
                  ? { backgroundColor: 'var(--medium)', color: 'var(--lightest)', zIndex: 2 }
                  : { ...{ zIndex: dropdown ? 2 : 0 } }
              }
            />
            <div className="dropdown-menu-wrapper themes" style={{ display: dropdown === 'Themes' ? 'block' : 'none' }}>
              <div className="dropdown-menu-wrap themes" onMouseLeave={() => nextTheme(theme)}>
                {[
                  { name: 'Dark', icon: () => <Moon className="icon-dropdown" /> },
                  { name: 'Light', icon: () => <Sun className="icon-dropdown" /> },
                  { name: 'Coffee', icon: () => <Coffee className="icon-dropdown" /> },
                ].map(({ name, icon }) => (
                  <div
                    key={`theme-${name}`}
                    className="theme-drop"
                    onMouseEnter={() => setColorScheme(name)}
                    onClick={() => {
                      nextTheme(name);
                      setTip(false);
                    }}
                  >
                    {icon()}
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {isBlur && <div className="blur" style={{ top: `calc(-100px - 1.5rem + ${blurTop}px)` }} />}
        </div>
      </div>
    );
  })
);
