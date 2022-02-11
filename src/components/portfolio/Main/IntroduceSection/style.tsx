import styled from '@emotion/styled';
import { InnerContainer, TitleBox } from 'src/components/portfolio/Common';
import { setFlex, getMediaQueries } from 'src/utils/style';
import { PORTFOLIO_HEADER_HEIGHT } from 'src/utils/constants';

// IntroduceSection : Default
export const IntroduceSectionLayout = styled.section`
  background-image: url(/curvyLines.png);
  background-repeat: no-repeat;
  background-size: cover;

  padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 48px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  ${getMediaQueries({type: 'mobile'})} {
    padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 12px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  }
`;

export const IntroduceSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER_HEIGHT}px)`};
  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })}
  row-gap: 8px;
`;

export const IntroduceTitleBox = styled(TitleBox)``;
export const IntroduceIconBox = styled.div`
  width: 100%;
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  .inner {
    text-align: center;
    background-color: ${({ theme }) => theme.grayScaleColors.font};
    border-radius: 50%;
  }
`;
