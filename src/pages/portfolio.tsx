import { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StylesProvider } from '@material-ui/core/styles';
import { PortfolioContextProvider } from '@utils/contexts/PortfolioContext';

import PortfolioTemplate from '@templates/PortfolioTemplate';
import { PortfolioComposition } from '@compositions';
import { theme } from '@utils/style';

const PortfolioPage: FunctionComponent = function () {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PortfolioContextProvider>
          <PortfolioTemplate>
            <PortfolioComposition />
          </PortfolioTemplate>
        </PortfolioContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default PortfolioPage;
