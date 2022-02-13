import { FunctionComponent } from 'react';

import Template, { TemplateProps } from './Template';

import { Footer, GlobalStyle, MainContainer } from '@components/blog/Common';
import { CategoryList, Introduction, PostList } from '@components/blog/Main';
import { PostNodeType, BlogConfigType } from '@hooks/queries';
import { ImageType } from '@utils/types';

interface BlogTemplateProps extends Omit<TemplateProps, 'image'> {
  postData: PostNodeType[];
  selectedCategory: string;
  profileImg: ImageType;
  configData: BlogConfigType;
}

const BlogTemplate: FunctionComponent<BlogTemplateProps> = ({
  postData,
  selectedCategory,
  profileImg,
  configData,
  ...props
}) => {
  const {
    childImageSharp: { gatsbyImageData },
    publicURL: image,
  } = profileImg;
  const { introduce, footer, excludeCategories } = configData;

  const introductionProps = { ...introduce, gatsbyImageData };
  const listProps = { selectedCategory, postData, excludeCategories };

  return (
    <Template {...{ ...props, image }}>
      <GlobalStyle />
      <MainContainer>
        <Introduction {...introductionProps} />
        <CategoryList {...listProps} />
        <PostList {...listProps} />
      </MainContainer>
      <Footer {...footer} />
    </Template>
  );
};

export default BlogTemplate;
