export interface CommonMetaDataQuery {
  site: {
    siteMetadata: {
      common: {
        metaData: {
          author: string;
          twitter: {
            site: string;
            creator: string;
          };
          webMasterKeys: {
            google: string;
            naver: string;
          };
        };
      };
    };
  };
}
