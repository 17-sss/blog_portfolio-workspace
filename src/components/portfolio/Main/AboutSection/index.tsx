import React, { FunctionComponent, useMemo } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

export type TextItemProps = {
  idx: number;
};

const AboutSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, texts } = PORTFOLIO_SECTION_INFO.about;
  const textItems = useMemo(() => {
    if (!texts || !texts.aboutTexts) return null;
    const aboutTexts = texts.aboutTexts as string[];
    if (!aboutTexts.length) return null;
    return aboutTexts.map((text, i) => (
      <S.TextItem key={i} idx={i}>
        <S.TextCard>{text}</S.TextCard>
      </S.TextItem>
    ));
  }, [texts?.aboutTexts]);

  return (
    <S.AboutSectionLayout id={layoutId} {...props}>
      <S.AboutSectionInnerBox>
        <S.TextList>{textItems ?? <></>}</S.TextList>
      </S.AboutSectionInnerBox>
    </S.AboutSectionLayout>
  );
};
export default AboutSection;
