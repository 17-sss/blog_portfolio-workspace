import styled from '@emotion/styled';
import { Card, CardContent } from '@material-ui/core';
import { setFlex, getMediaQueries } from '@utils/style';
import { IntroduceItemProps } from '.';

type IntroduceItemLayoutProps = Pick<IntroduceItemProps, 'idx' | 'duration'>;
export const IntroduceItemLayout = styled.li<IntroduceItemLayoutProps>`
  padding: 12px 0;

  position: relative;
  ${getMediaQueries({ type: 'tabletDesktop' })} {
    margin: 0 8px;
  }
`;

export const IntroduceCard = styled(({ ...props }) => <Card elevation={4} {...props} />)`
  border-radius: 8px;
  height: 100%;
`;

export const IntroduceCardContent = styled(CardContent)`
  ${getMediaQueries({ type: 'tabletDesktop' })} {
    &:last-child {
      padding-bottom: 16px;
    }
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
      font-size: ${({ theme }) => theme.fontSizes["80"]};
    }
  }
`;
