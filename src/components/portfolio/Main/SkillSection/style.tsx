import styled from '@emotion/styled';
import { InnerContainer } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';

export const SkillSectionLayout = styled.section`
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0;
`;

export const SkillSectionInnerBox = styled(InnerContainer)`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
`;
