import { FunctionComponent } from 'react';
import ProfileImage from 'components/Main/ProfileImage';
import { INTRODUCTION_TEXTS } from 'utils/constants';
import * as S from './style';

type IntroductionProps = {
  title?: string;
  subTitle?: string;
};

const Introduction: FunctionComponent<IntroductionProps> = function ({ subTitle, title }) {
  return (
    <S.IntroductionLayout>
      <S.IntroductionBox>
        <ProfileImage />
        <S.TextBox>
          <S.SubTitleText>{subTitle ?? INTRODUCTION_TEXTS.subTitle}</S.SubTitleText>
          <S.TitleText>{title ?? INTRODUCTION_TEXTS.title}</S.TitleText>
        </S.TextBox>
      </S.IntroductionBox>
    </S.IntroductionLayout>
  );
};

export default Introduction;
