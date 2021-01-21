import { makeAutoObservable } from 'mobx';
import { themes, getTheme, setTheme } from '../utils/themes';

export interface INextTheme {
  (theme: string): void;
}
export interface ISetBlur {
  (value: boolean): boolean;
}

export interface IStore {
  theme: string;
  themes: string[];
  nextTheme: INextTheme;
  isBlur: boolean;
  setBlur: ISetBlur;
}

class Store implements IStore {
  constructor() {
    makeAutoObservable(this);
  }

  theme = getTheme();
  themes = themes;
  nextTheme = async (theme: string) => {
    this.theme = setTheme(theme);
  };

  isBlur = false;
  setBlur = (value: boolean) => (this.isBlur = value);
}

const store = new Store();
export default store;
