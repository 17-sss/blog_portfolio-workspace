import { FunctionComponent, useMemo } from 'react';
import queryString, { ParsedQuery } from 'query-string';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import BlogTemplate from '@templates/BlogTemplate';
import { BlogComposition } from '@compositions';

import { CategoryListProps } from '@components/blog/Main';
import { PostListItemType } from '@utils/types';
import { BLOG_EXCLUDE_CATEGORIES } from '@utils/constants';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        blog: {
          metaData: {
            title: string;
            description: string;
            siteUrl: string;
          };
        };
      };
    };
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: {
        blog: {
          metaData: { title, description, siteUrl },
        },
      },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (list: CategoryListProps['categoryList'], data: PostListItemType) => {
          const {
            node: {
              frontmatter: { categories, options },
            },
          } = data;

          const isHide = options?.hide;
          const isExcludedCategory =
            categories && categories.some(category => BLOG_EXCLUDE_CATEGORIES.includes(category));
          if (isHide || isExcludedCategory) return list;

          let categoryTmp = '';
          categories.forEach(category => {
            if (categoryTmp) categoryTmp += `/${category}`;
            else categoryTmp = `${category}`;

            if (list[categoryTmp] === undefined) list[categoryTmp] = 1;
            else list[categoryTmp]++;
          });

          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <BlogTemplate title={title} description={description} siteUrl={siteUrl} image={publicURL}>
      <BlogComposition
        profileImage={gatsbyImageData}
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        posts={edges}
      />
    </BlogTemplate>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          fields {
            slug
          }
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
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
