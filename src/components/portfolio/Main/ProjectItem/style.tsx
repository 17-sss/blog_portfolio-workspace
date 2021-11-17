import styled from '@emotion/styled';
import { Accordion, AccordionSummary, Card, CardContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MarkdownRenderer } from 'components/common';
import { Paragraph } from 'components/portfolio/Common';
import { getMediaQueries, setFlex } from 'utils/style';

export const ProjectItemLayout = styled(({ ...props }) => <Card component="li" elevation={2} {...props} />)`
  padding: 24px;
  margin-bottom: 24px;

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 12px 18px;
  }
`;

// [1] 전체 ContentBox =======================================
export const ContentBox = styled(CardContent)`
  ${setFlex({ justifyContent: 'center', flexDirection: 'column' })}

  ${getMediaQueries({ type: 'desktop' })} {
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    margin-bottom: 16px;
    padding: 0 6vh;

    &:last-of-type {
      padding-bottom: 0;
    }

    & > :last-of-type {
      /* ContentBox 안의 마지막 자식 (Accordion 컴포넌트)  */
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 0;
  }
`;

// [2] Carousel이 들어갈 ImageBox (inner)에 들어감 =======================================
export const ImageBox = styled.div`
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })}
  padding: 24px;

  .inner {
    ${getMediaQueries({ type: 'tablet' })} {
      max-width: 80%;
    }

    ${getMediaQueries({ type: 'mobile' })} {
      max-width: 90%;
    }
  }
`;

// [3] 텍스트 정보들이 들어갈 InfoBox =======================================
export const InfoBox = styled.div`
  ${setFlex({ justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' })}
  padding: 12px;

  ${getMediaQueries({ type: 'tablet', customWidth: { minWidth: 0 } })} {
    min-width: 75%;
    margin: 0 auto;
  }
`;

const CommonParagraph = styled(({ ...props }) => <Paragraph {...props} />)`
  ${setFlex({ justifyContent: 'flex-start', alignItems: 'center' })};
  flex-wrap: wrap;
`;
const SubParagraph = styled(CommonParagraph)`
  color: ${({ theme }) => theme.grayScaleColors.font};
  font-weight: 700;
  padding: 0;
`;

// 1) subTitle 텍스트
export const SubTitleText = styled(SubParagraph)`
  font-size: ${({ theme }) => theme.fontSizes['18']};
  margin-bottom: 4px;

  ${getMediaQueries({ type: 'mobile' })} {
    font-size: ${({ theme }) => theme.fontSizes['16']};
  }
`;

// 2) memberInfo 텍스트
export const MemberInfoText = styled(SubParagraph)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
  margin-bottom: 12px;

  ${getMediaQueries({ type: 'mobile' })} {
    font-size: ${({ theme }) => theme.fontSizes['14']};
  }
`;

// 3) duration, skills, type 텍스트가 들어갈 TextBox
export const TextBox = styled.div`
  ${setFlex({ alignItems: 'center' })};
  column-gap: 8px;
  & + & {
    margin-top: 8px;
  }
`;

// 3-1) duration, skills 텍스트 전용
export const NameText = styled(CommonParagraph)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScaleColors.font};
  padding: 0;
  margin-bottom: 0;

  ${getMediaQueries({ type: 'mobile' })} {
    font-size: ${({ theme }) => theme.fontSizes['14']};
  }
`;

export const ValueText = styled(NameText)`
  font-weight: 400;
  &.type {
    color: ${({ theme }) => theme.grayScaleColors.lightFont};
  }
`;

// 3-1-1) skills의 item들 디자인
export const Code = styled.code`
  font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
  line-height: normal;
  background: rgba(135, 131, 120, 0.15);
  color: #eb5757;
  border-radius: 3px;
  font-size: 85%;
  padding: 0.2em 0.4em;

  & + & {
    margin-left: 4px;
  }
`;

// 3-1-2) links의 item들 디자인
export const ExternalLink = styled.a`
  color: ${({theme}) => theme.grayScaleColors.font};
  font-weight: 500;
  text-decoration: none;
  outline: none;

  border-bottom: 0.05em solid ${({theme}) => theme.grayScaleColors.font};
  opacity: 0.7;

  & + & {
    margin-left: 6px;
  }
`;

// --

// 3-2) type 텍스트 전용
type TypeTextProps = { isLibrary?: boolean };
export const TypeText = styled(({ isLibrary, ...props }: TypeTextProps) => <ValueText {...props} />)`
  font-weight: 600;
  color: ${({ theme, isLibrary }) => (isLibrary ? theme.colors.basicGreen : theme.colors.darkBlue)};
`;

// [4] 마크다운의 상세 설명이 들어갈 AccordionBox =======================================
export const AccordionBox = styled(Accordion)`
  &.Mui-expanded {
    margin: 0;
  }
  &:before {
    display: none;
  }
`;

export const AccordionOpenSummary = styled(({ ...props }) => (
  <AccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))`
  min-height: 48px;
  padding: 0;
  &.Mui-expanded {
    min-height: 48px;
  }
  .MuiAccordionSummary-content {
    margin: 0;
  }
  svg {
    font-size: ${({ theme }) => theme.fontSizes['32']};
  }
`;

export const DetailRenderer = styled(MarkdownRenderer)`
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;
  width: 100%;

  ul,
  li {
    list-style: revert;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: 24px;
  }

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 0;
  }
`;
