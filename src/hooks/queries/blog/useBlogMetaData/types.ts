import { ImageType } from '@utils/types';

export interface BlogMetaDataQuery {
  site: {
    siteMetadata: {
      blog: {
        metaData: {
          title: string;
          siteUrl: string;
          description: string;
        };
      };
    };
  };
  profileImg: ImageType;
}
