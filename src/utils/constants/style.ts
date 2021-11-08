const desktop = 1299;
const tablet = 1023;
const mobile = 767;

const MAX_WIDTH_INFO = {
  set: {
    desktop,
    tablet,
    mobile,
  },
  inner: {
    desktop: desktop - Math.floor(desktop * 0.1),
    tablet: tablet - Math.floor(tablet * 0.1),
    mobile: mobile - Math.floor(mobile * 0.1),
  },
};

export { MAX_WIDTH_INFO };
