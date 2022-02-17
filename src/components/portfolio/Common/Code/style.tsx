import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CodeProps, CodeColorType } from '.';

type ColorInfoType = { [name in CodeColorType]: string };

const colorInfo: ColorInfoType = {
  gray: `rgba(120, 119, 116, 1)`,
  brown: `rgba(159, 107, 83, 1)`,
  orange: `rgba(217, 115, 13, 1)`,
  yellow: `rgba(203, 145, 47, 1)`,
  green: `rgba(68, 131, 97, 1)`,
  blue: `rgba(51, 126, 169, 1)`,
  purple: `rgba(144, 101, 176, 1)`,
  pink: `rgba(193, 76, 138, 1)`,
  red: `rgba(212, 76, 71, 1)`,
};

export const CodeLayout = styled.code<CodeProps>`
  color: ${({ color }) => colorInfo[color ?? 'red']};
  font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
  line-height: normal;
  background-color: rgba(135, 131, 120, 0.15);
  border-radius: 3px;
  font-size: 85%;
  padding: 0.2em 0.4em;

  ${({ isBold }) => isBold && css`font-weight: 600`};
`;
