import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Mobile, TabletDesktop } from 'components/common/MediaQuery';
import { changeFirstCharUpperCase } from 'utils/functions';
import { PortfolioSectionNames, PORTFOLIO_HEADER, PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const Header: FunctionComponent = function () {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Mobile 전용 이벤트
  const handleMobileMenuClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget),
    [],
  );
  const handleMobileMenuClose = useCallback(() => setAnchorEl(null), []);

  // 메뉴 아이템 클릭시, 해당하는 Section으로 자연스럽게 스크롤링됨.
  const handleMobileItemClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    handleMobileMenuClose();

    const target = e.target as HTMLLIElement;
    const targetId = target.id as PortfolioSectionNames;
    if (!target || !targetId) return;

    const layoutId = PORTFOLIO_SECTION_INFO[targetId].layoutId;
    const sectionEle = document.querySelector(`#${layoutId}`) as HTMLElement;
    if (!sectionEle) return;

    window.scrollTo({
      top: sectionEle.offsetTop,
      behavior: 'smooth',
    });
  }, []);

  // --

  const menuItems = useMemo(() => {
    return PORTFOLIO_HEADER.items.map((name, i) => (
      <S.HeaderMenuItem key={i} id={name} onClick={handleMobileItemClick}>
        {changeFirstCharUpperCase(name)}
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
          <S.MenuOpenButton onClick={handleMobileMenuClick}>
            <MenuIcon />
          </S.MenuOpenButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMobileMenuClose}
            MenuListProps={{ onMouseLeave: handleMobileMenuClose }}
          >
            {menuItems}
          </Menu>
        </Mobile>
      </S.HeaderInnerBox>
    </S.HeaderLayout>
  );
};

export default Header;
