import { ImageType } from '@utils/types';

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
  waveImg: ImageType;
  waveBackImg: ImageType;
}
