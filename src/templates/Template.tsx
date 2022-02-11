import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { getCommonMetaData } from 'src/queries';

export interface TemplateProps {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = function ({ title, description, image, siteUrl, children }) {
  const {
    twitter: { site, creator },
    webMasterKeys: { google, naver },
  } = getCommonMetaData();

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content={site} />
        <meta name="twitter:creator" content={creator} />

        <meta name="google-site-verification" content={google} />
        <meta name="naver-site-verification" content={naver} />

        <html lang="ko" />
      </Helmet>
      {children}
    </>
  );
};

export default Template;
