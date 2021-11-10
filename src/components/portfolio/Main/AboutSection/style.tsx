import styled from '@emotion/styled';
import { InnerContainer } from 'components/portfolio/Common';
import { Card } from '@material-ui/core';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { flexSet, getMediaQueries } from 'utils/style';
import { TextItemProps } from '.';

// AboutSection : Default
export const AboutSectionLayout = styled.section`
  padding: 0 48px;

  background-image: url(/curvyLines.png);
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'Do Hyeon', 'Nanum Myeongjo', Noto Sans KR, sans-serif;
`;

export const AboutSectionInnerBox = styled(InnerContainer)`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
`;

export const TextList = styled.ul`
  ${flexSet({ flexDirection: 'column', justifyContent: 'space-evenly' })};
  position: relative;
  height: 100%;
  margin: 0 5%;
  overflow: hidden;
`;

export const TextItem = styled.li<TextItemProps>`
  width: fit-content;
  position: relative;

  &:nth-of-type(2n - 1) {
    margin-right: auto;

    animation: ${({idx}) => `${(idx + 1) * 0.4}s slide-right`};
    @keyframes slide-right {
      from {
        right: 100%;
        opacity: 0;
      }
      to {
        right: 0%;
        opacity: 1;
      }
    }
  }

  &:nth-of-type(2n) {
    margin-left: auto;
    animation: ${({idx}) => `${(idx + 1) * 0.4}s slide-left`};
    @keyframes slide-left {
      from {
        left: 100%;
        opacity: 0;
      }
      to {
        left: 0%;
        opacity: 1;
      }
    }
  }
`;

export const TextCard = styled(Card)`
  font-size: 2.1vh;
  padding: 24px;
  border-radius: 20px;

  ${getMediaQueries('mobile', true)} {
    font-size: 1.4vh;
    padding: 16px;
  }
`;
