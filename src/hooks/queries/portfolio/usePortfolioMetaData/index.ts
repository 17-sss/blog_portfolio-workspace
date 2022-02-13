import { graphql, useStaticQuery } from 'gatsby';
import { PortfolioMetaDataQuery } from './types';

export * from './types';

export const usePortfolioMetaData = function () {
  const {
    profileImg,
    site: {
      siteMetadata: {
        portfolio: { metaData },
      },
    },
    waveBackImg,
    waveImg,
  } = useStaticQuery<PortfolioMetaDataQuery>(graphql`
    query {
      site {
        siteMetadata {
          portfolio {
            metaData {
              title
              siteUrl
              description
            }
          }
        }
      }
      profileImg: file(name: { eq: "profile-image" }) {
        publicURL
      }
      waveImg: file(name: { eq: "wave" }) {
        childImageSharp {
          gatsbyImageData
        }
        publicURL
      }
      waveBackImg: file(name: { eq: "wave_background" }) {
        childImageSharp {
          gatsbyImageData
        }
        publicURL
      }
    }
  `);

  return { metaData, profileImg , waveBackImg, waveImg };
};
