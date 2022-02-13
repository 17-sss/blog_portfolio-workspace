// gastby-node.js에서 해당 파일 적용함 (블로그 글들, 이 파일의 경우 직접 데이터를 불러옴)
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import { PostNodeType, useBlogConfigData, useCommonMetaData } from '@hooks/queries';
import BlogPostTemplate from '@templates/BlogPostTemplate';

interface PostPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostNodeType[];
    };
  };
  location: {
    href: string;
  };
}

const PostPage: FunctionComponent<PostPageProps> = function ({ location: { href: siteUrl }, data }) {
  const {
    allMarkdownRemark: { edges: postData },
  } = data;

  const { utterances: utterancesAttr, footer: footerProps } = useBlogConfigData();
  const commonMetaData = useCommonMetaData();

  const [currentNode, setCurrentNode] = useState<PostNodeType['node'] | null>(null);

  useEffect(() => {
    if (!postData || !postData.length) return;
    setCurrentNode(() => postData[0].node);
  }, [postData]);

  useEffect(() => {
    if (!currentNode) return;
    const { options, categories } = currentNode.frontmatter;
    if (!categories || options?.hide || options?.isPortfolio) window.location.href = '/404';
  }, [currentNode]);

  const templateProps = useMemo(() => {
    if (!currentNode || !utterancesAttr || !commonMetaData) return null;
    const { html, frontmatter } = currentNode;
    const { title, summary, date, thumbnail, categories, options } = frontmatter;

    if (!categories || options?.hide || options?.isPortfolio) return null;

    const metaData = { title, description: summary ?? '', siteUrl, image: thumbnail?.publicURL, ...commonMetaData };
    const postInfoProps = { title, date, categories, thumbnail: thumbnail?.childImageSharp.gatsbyImageData };

    return { ...metaData, html, postInfoProps, utterancesAttr, footerProps };
  }, [currentNode, utterancesAttr, commonMetaData]);

  return templateProps ? <BlogPostTemplate {...templateProps} /> : <></>;
};

export default PostPage;

// -----------

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
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
