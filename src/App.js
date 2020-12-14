import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './styles/app.css';
import FormsBackground from './components/backgrounds/FormsBackground.js';
import Menu from './components/menu/Menu.js';
import Home from './components/home/Home.js';
import Education from './components/education/Education.js';
import { observer } from 'mobx-react';

export default observer(({ store }) => {
  return (
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
  );
});
