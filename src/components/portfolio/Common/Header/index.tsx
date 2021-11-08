import { FunctionComponent, useMemo } from 'react';
import { PORTFOLIO_HEADER_ITEMS } from 'utils/constants/portfolio';
import * as S from './style';

const Header: FunctionComponent = function () {
  const menuItems = useMemo(() => PORTFOLIO_HEADER_ITEMS.map((name, i) => <li key={i}>{name}</li>), []);
  return (
    <S.HeaderLayout>
      <S.HeaderInnerBox>
        <S.HeaderLogoBox>1</S.HeaderLogoBox>
        <S.HeaderMenuBox>{menuItems}</S.HeaderMenuBox>
      </S.HeaderInnerBox>
    </S.HeaderLayout>
  );
};

export default Header;
