import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';

import { InnerContainer } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { flexSet, getMediaQueries } from 'utils/style';

export const HomeSectionLayout = styled.section`
  position: relative;
`;

export const WaveGraphicBox = styled.div`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
  background-color: ${({ theme }) => theme.grayScaleColors.background};
  opacity: 0.75;
`;

export const SectionInnerBox = styled(InnerContainer)`
  ${flexSet({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 15%;
`;

export const IntroParagraph = styled(({ ...props }) => <Typography paragraph align="center" {...props} />)`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700;800&display=swap');
  font-family: 'Nanum Myeongjo', serif, Noto Sans KR, sans-serif;
  font-size: 3.3vw;
  padding: 0 24px;
  ${getMediaQueries('mobile', true)} {
    font-size: 3.5vh;
  }

  color: ${({ theme }) => theme.grayScaleColors.font};

  animation: blink 1.5s ease-in-out infinite alternate;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
