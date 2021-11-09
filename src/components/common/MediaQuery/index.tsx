// react-responsive 라이브러리 활용
import { FunctionComponent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { stringMediaQueries as media } from 'utils/style';

const Tablet: FunctionComponent = function ({ children }) {
  const isTablet = useMediaQuery({ query: media.tablet });
  return <>{isTablet && children}</>;
};

const Mobile: FunctionComponent = function ({ children }) {
  const isMobile = useMediaQuery({ query: media.mobile });
  return <>{isMobile && children}</>;
};

export { Tablet, Mobile };
