import { FunctionComponent, useEffect } from 'react';

import Template from './Template';
import { GlobalStyle } from '@components/portfolio/Common';

import { usePortfolioDispatch } from '@utils/contexts/PortfolioContext';
import { usePortfolioMarkdownData, usePortfolioMetaData } from '@hooks/queries';

const PortfolioTemplate: FunctionComponent = ({ children }) => {
  const markdownData = usePortfolioMarkdownData();
  const { waveBackImg, waveImg, profileImg, metaData } = usePortfolioMetaData();
  const portfolioDispatch = usePortfolioDispatch();

  useEffect(() => {
    portfolioDispatch({
      type: 'SET_WAVE_IMG_URL',
      payload: { waveImg, waveBackImg },
    });
    portfolioDispatch({ type: 'SET_MARKDOWN_DATA', payload: markdownData });
  }, [markdownData]);

  return (
    <Template {...{ ...metaData, image: profileImg.publicURL }}>
      <GlobalStyle />
      {children}
    </Template>
  );
};

export default PortfolioTemplate;
