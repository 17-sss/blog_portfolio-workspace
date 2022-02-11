import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { GlobalStyle, Footer } from 'src/components/blog/Common';
import Template, { TemplateProps } from './Template';

const BlogTemplate: FunctionComponent<TemplateProps> = ({ title, description, siteUrl, image, children, ...props }) => (
  <BlogTemplateLayout {...props}>
    <Template title={title} description={description} siteUrl={siteUrl} image={image}>
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
