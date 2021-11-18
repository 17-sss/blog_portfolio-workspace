import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { InnerContainer, NormalGridList, Paragraph, TitleBox } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { getMediaQueries, setFlex } from 'utils/style';
import { setFadeInAnimation } from 'utils/style/animation';

export const SkillSectionLayout = styled.section`
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0;
  ${getMediaQueries({ type: 'mobile' })} {
    padding: ${`${PORTFOLIO_HEADER.height}px`} 12px 0;
  }
`;

export const SkillSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
  ${setFlex({ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' })}
`;

export const SkillTitleBox = styled(TitleBox)`
  ${setFadeInAnimation()}
`;
export const SubTitleParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
`;

export const TopSkillCard = styled(({ ...props }) => <Card elevation={2} {...props} />)`
  ${setFadeInAnimation()}
  width: 100%;
  padding: 24px 0;
  ${getMediaQueries({ type: 'desktop' })} {
    margin: 0 auto 16px;
  }
  ${getMediaQueries({ type: 'tablet' })} {
    margin: 0 auto 8px;
  }
  ${getMediaQueries({ type: 'mobile' })} {
    margin: 0 auto;
  }
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

export const SkillContainerBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  ${getMediaQueries({ type: 'tablet' })} {
    grid-template-columns: repeat(2, calc(100% / 2));
  }
  ${getMediaQueries({ type: 'mobile' })} {
    grid-template-columns: none;
  }
`;
