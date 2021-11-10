import React, { FunctionComponent } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { PORTFOLIO_HOME_SECTION } from 'utils/constants';
import * as S from './style';

const HomeSection: FunctionComponent = function ({ ...props }) {
  return (
    <S.HomeSectionLayout {...props}>
      <S.IntroParagraph>{PORTFOLIO_HOME_SECTION.greetingText}</S.IntroParagraph>
      <S.ScrollInfoBox>
        <span>Scroll Down</span>
        <S.ScrollDownButton>
          <KeyboardArrowDownIcon />
        </S.ScrollDownButton>
      </S.ScrollInfoBox>
    </S.HomeSectionLayout>
  );
};

export default HomeSection;
