import { FunctionComponent } from 'react';
import Template, { TemplateProps } from './Template';

import { MarkdownRenderer } from '@components/common';
import { Footer, FooterProps, GlobalStyle, MainContainer } from '@components/blog/Common';
import { CommentWidget, PostInfo, PostInfoProps } from '@components/blog/Post';
import { UtterancesAttributesType } from '@utils/types';

interface BlogPostTemplateProps extends TemplateProps {
  postInfoProps: PostInfoProps;
  html: string;
  utterancesAttr: UtterancesAttributesType;
  footerProps: FooterProps;
}

const BlogPostTemplate: FunctionComponent<BlogPostTemplateProps> = ({
  postInfoProps,
  html,
  utterancesAttr,
  footerProps,
  ...props
}) => {
  return (
    <Template {...props}>
      <GlobalStyle />
      <MainContainer>
        <PostInfo {...postInfoProps} />
        <MarkdownRenderer html={html} />
        <CommentWidget utterancesAttr={utterancesAttr} />
      </MainContainer>
      <Footer {...footerProps} />
    </Template>
  );
};

export default BlogPostTemplate;
