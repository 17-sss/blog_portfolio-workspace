import { FunctionComponent } from 'react';
import queryString, { ParsedQuery } from 'query-string';

import BlogTemplate from '@templates/BlogTemplate';
import { useBlogConfigData, useBlogMetaData, useBlogPostData, useCommonMetaData } from '@hooks/queries';

interface IndexPageProps {
  location: {
    search: string;
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({ location: { search } }) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  const commonMetaData = useCommonMetaData();
  const { metaData: blogMetaData, profileImg } = useBlogMetaData();
  const postData = useBlogPostData();
  const configData = useBlogConfigData();

  const metaData = { ...blogMetaData, ...commonMetaData };
  const blogData = { postData, selectedCategory, profileImg, configData };
  const templateProps = { ...metaData, ...blogData };

  return <BlogTemplate {...templateProps} />;
};

export default IndexPage;