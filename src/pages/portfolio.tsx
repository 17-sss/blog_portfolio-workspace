import { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { StylesProvider } from '@material-ui/core/styles';
import { PortfolioContextProvider } from 'utils/contexts/PortfolioContext';

import PortfolioTemplate from 'templates/PortfolioTemplate';
import { PortfolioComposition } from 'compositions';

import { PortfolioMarkdownData } from 'utils/types';
import { theme } from 'utils/style';

type PortfolioPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PortfolioMarkdownData[];
    };
    site: {
      siteMetadata: {
        title_portfolio: string;
        description: string;
        siteUrl_portfolio: string;
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
  const { site, profileImg, waveImg, waveBackImg, allMarkdownRemark: { edges } } = data;
  const { title_portfolio, description, siteUrl_portfolio } = site.siteMetadata;
  const profileImgUrl = profileImg.publicURL;
  const waveImages = { waveImgUrl: waveImg.publicURL, waveBackImgUrl: waveBackImg.publicURL };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PortfolioContextProvider>
          <PortfolioTemplate
            {...{ waveImages, ...props }}
            markdownData={edges}
            title={title_portfolio}
            description={description}
            url={siteUrl_portfolio}
            image={profileImgUrl}
          >
            <PortfolioComposition />
          </PortfolioTemplate>
        </PortfolioContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default PortfolioPage;

export const getPortpolioData = graphql`
  query getPortpolioData {
    allMarkdownRemark(filter: { frontmatter: { options: { isPortfolio: { eq: true } } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
    site {
      siteMetadata {
        title_portfolio
        description
        siteUrl_portfolio
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
