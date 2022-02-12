import styled from '@emotion/styled';
import { MAX_WIDTH_INFO } from '@utils/constants';

export const InnerContainerLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${`${MAX_WIDTH_INFO.inner.desktop}px`};

  img {
    max-width: 100%;
    height: auto;
  }
`;
