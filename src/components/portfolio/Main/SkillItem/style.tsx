import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getMediaQueries, setFlex } from 'utils/style';
import { SkillItemProps } from '.';

export const SkillItemLayout = styled.li<Pick<SkillItemProps, 'color'>>`
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  padding: 12px;

  ${getMediaQueries({ type: 'tablet' })} {
    padding: 10px;
  }

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 8px 0;
  }

  svg {
    max-width: 64px;
    height: auto;
    ${({ color }) =>
      color &&
      css`
        fill: ${color};
      `}
  }
`;
