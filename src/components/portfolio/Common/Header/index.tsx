import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { Mobile, TabletDesktop } from '@components/common/MediaQuery';
import { useIsHeaderTop } from '@hooks/common';
import { changeFirstCharUpperCase } from '@utils/functions';
import { PortfolioSectionNameType, portfolioSectionNames, portfolioSectionIdInfo } from '@utils/constants';

import * as S from './style';

interface HeaderProps {
  text: string;
}

const Header: FunctionComponent<HeaderProps> = function ({ text }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isHeaderTop = useIsHeaderTop();

  // Mobile 전용 이벤트
  const handleMobileMenuClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget),
    [],
  );
  const handleMobileMenuClose = useCallback(() => setAnchorEl(null), []);

  // 메뉴 아이템 클릭시, 해당하는 Section으로 자연스럽게 스크롤링됨.
  const handleHeaderItemClick = useCallback(
    (targetName?: PortfolioSectionNameType) => (e: React.MouseEvent<HTMLLIElement | HTMLElement>) => {
      handleMobileMenuClose();

      const target = e.target as HTMLLIElement;
      const targetId = target.id as PortfolioSectionNameType;
      if ((!target || !targetId) && !targetName) return;

      const layoutId = portfolioSectionIdInfo[targetName || targetId];
      const sectionEle = document.querySelector(`#${layoutId}`) as HTMLElement;
      if (!sectionEle) return;

      window.scrollTo({
        top: sectionEle.offsetTop,
        behavior: 'smooth',
      });
    },
    [],
  );

  const menuItems = useMemo(() => {
    return portfolioSectionNames.map((name, i) => (
      <S.HeaderMenuItem key={i} id={name} onClick={handleHeaderItemClick()} role="listitem">
        {changeFirstCharUpperCase(name)}
      </S.HeaderMenuItem>
    ));
  }, []);

  return (
    <S.HeaderLayout isHeaderTop={isHeaderTop}>
      <S.HeaderInnerBox>
        <S.HeaderLogoBox onClick={handleHeaderItemClick('home')}>{text}</S.HeaderLogoBox>
        <TabletDesktop>
          <S.HeaderMenuList>{menuItems}</S.HeaderMenuList>
        </TabletDesktop>
        <Mobile>
          <S.MenuOpenButton onClick={handleMobileMenuClick}>
            <MenuIcon />
          </S.MenuOpenButton>
          <S.MobileMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMobileMenuClose}
            MenuListProps={{ onMouseLeave: handleMobileMenuClose }}
          >
            {menuItems}
          </S.MobileMenu>
        </Mobile>
      </S.HeaderInnerBox>
    </S.HeaderLayout>
  );
};

export default Header;
