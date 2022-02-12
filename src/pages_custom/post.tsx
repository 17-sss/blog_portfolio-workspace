// gastby-node.js에서 해당 파일 적용함 (블로그 글들)
import React, { FunctionComponent, useEffect } from 'react';
import { graphql } from 'gatsby';

import BlogTemplate from '@templates/BlogTemplate';
import { MarkdownRenderer } from '@components/common';
import { PostHead, CommentWidget } from '@components/blog/Post';
import { PostPageItemType } from '@utils/types';

type PostPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

const PostPage: FunctionComponent<PostPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const { node } = edges[0];
  const { html, frontmatter } = node;
  const { title, summary, date, categories, thumbnail, options } = frontmatter;
  const publicURL = thumbnail?.publicURL;
  const gatsbyImageData = thumbnail?.childImageSharp.gatsbyImageData;

  useEffect(() => {
    if (!options) return;
    const { hide, isPortfolio } = options;
    if (!categories || hide || isPortfolio) window.location.href = '/404';
  }, [categories, options]);

  return !categories || options?.hide || options?.isPortfolio ? (
    <></>
  ) : (
    <BlogTemplate title={title} description={summary || ''} siteUrl={href} image={publicURL}>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <MarkdownRenderer html={html} />
      <CommentWidget />
    </BlogTemplate>
  );
};

export default PostPage;

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
            options {
              isPortfolio
              hide
            }
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
