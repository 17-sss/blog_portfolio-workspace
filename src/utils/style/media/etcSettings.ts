import { MAX_WIDTH_INFO } from 'utils/constants';
import { createResponse } from './functions';

const {
  set: { desktop, tablet, mobile },
} = MAX_WIDTH_INFO;

const stringMediaQueries = {
  desktop: createResponse({ maxWidth: desktop }) ?? '', // 사용 X
  tablet: createResponse({ maxWidth: tablet }) ?? '',
  mobile: createResponse({ maxWidth: mobile }) ?? '',
};

export { stringMediaQueries };

/*
  @media screen and (max-width:1299px) {
    // 일반 데스크탑
  }

  @media screen and (max-width:1023px) {
    // 타블렛
  }

  @media screen and (max-width:767px) {
    // 모바일
  }
*/
