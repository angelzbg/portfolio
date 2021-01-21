interface IColor {
  [key: string]: {
    [key: string]: string;
  };
}

const colors: IColor = {
  Dark: {
    '--lightest': '#e4e6eb',
    '--light': '#b0b3b8',
    '--medium': '#3a3b3c',
    '--dark': '#242526',
    '--darker': '#18191a',
    '--link1': '#2398eb',
    '--link2': '#29a6ff',
    '--shadow1': 'rgba(0, 0, 0, 0.3)',
    '--shadow2': 'rgba(0, 0, 0, 0.1)',
    '--blur': 'rgba(24, 25, 26, 0.6)',
    '--active': 'rgba(61, 174, 255, 1)',
    '--active-bgr': 'rgba(61, 174, 255, 0.5)',
  },
  Light: {
    '--lightest': '#ffffff',
    '--light': '#f7f7f7',
    '--medium': '#becae6',
    '--dark': '#8b9dc3',
    '--darker': '#3b5998',
    '--link1': '#2398eb',
    '--link2': '#29a6ff',
    '--shadow1': 'rgba(0, 0, 0, 0.3)',
    '--shadow2': 'rgba(0, 0, 0, 0.1)',
    '--blur': 'rgba(59, 89, 152, 0.6)',
    '--active': 'rgba(255, 255, 255, 1)',
    '--active-bgr': 'rgba(255, 255, 255, 0.6)',
  },
  Coffee: {
    '--lightest': '#ece0d1',
    '--light': '#dbc1ac',
    '--medium': '#967259',
    '--dark': '#634832',
    '--darker': '#38220f',
    '--link1': '#2398eb',
    '--link2': '#29a6ff',
    '--shadow1': 'rgba(0, 0, 0, 0.3)',
    '--shadow2': 'rgba(0, 0, 0, 0.1)',
    '--blur': 'rgba(56, 34, 15, 0.6)',
    '--active': 'rgba(255, 255, 255, 1)',
    '--active-bgr': 'rgba(255, 255, 255, 0.6)',
  },
};

const themes = Object.keys(colors);
const fallback = themes[0];

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  return theme && colors[theme] ? theme : fallback;
};

const saveTheme = (theme: string = fallback) => localStorage.setItem('theme', theme);

const setColorScheme = (theme: string = fallback) => {
  Object.entries(colors[theme]).forEach(([color, value]) => {
    document.documentElement.style.setProperty(color, value);
  });
};

const setTheme = (() => {
  setColorScheme(getTheme());

  return (theme: string) => {
    theme = colors[theme] ? theme : fallback;
    setColorScheme(theme);
    saveTheme(theme);

    return theme;
  };
})();

export { themes, getTheme, setTheme, setColorScheme };
