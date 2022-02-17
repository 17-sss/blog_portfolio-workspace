import { graphql, useStaticQuery } from 'gatsby';
import { PortfolioMarkdownQuery } from './types';

export * from './types';

export const usePortfolioMarkdownData = function () {
  const {
    allMarkdownRemark: { edges: markdownData },
  } = useStaticQuery<PortfolioMarkdownQuery>(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { options: { isPortfolio: { eq: true } } } }
        sort: { order: DESC, fields: frontmatter___portfolioInfo___duration___startDate }
      ) {
        edges {
          node {
            html
            frontmatter {
              portfolioInfo {
                sectionType
                title
                subTitle
                duration {
                  startDate
                  endDate
                  isIng
                }
                memberInfo
                skills
                links {
                  name
                  href
                }
                images {
                  childImageSharp {
                    gatsbyImageData
                  }
                  publicURL
                }
                type
              }
            }
          }
        }
      }
    }
  `);

  return markdownData;
};
