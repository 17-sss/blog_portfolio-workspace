import { graphql, useStaticQuery } from 'gatsby';
import { BlogMetaDataQuery } from './types';

export * from './types';

export const useBlogMetaData = function () {
  const {
    site: {
      siteMetadata: {
        blog: { metaData },
      },
    },
    profileImg,
  } = useStaticQuery<BlogMetaDataQuery>(graphql`
    query {
      site {
        siteMetadata {
          blog {
            metaData {
              title
              description
              siteUrl
            }
          }
        }
      }
      profileImg: file(name: { eq: "profile-image" }) {
        childImageSharp {
          gatsbyImageData(width: 120, height: 120)
        }
        publicURL
      }
    }
  `);

  return { metaData, profileImg };
};
