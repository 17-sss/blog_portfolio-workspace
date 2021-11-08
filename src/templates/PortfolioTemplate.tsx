import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { Header, Footer, GlobalStyle } from 'components/portfolio/Common';
import Template, { TemplateProps } from './Template';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/style';

const PortfolioTemplate: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
  ...props
}) => (
  <PortfolioTemplateLayout {...props}>
    <Template title={title} description={description} url={url} image={image}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </Template>
  </PortfolioTemplateLayout>
);

export default PortfolioTemplate;

const PortfolioTemplateLayout = styled.main`
  display: flex;
`;
