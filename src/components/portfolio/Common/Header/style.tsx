import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { AppBar, Button, Menu, MenuItem } from '@material-ui/core';

import InnerContainer from '../InnerContainer';
import { setFlex, theme } from 'src/utils/style';
import { PORTFOLIO_HEADER_HEIGHT } from 'src/utils/constants';

type HeaderLayoutProps = {
  isHeaderTop: boolean;
};
export const HeaderLayout = styled(({ isHeaderTop, ...props }: HeaderLayoutProps) => <AppBar position="fixed" elevation={2} {...props} />)`
  padding: 0 48px;
  background-color: ${({ isHeaderTop, theme }) => (isHeaderTop ? 'transparent' : theme.grayScaleColors.offWhite)};
  transition: background-color 0.7s;
  ${({ isHeaderTop }) =>
    isHeaderTop &&
    css`
      box-shadow: none;
      div, li, svg {
        color: ${theme.grayScaleColors.offWhite};
      }
      div, li {
        text-shadow: 0.5px 1px 3px black;
      }
      svg {
        filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.4));
      }
    `}

  * {
    font-family:'Comfortaa', 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;
  }
`;

export const HeaderInnerBox = styled(InnerContainer)`
  ${setFlex({ justifyContent: 'space-between', alignItems: 'center' })};
  height: ${`${PORTFOLIO_HEADER_HEIGHT}px`};
`;

const cssHeaderBox = ((theme: Theme) => css`
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  color: ${theme.grayScaleColors.titleActive};
  font-size: ${theme.fontSizes['16']};
`)(theme);

export const HeaderLogoBox = styled.div`
  ${cssHeaderBox};
  cursor: pointer;
`;

export const HeaderMenuList = styled.ul`
  ${cssHeaderBox};
  column-gap: 4px;
`;

export const HeaderMenuItem = styled(MenuItem)`
  font-size: ${({ theme }) => theme.fontSizes['14']};
`;

export const MobileMenu = styled(Menu)`
  * {
    font-family: 'Comfortaa', 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;
  }
`;

export const MenuOpenButton = styled(Button)`
  min-width: initial;
  svg {
    font-size: ${({ theme }) => theme.fontSizes['24']};
  }
`;
