import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { InnerContainer, Paragraph } from 'components/portfolio/Common';
import { setFlex, getMediaQueries, theme, setFadeInAnimation } from 'utils/style';

export const HomeSectionLayout = styled.section`
  padding: 0 48px;
`;

export const WaveGraphicBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin: 0 auto;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.grayScaleColors.background};
  opacity: 0.75;
  z-index: -1;
`;

export const HomeSectionInnerBox = styled(InnerContainer)`
  ${setFlex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })};
  row-gap: 6vh;
  height: 100vh;
`;

export const IntroParagraph = styled(Paragraph)`
  font-family: 'Nanum Myeongjo', 'Noto Sans KR', 'Roboto', sans-serif, serif;
  font-size: 3.3vw;
  padding: 24px;

  ${getMediaQueries({type: "mobile"})} {
    font-size: 3.5vh;
  }

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

export const ScrollInfoBox = styled.div`
  ${setFlex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })};

  color: ${theme.grayScaleColors.font};
  font-size: 2vh;

  ${setFadeInAnimation()}
`;
export const ScrollDownButton = styled(Button)`
  padding: 0;
  min-width: fit-content;
  svg {
    color: ${theme.grayScaleColors.font};
    font-size: 4.5vh;
  }
`;
