import styled from '@emotion/styled';
import { Card, CardContent } from '@material-ui/core';
import { InnerContainer, SubTitleBox } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { setFlex, getMediaQueries } from 'utils/style';
import { setFadeInAnimation, setSlideAnimation } from 'utils/style/animation';

// IntroduceSection : Default
export const IntroduceSectionLayout = styled.section`
  padding: ${`${PORTFOLIO_HEADER.height}px`} 48px 0px;

  background-image: url(/curvyLines.png);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroduceSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};

  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })}
  row-gap: 8px;

  * {
    font-family: 'Noto Sans KR', 'Do Hyeon', 'Roboto', 'Nanum Myeongjo', sans-serif;
    font-weight: 500;
  }
`;

type IntroduceListProps = {
  dataLength?: number;
};
export const IntroduceList = styled.ul<IntroduceListProps>`
  display: grid;

  padding: 0 12px;
  overflow: hidden;

  gap: 1.2vh;
  ${getMediaQueries('tabletDesktop')} {
    grid-template-columns: ${({ dataLength }) => `repeat(3, calc(100% / ${dataLength ?? 3}))`};
  }

  ${getMediaQueries('mobile')} {
    grid-template-rows: ${({ dataLength }) => `repeat(3, calc(100% / ${dataLength ?? 3}))`};
    padding-bottom: 24px;
  }
`;

type IntroduceItemProps = {
  idx?: number;
  duration?: number;
};
export const IntroduceItem = styled.li<IntroduceItemProps>`
  margin: 0 16px;
  padding: 12px 0;

  position: relative;
  ${getMediaQueries('tabletDesktop')} {
    ${setFadeInAnimation()}
  }

  ${getMediaQueries('mobile')} {
    &:nth-of-type(2n - 1) {
      ${({ duration, idx }) => setSlideAnimation({ direction: 'right', duration, idx })}
    }

    &:nth-of-type(2n) {
      ${({ duration, idx }) => setSlideAnimation({ direction: 'left', duration, idx })}
    }
  }
`;

export const IntroduceCard = styled(({ ...props }) => <Card elevation={4} {...props} />)`
  border-radius: 20px;
  height: 100%;
`;

export const IntroduceCardContent = styled(CardContent)`
  &:last-child {
    padding-bottom: 16px;
  }
`;

export const IntroduceSubTitleBox = styled(SubTitleBox)`
  ${setFadeInAnimation()}
`;

export const IntroduceIconBox = styled.div`
  width: 100%;
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  .inner {
    text-align: center;

    background-color: ${({ theme }) => theme.grayScaleColors.font};
    border-radius: 50%;
    svg {
      color: ${({ theme }) => theme.grayScaleColors.offWhite};
      font-size: 10vh;
    }
  }
`;