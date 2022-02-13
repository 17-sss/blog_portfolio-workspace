export interface CommonMetaDataType {
  author: string;
  twitter: {
    site: string;
    creator: string;
  };
  webMasterKeys: {
    google: string;
    naver: string;
  };
}

export interface CommonMetaDataQuery {
  site: {
    siteMetadata: {
      common: {
        metaData: CommonMetaDataType;
      };
    };
  };
}
