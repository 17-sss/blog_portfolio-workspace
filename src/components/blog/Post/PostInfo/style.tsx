import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface PostInfoLayoutProps {
  thumbnail?: IGatsbyImageData;
}
export const PostInfoLayout = styled.div<PostInfoLayoutProps>`
  position: relative;
  width: 100%;
  height: 400px;
  ${({ thumbnail }) =>
    !thumbnail &&
    css`
      background-color: #000;
    `}

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export interface GatsbyImgProps {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
}
export const BackgroundImage = styled((props: GatsbyImgProps) => (<GatsbyImage {...props} style={{ position: 'absolute' }} />))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

// ---------------
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`;
