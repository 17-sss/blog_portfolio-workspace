import { graphql, useStaticQuery } from 'gatsby';
import { BlogPostDataQuery } from './types';

export * from './types';

export const useBlogPostData = function () {
  const {
    allMarkdownRemark: { edges: postData },
  } = useStaticQuery<BlogPostDataQuery>(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            html
            frontmatter {
              title
              summary
              date(formatString: "YYYY.MM.DD.")
              categories
              options {
                isPortfolio
                hide
              }
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 768, height: 400)
                }
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  return postData;
};
