import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styles/app.css';
import FormsBackground from './components/backgrounds/FormsBackground';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Education from './components/education/Education';
import { observer } from 'mobx-react';
import { IStore } from './state/Store';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default observer(({ store }: { store: IStore }) => (
  <HashRouter>
    <div className="app-wrapper" style={store.isBlur ? { overflow: 'hidden', paddingRight: '0.25rem' } : {}}>
      <FormsBackground count={10} />
      <Menu theme={store.theme} nextTheme={store.nextTheme} setBlurred={store.setBlur} />
      <div className="app-content">
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
      </div>
    </div>
  </HashRouter>
));
