import { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StylesProvider } from '@material-ui/core/styles';
import { PortfolioContextProvider } from '@utils/contexts/PortfolioContext';

import PortfolioTemplate from '@templates/PortfolioTemplate';
import {
  usePortfolioMarkdownData,
  usePortfolioMetaData,
  usePortfolioConfigData,
  useCommonMetaData,
} from '@hooks/queries';
import { theme } from '@utils/style';

const PortfolioPage: FunctionComponent = function () {
  const { metaData: portfolioMetaData, profileImg: { publicURL: image }, waveBackImg, waveImg } = usePortfolioMetaData();
  const commonMetaData = useCommonMetaData();
  const configData = usePortfolioConfigData();
  const markdownData = usePortfolioMarkdownData();

  const metaData = { ...portfolioMetaData, ...commonMetaData };
  const templateProps = { ...metaData, configData, image, waveBackImg, waveImg, markdownData };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PortfolioContextProvider>
          <PortfolioTemplate {...templateProps} />
        </PortfolioContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default PortfolioPage;
