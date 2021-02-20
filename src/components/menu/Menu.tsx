import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import './styles/menu.css';
import { setColorScheme } from '../../utils/themes';
import { Home, BookOpen, FileText, Settings, Moon, Sun, Coffee } from 'react-feather';
import Articles from '../articles/Articles';
import { withRouter } from 'react-router-dom';
import { useStore } from '../../state/state';
import { RouteComponentProps } from 'react-router';
import { contacts } from './data';

export default observer(
  withRouter(({ location: { pathname } }: RouteComponentProps) => {
    const store = useStore();
    const [dropdown, setDropdown] = useState('');
    const [tip, setTip] = useState('');
    const [isBlur, setBlur] = useState(false);
    const [blurTop, setBlurTop] = useState(0);
    const [blurProf, setBlurProf] = useState(false);

    useEffect(() => {
      if (['Articles', 'Themes'].includes(tip)) {
        setBlurTop(document.querySelector('.app-wrapper')!.scrollTop);
        setDropdown(tip);
        setBlur(true);
        store.setBlur(true);
      } else {
        setDropdown('');
        setBlur(false);
        store.setBlur(false);
      }
    }, [tip, dropdown, store]);

    useEffect(() => {
      if (blurProf) {
        setBlurTop(document.querySelector('.app-wrapper')!.scrollTop);
        store.setBlur(true);
      } else {
        store.setBlur(false);
      }
    }, [blurProf, store]);

    return (
      <div className="profile">
        <div className="prof-info-wrap" onMouseEnter={() => setBlurProf(true)} onMouseLeave={() => setBlurProf(false)}>
          <div className="prof-img" />

          <div className="prof-info">
            <div className="name">Angel Zlatanov</div>
            <div className="dev">Web Developer</div>
            <div className="separator" />
            <div className="contacts-wrap">
              {contacts.map(({ href, ext }, i) => (
                <a key={`prof-link-${i}`} href={href} target={ext ? '_blank' : '_self'} rel="noopener noreferrer">
                  <div />
                </a>
              ))}
            </div>
          </div>
        </div>
        {blurProf && <div className="blurProf" style={{ top: `calc(-1rem + ${blurTop}px)` }} />}

        {tip && <div className="menu-icon-tip">{tip}</div>}
        <div className="menu-wrapper" onMouseLeave={() => setTip('')}>
          <a
            href="#/"
            className={`icon-menu${pathname === '/' && (!tip || tip === 'Home') ? ' active' : ''}`}
            //style={tip === 'Home' ? {} : { zIndex: dropdown ? 2 : 0 }}
            style={tip && dropdown ? { zIndex: 2 } : {}}
            onClick={() => setTip('')}
            onMouseEnter={() => setTip('Home')}
            onMouseLeave={() => setTip('')}
          >
            <Home />
          </a>
          <a
            href="#/education"
            className={`icon-menu${pathname === '/education' && (!tip || tip === 'Education') ? ' active' : ''}`}
            //style={tip === 'Education' ? {} : { zIndex: dropdown ? 2 : 0 }}
            style={tip && dropdown ? { zIndex: 2 } : {}}
            onClick={() => setTip('')}
            onMouseEnter={() => setTip('Education')}
            onMouseLeave={() => setTip('')}
          >
            <BookOpen />
          </a>
          <div
            onMouseEnter={() => setTip('Articles')}
            onMouseLeave={() => setTip('')}
            className="icon-menu"
            style={
              tip === 'Articles'
                ? { backgroundColor: 'var(--medium)', color: 'var(--lightest)', zIndex: 2 }
                : { zIndex: dropdown ? 2 : 0 }
            }
          >
            <FileText onClick={() => setTip('Articles')} />
            <Articles isOpen={dropdown === 'Articles'} />
          </div>
          <div
            onMouseEnter={() => setTip('Themes')}
            onMouseLeave={() => setTip('')}
            className="icon-menu"
            style={
              tip === 'Themes'
                ? { backgroundColor: 'var(--medium)', color: 'var(--lightest)', zIndex: 2 }
                : { zIndex: dropdown ? 2 : 0 }
            }
          >
            <Settings onClick={() => setTip('Themes')} />
            {dropdown === 'Themes' && (
              <div className="dropdown-menu-wrapper themes">
                <div className="dropdown-menu-wrap themes" onMouseLeave={() => store.nextTheme(store.theme)}>
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
                        store.nextTheme(name);
                        setTip('');
                      }}
                    >
                      {icon()}
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {isBlur && <div className="blur" style={{ top: `calc(-100px - 1.5rem + ${blurTop}px)` }} />}
        </div>
      </div>
    );
  })
);
