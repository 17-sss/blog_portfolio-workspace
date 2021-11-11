import useObserveItems from 'hooks/useObserveItems';
import React, { FunctionComponent, useMemo } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const IntroduceSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, texts } = PORTFOLIO_SECTION_INFO.introduce;

  const introduceTexts = useMemo<string[]>(() => {
    if (!texts || !texts.introduceTexts) return [];
    if (!Array.isArray(texts.introduceTexts)) return [texts.introduceTexts];
    return texts.introduceTexts;
  }, [texts]);

  const { ref, sliceData } = useObserveItems<HTMLUListElement>({
    data: introduceTexts,
    observeOptions: { threshold: 1 },
  });

  const textItems = useMemo(() => {
    if (!sliceData || !sliceData.length) return null;
    return (sliceData as string[]).map((text, i) => (
      <S.TextItem key={i} idx={i}>
        <S.TextCard>{text}</S.TextCard>
      </S.TextItem>
    ));
  }, [sliceData]);

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox>
        <S.TextList ref={ref} dataLength={introduceTexts.length}>
          {textItems ?? <></>}
        </S.TextList>
      </S.IntroduceSectionInnerBox>
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
