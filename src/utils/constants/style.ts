const MAX_DESKTOP = 1299;
const MAX_TABLET = 1023;
const MAX_MOBILE = 767;

const MAX_WIDTH_INFO = {
  set: { MAX_TABLET, MAX_MOBILE },
  inner: {
    desktop: MAX_DESKTOP - Math.floor(MAX_DESKTOP * 0.1),
    tablet: MAX_TABLET - Math.floor(MAX_TABLET * 0.1),
    mobile: MAX_MOBILE - Math.floor(MAX_MOBILE * 0.1),
  },
};

export { MAX_WIDTH_INFO };
