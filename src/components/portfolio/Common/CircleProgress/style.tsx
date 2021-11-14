import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';
import { setFlex } from 'utils/style';
import { Paragraph } from '..';

export const CircleProgressLayout = styled.div`
  display: inline-flex;
  position: relative;
`;

type ProgressProps = CircularProgressProps & {
  customColor?: string;
};
export const Progress = styled(({ customColor, ...props }: ProgressProps) => <CircularProgress {...props} />)`
  ${({ customColor }) =>
    customColor &&
    css`
      color: ${customColor};
    `};
`;

export const ProgressInfoBox = styled.div`
  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

type InfoParagraphProps = { customColor?: string; fontSize?: string };
export const InfoParagraph = styled(({ customColor, fontSize, ...props }: InfoParagraphProps) => (
  <Paragraph variant="caption" component="div" {...props} />
))`
  padding: 0;
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `};
  ${({ theme, customColor }) => {
    return css`
      color: ${customColor || theme.grayScaleColors.font};
    `;
  }};
`;
