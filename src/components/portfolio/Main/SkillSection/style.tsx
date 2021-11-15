import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InnerContainer, NormalGridList, Paragraph, TitleBox } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { getMediaQueries, setFlex } from 'utils/style';
import { setFadeInAnimation } from 'utils/style/animation';

export const SkillSectionLayout = styled.section`
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0;
`;

export const SkillSectionInnerBox = styled(InnerContainer)`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
`;

export const SkillTitleBox = styled(TitleBox)`
  ${setFadeInAnimation()}
`;
export const SubTitleParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
`;

export const TopSkillList = styled(({ ...props }) => <NormalGridList isUseTabletSize {...props} />)`
  ${getMediaQueries({ type: 'tablet' })} {
    ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
    flex-wrap: wrap;
    li {
      flex-basis: ${`calc(100% / 3)`};
    }
  }

  ${getMediaQueries({ type: 'mobile' })} {
    ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
    flex-wrap: wrap;
    li {
      flex-basis: ${`calc(100% / 2)`};
    }
  }
`;
