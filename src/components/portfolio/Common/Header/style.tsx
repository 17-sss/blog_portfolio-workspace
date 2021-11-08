import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { AppBar } from '@material-ui/core';

import { MAX_WIDTH_INFO } from 'utils/constants';
import { flexSet, media, theme } from 'utils/style';

export const HeaderLayout = styled(AppBar)`
  padding: 0 48px;
`;

export const HeaderInnerBox = styled.div`
  margin: 0 auto;

  width: 100%;
  max-width: ${`${MAX_WIDTH_INFO.inner.desktop}px`};
  height: 60px;

  ${flexSet({ justifyContent: 'space-between', alignItems: 'center' })};
`;

const cssHeaderBox = ((theme: Theme) => css`
  ${flexSet({ justifyContent: 'center', alignItems: 'center' })};
  font-size: ${theme.fontSizes['16']};
`)(theme);

export const HeaderLogoBox = styled.div`
  ${cssHeaderBox};
`;

export const HeaderMenuList = styled.ul`
  ${cssHeaderBox};
  column-gap: 4px;

  ${media.mobile} {
    display: none;
  }
`;

export const HeaderMenuListItem = styled.li`
  ${cssHeaderBox};
  button {
    font-size: ${({theme}) => theme.fontSizes['12']};
  }
`;
