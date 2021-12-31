import styled from '@emotion/styled';
import { InnerContainer } from 'components/portfolio/Common';
import { setFlex, getMediaQueries } from 'utils/style';
import { PORTFOLIO_HEADER } from 'utils/constants';

export const ProjectSectionLayout = styled.section`
  background-color: ${({ theme }) => theme.sectionColors.projects};
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px ${`${Math.floor(PORTFOLIO_HEADER.height / 2)}px`};
  ${getMediaQueries({type: 'mobile'})} {
    padding: ${`${PORTFOLIO_HEADER.height}px`} 12px ${`${Math.floor(PORTFOLIO_HEADER.height / 2)}px`};
  }
`;

export const ProjectSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })};
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  width: 100%;
`;