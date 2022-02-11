import { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import { StylesProvider } from '@material-ui/core/styles';
import { PortfolioContextProvider } from 'src/utils/contexts/PortfolioContext';

import PortfolioTemplate from 'src/templates/PortfolioTemplate';
import { PortfolioComposition } from 'src/compositions';
import { theme } from 'src/utils/style';

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
