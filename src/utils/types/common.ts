import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ImageType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
}

export interface UtterancesAttributesType {
  src: string;
  repo: string;
  issue_term: string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}
