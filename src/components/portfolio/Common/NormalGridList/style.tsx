import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQueries } from '@utils/style';
import { NormalGridListProps } from '.';

export const NormalGridListLayout = styled.ul<NormalGridListProps>`
  display: grid;

  padding: 0 12px;
  overflow: hidden;

  ${({ children, isUseTabletSize }) => {
    const isArray = Array.isArray(children);
    const childrenLength = isArray ? children.length : +Boolean(children);
    return css`
      ${getMediaQueries({ type: isUseTabletSize ? 'desktop' : 'tabletDesktop' })} {
        grid-template-columns: ${`repeat(${childrenLength}, calc(100% / ${childrenLength}))`};
      }

      ${getMediaQueries({ type: 'mobile' })} {
        grid-template-rows: ${`repeat(${childrenLength}, calc(100% / ${childrenLength}))`};
        padding-bottom: 24px;
      }
    `;
  }}
`;
