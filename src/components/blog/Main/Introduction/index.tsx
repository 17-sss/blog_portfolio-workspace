import { FunctionComponent } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ProfileImage, LinkList } from '@components/blog/Main';
import { AdditionalLinkInfo } from '@hooks/queries';
import * as S from './style';

export interface IntroductionProps {
  text: string;
  links: AdditionalLinkInfo[];
  gatsbyImageData: IGatsbyImageData;
}

const Introduction: FunctionComponent<IntroductionProps> = function ({ text, links, gatsbyImageData }) {
  const [subTitle, title] = text.split('\n');

  return (
    <S.IntroductionLayout>
      <div className="inner">
        <S.BetweenRow>
          <ProfileImage profileImage={gatsbyImageData} />
          <LinkList links={links} />
        </S.BetweenRow>

        <S.NormalCol>
          <S.SubTitleText>{subTitle}</S.SubTitleText>
          <S.TitleText>{title}</S.TitleText>
        </S.NormalCol>
      </div>
    </S.IntroductionLayout>
  );
};

export default Introduction;
