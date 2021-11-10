import styled from '@emotion/styled';
import { PORTFOLIO_HEADER } from 'utils/constants';

export const WaveGraphicBox = styled.div`
  height: ${`calc(100vh - ${PORTFOLIO_HEADER.height}px)`};
  background-color: ${({ theme }) => theme.grayScaleColors.background};
  opacity: 0.75;
`;

export const SectionBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
