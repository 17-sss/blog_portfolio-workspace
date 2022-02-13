import { FunctionComponent } from 'react';
import ProfileImage from '@components/blog/Main/ProfileImage';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as S from './style';

export interface IntroductionProps {
  text: string;
  gatsbyImageData: IGatsbyImageData;
};

const Introduction: FunctionComponent<IntroductionProps> = function ({ text, gatsbyImageData }) {
  const [subTitle, title] = text.split('\n');

  return (
    <S.IntroductionLayout>
      <S.IntroductionBox>
        <ProfileImage profileImage={gatsbyImageData} />
        <S.TextBox>
          <S.SubTitleText>{subTitle}</S.SubTitleText>
          <S.TitleText>{title}</S.TitleText>
        </S.TextBox>
      </S.IntroductionBox>
    </S.IntroductionLayout>
  );
};

export default Introduction;
