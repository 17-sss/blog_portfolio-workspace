import { FunctionComponent } from 'react';
import ProfileImage from 'src/components/blog/Main/ProfileImage';
import { BLOG_INTRODUCTION_TEXTS } from 'src/utils/constants';
import * as S from './style';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type IntroductionProps = {
  title?: string;
  subTitle?: string;
  profileImage: IGatsbyImageData;
};

const Introduction: FunctionComponent<IntroductionProps> = function ({ subTitle, title, profileImage }) {
  return (
    <S.IntroductionLayout>
      <S.IntroductionBox>
        <ProfileImage profileImage={profileImage} />
        <S.TextBox>
          <S.SubTitleText>{subTitle ?? BLOG_INTRODUCTION_TEXTS.subTitle}</S.SubTitleText>
          <S.TitleText>{title ?? BLOG_INTRODUCTION_TEXTS.title}</S.TitleText>
        </S.TextBox>
      </S.IntroductionBox>
    </S.IntroductionLayout>
  );
};

export default Introduction;
