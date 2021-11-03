module.exports = {
  siteMetadata: {
    title: `코딩하는 농사꾼 라노의 개발 블로그`,
    description: `꾸준함이 곧 발전이라 생각하는 주니어 개발자입니다.`,
    author: `Hoyoung Son <Rano>`,
    siteUrl: `https://17-sss.github.io`,
  },
  plugins: [
    'gatsby-plugin-sitemap', // sitemap 설정
    // canonical 설정 (검색 엔진 관련) - START
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://my-website.com/', // 임시
        stripQueryString: true,
      },
    },
    // canonical 설정 (검색 엔진 관련) - END

    // 기본 (TypeScript, Emotion 등) - START
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // 기본 (TypeScript, Emotion 등) - END

    // 마크다운 관련 - START
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    // 마크다운 관련 - END

    // 이미지 관련 - START
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // 이미지 관련 - END

    /* (gatsby-plugin-manifest 사용안함 / 제거됨)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
