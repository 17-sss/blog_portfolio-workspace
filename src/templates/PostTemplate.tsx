import React, { FunctionComponent, useEffect } from 'react';
import { graphql } from 'gatsby';

import { MarkdownRenderer } from 'components/common';
import { PostHead, CommentWidget } from 'components/blog/Post';
import { PostPageItemType } from 'utils/types';
import BlogTemplate from 'templates/BlogTemplate';

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
  const { title, summary, date, categories, thumbnail, hide } = frontmatter;
  const publicURL = thumbnail?.publicURL;
  const gatsbyImageData = thumbnail?.childImageSharp.gatsbyImageData;

  useEffect(() => {
    if (!categories || hide) window.location.href = '/404';
  }, [categories, hide]);

  return !categories || hide ? (
    <></>
  ) : (
    <BlogTemplate title={title} description={summary || ''} url={href} image={publicURL}>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <MarkdownRenderer html={html} />
      <CommentWidget />
    </BlogTemplate>
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
            hide
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
