import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostHeadInfoProps } from '../PostHeadInfo';

type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

export type { GatsbyImgProps, PostHeadProps };
