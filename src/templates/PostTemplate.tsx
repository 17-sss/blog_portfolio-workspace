import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Template from 'components/blog/Common/Template';
import { PostHead, PostContent, CommentWidget } from 'components/blog/Post';
import { PostPageItemType } from 'utils/types';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const { node } = edges[0];
  const { html, frontmatter } = node;
  const { title, summary, date, categories, thumbnail } = frontmatter;
  const publicURL = thumbnail?.publicURL;
  const gatsbyImageData = thumbnail?.childImageSharp.gatsbyImageData;

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <PostContent html={html} />
      <CommentWidget />
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
              publicURL
            }
          }
        }
      }
    }
  }
`;
