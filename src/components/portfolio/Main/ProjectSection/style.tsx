import styled from '@emotion/styled';
import { InnerContainer } from '@components/portfolio/Common';
import { PORTFOLIO_HEADER_HEIGHT } from '@utils/constants';
import { setFlex, getMediaQueries } from '@utils/style';

export const ProjectSectionLayout = styled.section`
  background-color: ${({ theme }) => theme.sectionColors.projects};
  padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 48px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  ${getMediaQueries({ type: 'mobile' })} {
    padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 12px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  }
`;

export const ProjectSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER_HEIGHT}px)`};
  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })};
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  width: 100%;
`;
