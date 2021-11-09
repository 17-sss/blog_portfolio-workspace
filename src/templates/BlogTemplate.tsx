import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { GlobalStyle, Footer } from 'components/blog/Common';
import Template, { TemplateProps } from './Template';

const BlogTemplate: FunctionComponent<TemplateProps> = ({ title, description, url, image, children, ...props }) => (
  <BlogTemplateLayout {...props}>
    <Template title={title} description={description} url={url} image={image}>
      <GlobalStyle />
      {children}
      <Footer />
    </Template>
  </BlogTemplateLayout>
);

export default BlogTemplate;

const BlogTemplateLayout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;