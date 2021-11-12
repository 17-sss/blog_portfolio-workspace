import styled from '@emotion/styled';
import { InnerContainer, TitleBox } from 'components/portfolio/Common';
import { PORTFOLIO_HEADER } from 'utils/constants';
import { setFlex } from 'utils/style';
import { setFadeInAnimation } from 'utils/style/animation';

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
    font-family: 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', 'Do Hyeon', 'Nanum Myeongjo', sans-serif;
    font-weight: 400;
  }
`;

export const IntroduceTitleBox = styled(TitleBox)`
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