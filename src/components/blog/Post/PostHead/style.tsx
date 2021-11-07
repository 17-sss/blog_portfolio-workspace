import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GatsbyImgProps, PostHeadProps } from '.';

const PostHeadLayout = styled.div<Pick<PostHeadProps, "thumbnail">>`
  position: relative;
  width: 100%;
  height: 400px;
  ${({thumbnail}) => !thumbnail && css`background-color: #000;`}

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => <GatsbyImage {...props} style={{ position: 'absolute' }} />)`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export { PostHeadLayout, BackgroundImage };
