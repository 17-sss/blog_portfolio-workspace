import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { MAX_WIDTH_INFO } from 'utils/constants';
import { flexSet, media, theme } from 'utils/style';

export const HeaderLayout = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.grayScaleColors.inputBackground};
`;

export const HeaderInnerBox = styled.div`
  margin: 0 auto;
  min-height: 60px;

  ${flexSet({ justifyContent: 'space-between', alignItems: 'center' })};
  ${media.desktop} {
    max-width: ${`${MAX_WIDTH_INFO.desktop}px`};
  }

  ${media.tablet} {
    max-width: ${`${MAX_WIDTH_INFO.tablet}px`};
  }
`;

const cssHeaderBox = ((theme: Theme) => css`
  ${flexSet({ justifyContent: 'center', alignItems: 'center' })};
  font-size: ${theme.fontSizes["16"]};
`)(theme);

export const HeaderLogoBox = styled.div`
  ${cssHeaderBox};
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderMenuBox = styled.ul`
  ${cssHeaderBox};
  column-gap: 4px;

  ${media.mobile} {
    display: none;
  }
`;
