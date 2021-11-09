import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { META_DATA } from 'utils/constants';

export type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = function ({ title, description, image, url, children }) {
  const {
    twitter: { site, creator },
    webMasterKeys: { google, naver },
  } = META_DATA;

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
        <meta property="og:url" content={url} />
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