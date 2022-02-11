import { graphql, useStaticQuery } from 'gatsby';
import { CommonMetaDataQuery } from './types';

export * from './types';

export const getCommonMetaData = function () {
  const {
    site: {
      siteMetadata: {
        common: { metaData: commonMetaData },
      },
    },
  } = useStaticQuery<CommonMetaDataQuery>(graphql`
    query {
      site {
        siteMetadata {
          common {
            metaData {
              author
              twitter {
                creator
                site
              }
              webMasterKeys {
                google
                naver
              }
            }
          }
        }
      }
    }
  `);

  return commonMetaData;
};
