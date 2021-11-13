import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getMediaQueries } from 'utils/style';
import { IntroduceListProps } from '.';

export const IntroduceListLayout = styled.ul<IntroduceListProps>`
  display: grid;

  padding: 0 12px;
  overflow: hidden;

  ${({ children }) => {
    const isArray = Array.isArray(children);
    const childrenLength = isArray ? children.length : +(Boolean(children));
    return css`
      ${getMediaQueries({type: "tabletDesktop"})} {
        grid-template-columns: ${`repeat(${childrenLength}, calc(100% / ${childrenLength}))`};
      }

      ${getMediaQueries({type: "mobile"})} {
        grid-template-rows: ${`repeat(${childrenLength}, calc(100% / ${childrenLength}))`};
        padding-bottom: 24px;
      }
    `;
  }}
`;
