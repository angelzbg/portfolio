import { makeAutoObservable } from 'mobx';
import { themes, getTheme, setTheme } from '../utils/themes';
import { createContext, useContext } from 'react';

const store = {
  theme: getTheme(),
  themes: themes,
  nextTheme: async (theme: string) => {
    store.theme = setTheme(theme);
  },

  isBlur: false,
  setBlur: (value: boolean) => (store.isBlur = value),

  certificatesPopUps: {} as { [key: string]: boolean },
  openCertificatePopUp: (certName: string) => {
    store.certificatesPopUps[certName] = true;
  },

  bofeHover: -1,
  setBofeHover: (idx: number) => (store.bofeHover = idx),
};

makeAutoObservable(store);

const StoreContext = createContext(store);
const useStore = () => useContext(StoreContext);

export { store, StoreContext, useStore };
