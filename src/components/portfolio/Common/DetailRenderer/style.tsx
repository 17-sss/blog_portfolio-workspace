import styled from '@emotion/styled';
import { MarkdownRenderer } from '@components/common';
import { getMediaQueries } from '@utils/style';

export const DetailRendererLayout = styled(MarkdownRenderer)`
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;
  width: 100%;

  ul, ol {
    list-style: revert;
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
