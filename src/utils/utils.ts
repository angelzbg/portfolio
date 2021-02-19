const vh = (v: number) => {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
};

const vw = (v: number) => {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
};

const vmin = (v: number) => Math.min(vh(v), vw(v));

export { vh, vw, vmin };
