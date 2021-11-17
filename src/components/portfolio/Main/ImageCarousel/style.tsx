import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Carousel from 'rano-react-carousel';

export const CarouselLayout = styled(Carousel)`
  ul {
    width: 100%;
  }
`;

const cssImage = css`
  width: 100%;
  height: 100%;
`;
export const CarouselGatsbyImage = styled(GatsbyImage)`
  ${cssImage}
`;

export const Image = styled.img`
  ${cssImage}
`;
