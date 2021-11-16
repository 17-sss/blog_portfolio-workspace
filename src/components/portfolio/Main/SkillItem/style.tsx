import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { setFlex } from 'utils/style';
import { SkillItemProps } from '.';

export const SkillItemLayout = styled.li<Pick<SkillItemProps, 'color'>>`
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  padding: 12px;
  svg {
    max-width: 10vh;
    height: auto;
    ${({ color }) =>
      color &&
      css`
        fill: ${color};
      `}
  }
`;
