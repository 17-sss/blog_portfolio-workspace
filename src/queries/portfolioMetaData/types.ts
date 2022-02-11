import { PortfolioImageType } from '..';

export interface PortfolioMetaDataQuery {
  site: {
    siteMetadata: {
      portfolio: {
        metaData: {
          title: string;
          siteUrl: string;
          description: string;
        };
      };
    };
  };
  profileImg: {
    publicURL: string;
  };
  waveImg: PortfolioImageType;
  waveBackImg: PortfolioImageType;
}
