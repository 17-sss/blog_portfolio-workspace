import styled from '@emotion/styled';

export const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 40px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  strong {
    font-weight: 900;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 12px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 36px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 17px;
  }

  h6 {
    font-size: 16px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 8px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: none;
    box-shadow: 0 0 0 0.1px #000;
    margin: 30px 0;

    &.thin {
      box-shadow: 0 0 0 0.04px #000;
      margin: 8px 0;
    }
  }

  // Adjust Link Element Style
  a {
    /* color: #4263eb;
    text-decoration: underline; */

    color: #484653;
    font-weight: 500;
    text-decoration: none;
    outline: none;
    border-bottom: 0.05em solid #484653;
    opacity: 0.7;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }

    * {
      font-family: 'Roboto', 'Noto Sans KR', system-ui, Apple SD Gothic Neo, AppleGothic, 'Nanum Myeongjo', sans-serif,
        serif;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // code element design
  *:not(pre) > code[class*='language-'] {
    font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
    line-height: normal;
    background-color: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }

  tr {
    background-color: #fefefe;
  }

  tr:nth-of-type(2n) {
    background-color: #f6f8fa;
  }

  th,
  td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
  }

  th {
    font-weight: 600;
  }

  // background color
  .bg {
    &--gray { background-color: rgb(241, 241, 239) !important; }
    &--brown { background-color: rgb(244, 238, 238) !important; }
    &--orange { background-color: rgb(251, 236, 221) !important; }
    &--yellow { background-color: rgb(251, 243, 219) !important; }
    &--green { background-color: rgb(237, 243, 236) !important; }
    &--blue { background-color: rgb(231, 243, 248) !important; }
    &--purple { background-color: rgba(244, 240, 247, 0.8) !important; }
    &--pink { background-color: rgba(249, 238, 243, 0.8) !important; }
    &--red { background-color: rgb(253, 235, 236) !important; }
  }

  // text colors, bold & italic
  .text {
    &--gray { color: rgba(120, 119, 116, 1) !important; }
    &--brown { color: rgba(159, 107, 83, 1) !important; }
    &--orange { color: rgba(217, 115, 13, 1) !important; }
    &--yellow { color: rgba(203, 145, 47, 1) !important; }
    &--green { color: rgba(68, 131, 97, 1) !important; }
    &--blue { color: rgba(51, 126, 169, 1) !important; }
    &--purple { color: rgba(144, 101, 176, 1) !important; }
    &--pink { color: rgba(193, 76, 138, 1) !important; }
    &--red { color: rgba(212, 76, 71, 1) !important; }

    &--italic { font-style: italic; };
    &--bold { font-weight: 600; };
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 15px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 13px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;
