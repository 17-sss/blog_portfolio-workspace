import styled from '@emotion/styled';
import { Card, CardContent } from '@material-ui/core';
import { setFlex, getMediaQueries } from 'utils/style';
import { setFadeInAnimation, setSlideAnimation } from 'utils/style/animation';
import { IntroduceItemProps } from '.';

type IntroduceItemLayoutProps = Pick<IntroduceItemProps, 'idx' | 'duration'>;
export const IntroduceItemLayout = styled.li<IntroduceItemLayoutProps>`
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

export const IntroduceIconBox = styled.div`
  width: 100%;
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  .inner {
    text-align: center;

    background-color: ${({ theme }) => theme.grayScaleColors.font};
    border-radius: 50%;
    svg {
      color: ${({ theme }) => theme.grayScaleColors.offWhite};
      font-size: 8vh;
    }
  }
`;
