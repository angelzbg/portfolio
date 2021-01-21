import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import store from './state/Store';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
