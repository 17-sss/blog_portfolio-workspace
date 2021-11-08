import { FunctionComponent, useMemo } from 'react';
import { Button } from '@material-ui/core';

import { PORTFOLIO_HEADER } from 'utils/constants/portfolio';
import * as S from './style';

const Header: FunctionComponent = function () {
  const menuItems = useMemo(
    () =>
      PORTFOLIO_HEADER.items.map((name, i) => (
        <S.HeaderMenuListItem key={i}>
          <Button color="inherit">{name}</Button>
        </S.HeaderMenuListItem>
      )),
    [],
  );
  return (
    <S.HeaderLayout position="sticky" color="transparent">
      <S.HeaderInnerBox>
        <S.HeaderLogoBox>{PORTFOLIO_HEADER.logo}</S.HeaderLogoBox>
        <S.HeaderMenuList>{menuItems}</S.HeaderMenuList>
      </S.HeaderInnerBox>
    </S.HeaderLayout>
  );
};

export default Header;
