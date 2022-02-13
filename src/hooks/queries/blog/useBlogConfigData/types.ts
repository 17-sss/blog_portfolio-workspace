import { UtterancesAttributesType } from '@utils/types';

export interface BlogConfigType {
  introduce: { text: string };
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
