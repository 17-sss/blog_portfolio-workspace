import { css } from '@emotion/react';
export const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
