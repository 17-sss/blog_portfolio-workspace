import React, { FunctionComponent } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { InnerContainer } from 'components/portfolio/Common';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const HomeSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, texts } = PORTFOLIO_SECTION_INFO.home;

  return (
    <S.HomeSectionLayout id={layoutId} {...props}>

      <InnerContainer>
        <S.IntroParagraph>{texts?.greetingText ?? ''}</S.IntroParagraph>
        <S.ScrollInfoBox>
          <span>Scroll Down</span>
          <S.ScrollDownButton>
            <KeyboardArrowDownIcon />
          </S.ScrollDownButton>
        </S.ScrollInfoBox>
      </InnerContainer>

    </S.HomeSectionLayout>
  );
};

export default HomeSection;
