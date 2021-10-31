import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Template from 'components/Common/Template';
import { PostHead, PostContent } from 'components/Post';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const { node } = edges[0];
  const { html, frontmatter } = node;
  const { title, summary, date, categories, thumbnail } = frontmatter;
  const gatsbyImageData = thumbnail.childImageSharp.gatsbyImageData;

  return (
    <Template>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <PostContent html={html} />
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
