import { graphql, useStaticQuery } from 'gatsby';
import { BlogConfigQuery } from './types';

export * from './types';

export const useBlogConfigData = function () {
  const {
    site: {
      siteMetadata: {
        blog: { config },
      },
    },
  } = useStaticQuery<BlogConfigQuery>(graphql`
    query {
      site {
        siteMetadata {
          blog {
            config {
              introduce {
                text
              }
              footer {
                text
              }
              excludeCategories
              utterances {
                src
                repo
                issue_term
                label
                theme
                crossorigin
                async
              }
            }
          }
        }
      }
    }
  `);

  return config;
};
