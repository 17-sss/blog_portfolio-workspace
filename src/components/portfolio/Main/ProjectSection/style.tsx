import styled from '@emotion/styled';
import { InnerContainer } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';

export const ProjectSectionLayout = styled.section`
  padding: 0 48px;
`;

export const ProjectSectionInnerBox = styled(InnerContainer)`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
`;
