import styled from '@emotion/styled';
import { InnerContainer } from 'components/portfolio/Common';
import { setFlex, getMediaQueries } from 'utils/style';
import { PORTFOLIO_HEADER } from 'utils/constants';

export const ProjectSectionLayout = styled.section`
  background-color: ${({ theme }) => theme.sectionColors.projects};
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0;
  ${getMediaQueries({type: 'mobile'})} {
    padding: ${`${PORTFOLIO_HEADER.height}px`} 12px 0;
  }
`;

export const ProjectSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
  ${setFlex({ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' })};
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  width: 100%;
`;