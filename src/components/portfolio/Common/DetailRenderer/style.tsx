import styled from '@emotion/styled';
import { MarkdownRenderer } from '@components/common';
import { getMediaQueries } from '@utils/style';
import { css } from '@emotion/react';

export const DetailRendererLayout = styled(MarkdownRenderer)`
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;
  width: 100%;

  // 좌측에 여백을 줄 padding-left 생성 (10부터 +2, 30까지)
  ${() => {
    const styles: string[] = [];
    for (let i = 10; i <= 30; i += 2) styles.push(`.pl--${i} { padding-left: ${i}px; }`);
    return css`${styles.join('')}`;
  }}

  ul,
  ol {
    list-style: revert;
    &.alpha {
      list-style: lower-alpha;
    }
  }

  ol {
    list-style: auto;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: 24px;
  }

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 0;
    li > br {
      display: none;
    }
  }
`;
