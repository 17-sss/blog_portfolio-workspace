import { FunctionComponent, useEffect } from 'react';
import { usePortfolioDispatch } from 'utils/contexts/PortfolioContext';
import { Header, Footer, MainContainer, GlobalStyle } from 'components/portfolio/Common';
import Template, { TemplateProps } from './Template';

type PortfolioTemplateProps = TemplateProps & {
  waveImages: {
    waveImgUrl: string;
    waveBackImgUrl: string;
  };
};

const PortfolioTemplate: FunctionComponent<PortfolioTemplateProps> = ({
  title,
  description,
  url,
  image,
  waveImages,
  children,
  ...props
}) => {
  const portfolioDispatch = usePortfolioDispatch();
  useEffect(() => portfolioDispatch({ type: 'SET_WAVE_IMG_URL', payload: waveImages }), [waveImages]);

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
