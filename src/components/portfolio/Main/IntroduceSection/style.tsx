import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Card } from '@material-ui/core';
import { InnerContainer } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { flexSet, getMediaQueries } from 'utils/style';

// IntroduceSection : Default
export const IntroduceSectionLayout = styled.section`
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0;

  background-image: url(/curvyLines.png);
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'Do Hyeon', 'Nanum Myeongjo', Noto Sans KR, sans-serif;
`;

export const IntroduceSectionInnerBox = styled(InnerContainer)`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
`;

type TextListProps = {
  dataLength?: number;
};
export const TextList = styled.ul<TextListProps>`
  ${({ dataLength }) =>
    dataLength
      ? css`
          display: grid;
          align-items: center;
          grid-template-rows: ${`repeat(${dataLength}, 1fr)`};
        `
      : flexSet({ flexDirection: 'column', justifyContent: 'space-evenly' })}

  position: relative;
  height: 100%;
  margin: 0 5%;
  overflow: hidden;
`;

type TextItemProps = {
  idx: number;
  duration?: number;
  useIdx?: boolean;
};
export const TextItem = styled.li<TextItemProps>`
  width: fit-content;
  position: relative;

  &:nth-of-type(2n - 1) {
    margin-right: auto;

    animation: ${({ useIdx, duration = 1.5, idx }) => `${useIdx ? (idx + 1) * duration : duration}s slide-right`};
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
    animation: ${({ useIdx, duration = 1.5, idx }) => `${useIdx ? (idx + 1) * duration : duration}s slide-left`};
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
