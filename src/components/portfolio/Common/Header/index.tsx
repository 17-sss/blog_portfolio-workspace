import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Mobile, TabletDesktop } from 'components/common/MediaQuery';
import { PORTFOLIO_HEADER } from 'utils/constants';
import * as S from './style';

const Header: FunctionComponent = function () {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  // Mobile 전용 이벤트
  const handleMobileMenuClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget), []);
  const handleMobileMenuClose = useCallback(() => setAnchorEl(null), []);
  // --

  const menuItems = useMemo(() => {
    return PORTFOLIO_HEADER.items.map((name, i) => (
      <S.HeaderMenuItem key={i} onClick={handleMobileMenuClose}>
        {name}
      </S.HeaderMenuItem>
    ));
  }, []);

  return (
    <S.HeaderLayout position="sticky">
      <S.HeaderInnerBox>
        <S.HeaderLogoBox>{PORTFOLIO_HEADER.logo}</S.HeaderLogoBox>

        <TabletDesktop>
          <S.HeaderMenuList>{menuItems}</S.HeaderMenuList>
        </TabletDesktop>
        <Mobile>
          <S.MenuOpenButton onClick={handleMobileMenuClick}><MenuIcon/></S.MenuOpenButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMobileMenuClose}>
            {menuItems}
          </Menu>
        </Mobile>

      </S.HeaderInnerBox>
    </S.HeaderLayout>
  );
};

export default Header;
