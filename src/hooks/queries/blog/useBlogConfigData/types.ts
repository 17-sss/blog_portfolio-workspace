import { UtterancesAttributesType } from '@utils/types';

export interface AdditionalLinkInfo {
  text: string;
  href: string;
  isGatsbyLink?: boolean;
}

export interface BlogConfigType {
  information: { text: string; description: string };
  introduce: { text: string; links: AdditionalLinkInfo[] };
  footer: { text: string };
  excludeCategories: string[];
  utterances: UtterancesAttributesType;
}

export interface BlogConfigQuery {
  site: {
    siteMetadata: {
      blog: { config: BlogConfigType };
    };
  };
}
