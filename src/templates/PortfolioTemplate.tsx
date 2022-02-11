import { FunctionComponent, useEffect } from 'react';

import Template from './Template';
import { GlobalStyle } from 'src/components/portfolio/Common';

import { usePortfolioDispatch } from 'src/utils/contexts/PortfolioContext';
import { getPortfolioMarkdown, getPortfolioMetaData } from 'src/queries';

const PortfolioTemplate: FunctionComponent = ({ children }) => {
  const markdownData = getPortfolioMarkdown();
  const { waveBackImg, waveImg, profileImg, metaData } = getPortfolioMetaData();
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
