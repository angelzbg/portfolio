import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './state/Store.js';

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*(() => {
  const [currentDate, examDate] = [new Date(), new Date('XX XXX 20XX XX:XX:00')].map((date) => date.getTime());
  (async (x) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(☀️);
      }, x);
    })
      .then(() => 🚿)
      .then(() => ☕ && 🚬)
      .then(() => 👨‍🎓📝);
  })(examDate - 30 * 1000 - currentDate);
})();*/