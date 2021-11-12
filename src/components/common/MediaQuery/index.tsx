// react-responsive 라이브러리 활용
import { FunctionComponent, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getMediaQueries } from 'utils/style';

export const TabletDesktop: FunctionComponent = function ({ children }) {
  const isTabletDesktop = useMediaQuery({ query: getMediaQueries('tabletDesktop', false) });
  return <Fragment>{isTabletDesktop && children}</Fragment>;
};

export const Desktop: FunctionComponent = function ({ children }) {
  const isDesktop = useMediaQuery({ query: getMediaQueries('desktop', false) });
  return <Fragment>{isDesktop && children}</Fragment>;
};

export const Tablet: FunctionComponent = function ({ children }) {
  const isTablet = useMediaQuery({ query: getMediaQueries('tablet', false) });
  return <Fragment>{isTablet && children}</Fragment>;
};

export const Mobile: FunctionComponent = function ({ children }) {
  const isMobile = useMediaQuery({ query: getMediaQueries('mobile', false) });
  return <Fragment>{isMobile && children}</Fragment>;
};
