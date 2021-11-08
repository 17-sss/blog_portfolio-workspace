import { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PortfolioTemplate from 'templates/PortfolioTemplate';

type PortfolioPageProps = {
  data: {
    site: {
      siteMetadata: {
        title_portfolio: string;
        description: string;
        siteUrl: string;
      };
    };
    file: {
      publicURL: string;
    };
  };
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = function ({ data, ...props }) {
  const { site, file } = data;
  const { title_portfolio, description, siteUrl } = site.siteMetadata;
  const { publicURL } = file;

  return (
    <PortfolioTemplate {...props} title={title_portfolio} description={description} url={siteUrl} image={publicURL}>
    </PortfolioTemplate>
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
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`;
