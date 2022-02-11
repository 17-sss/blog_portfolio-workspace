import { graphql, useStaticQuery } from 'gatsby';
import { PortfolioConfigQuery } from './types';

export * from './types';

export const getPortfolioConfig = function () {
  const {
    site: {
      siteMetadata: {
        portfolio: { config },
      },
    },
  } = useStaticQuery<PortfolioConfigQuery>(graphql`
    query {
      site {
        siteMetadata {
          portfolio {
            config {
              header {
                text
              }
              footer {
                text
              }
              sections {
                home {
                  text
                }
                introduce {
                  introduceList {
                    direction {
                      contents
                      subject
                    }
                    goal {
                      contents
                      subject
                    }
                    motivation {
                      subject
                      contents
                    }
                  }
                  profileCard {
                    antecedents
                    contactInfo {
                      email
                      github
                      instagram
                    }
                    imageInfo {
                      alt
                      staticSrc
                    }
                    name
                  }
                  text
                }
                projects {
                  text
                }
                skills {
                  skillList {
                    backend {
                      color
                      name
                    }
                    communication {
                      color
                      name
                    }
                    frontend {
                      color
                      name
                    }
                    tools {
                      color
                      name
                    }
                  }
                  text
                  isUseTopSkillCards
                  topSkillList {
                    name
                    percent
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return config;
};
