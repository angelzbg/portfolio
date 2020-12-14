import { makeAutoObservable } from 'mobx';
import { themes, getTheme, setTheme } from '../utils/themes.js';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  theme = getTheme();
  themes = themes;
  nextTheme = async (theme) => {
    this.theme = setTheme(theme);
  };

  isBlur = false;
  setBlur = (value) => (this.isBlur = value);
}

const store = new Store();
export default store;
