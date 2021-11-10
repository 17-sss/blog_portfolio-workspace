import styled from '@emotion/styled';
import { Button, Typography } from '@material-ui/core';
import { flexSet, getMediaQueries, theme } from 'utils/style';

export const HomeSectionLayout = styled.section`
  ${flexSet({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })};
  row-gap: 6vh;
  height: 100%;
`;

export const IntroParagraph = styled(({ ...props }) => <Typography paragraph align="center" {...props} />)`
  font-family: 'Nanum Myeongjo', serif, Noto Sans KR, sans-serif;
  font-size: 3.3vw;
  padding: 24px;

  ${getMediaQueries('mobile', true)} {
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
  ${flexSet({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })};

  color: ${theme.grayScaleColors.font};
  font-size: 2vh;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 2s;
`;
export const ScrollDownButton = styled(Button)`
  padding: 0;
  min-width: fit-content;
  svg {
    color: ${theme.grayScaleColors.font};
    font-size: 4.5vh;
  }
`;
