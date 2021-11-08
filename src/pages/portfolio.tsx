import { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { StylesProvider } from '@material-ui/core/styles';

import PortfolioTemplate from 'templates/PortfolioTemplate';
import { PortfolioContextProvider } from 'utils/contexts/PortfolioContext';
import { HomeSection } from 'components/portfolio/Main';

import { theme } from 'utils/style';

type PortfolioPageProps = {
  data: {
    site: {
      siteMetadata: {
        title_portfolio: string;
        description: string;
        siteUrl: string;
      };
    };
    profileImg: {
      publicURL: string;
    };
    waveImg: {
      publicURL: string;
    };
    waveBackImg: {
      publicURL: string;
    };
  };
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = function ({ data, ...props }) {
  const { site, profileImg, waveImg, waveBackImg } = data;
  const { title_portfolio, description, siteUrl } = site.siteMetadata;
  const profileImgUrl = profileImg.publicURL;
  const waveImages = { waveImgUrl: waveImg.publicURL, waveBackImgUrl: waveBackImg.publicURL };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PortfolioContextProvider>
          <PortfolioTemplate
            {...{ waveImages, ...props }}
            title={title_portfolio}
            description={description}
            url={siteUrl}
            image={profileImgUrl}
          >
            <HomeSection />
          </PortfolioTemplate>
        </PortfolioContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default PortfolioPage;

export const getMetaData = graphql`
  query getMetaData {
    site {
      siteMetadata {
        title_portfolio
        description
        siteUrl
      }
    }
    profileImg: file(name: { eq: "profile-image" }) {
      publicURL
    }
    waveImg: file(name: { eq: "wave" }) {
      publicURL
    }
    waveBackImg: file(name: { eq: "wave_background" }) {
      publicURL
    }
  }
`;
