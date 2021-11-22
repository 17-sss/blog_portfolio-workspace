import { FunctionComponent, useEffect } from 'react';

import Template, { TemplateProps } from './Template';
import { Header, Footer, MainContainer, GlobalStyle } from 'components/portfolio/Common';

import { usePortfolioDispatch } from 'utils/contexts/PortfolioContext';
import { PortfolioImage, PortfolioMarkdownData } from 'utils/types';

type PortfolioTemplateProps = TemplateProps & {
  markdownData: PortfolioMarkdownData[];
  waveImages: {
    waveImg: PortfolioImage | null;
    waveBackImg: PortfolioImage | null;
  };
};

const PortfolioTemplate: FunctionComponent<PortfolioTemplateProps> = ({
  title,
  description,
  url,
  image,
  markdownData,
  waveImages,
  children,
  ...props
}) => {
  const portfolioDispatch = usePortfolioDispatch();
  useEffect(() => {
    portfolioDispatch({
      type: 'SET_WAVE_IMG_URL',
      payload: waveImages,
    });
    portfolioDispatch({ type: 'SET_MARKDOWN_DATA', payload: markdownData });
  }, [markdownData]);

  return (
    <Template title={title} description={description} url={url} image={image} {...props}>
      <GlobalStyle />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Template>
  );
};

export default PortfolioTemplate;
