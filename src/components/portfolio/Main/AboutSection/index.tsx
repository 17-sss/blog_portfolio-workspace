import useObserveItems from 'hooks/useObserveItems';
import React, { FunctionComponent, useMemo } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const AboutSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, texts } = PORTFOLIO_SECTION_INFO.about;

  const aboutTexts = useMemo<string[]>(() => {
    if (!texts || !texts.aboutTexts) return [];
    if (!Array.isArray(texts.aboutTexts)) return [texts.aboutTexts];
    return texts.aboutTexts;
  }, [texts]);

  const { ref, sliceData } = useObserveItems<HTMLUListElement>({ data: aboutTexts });

  const textItems = useMemo(() => {
    if (!sliceData || !sliceData.length) return null;
    return (sliceData as string[]).map((text, i) => (
      <S.TextItem key={i} idx={i}>
        <S.TextCard>{text}</S.TextCard>
      </S.TextItem>
    ));
  }, [sliceData]);

  return (
    <S.AboutSectionLayout id={layoutId} {...props}>
      <S.AboutSectionInnerBox>
        <S.TextList ref={ref} dataLength={aboutTexts.length}>{textItems ?? <></>}</S.TextList>
      </S.AboutSectionInnerBox>
    </S.AboutSectionLayout>
  );
};
export default AboutSection;
