import styled from '@emotion/styled';
import { Accordion, AccordionSummary, Card, CardContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MarkdownRenderer } from 'components/common';
import { getMediaQueries } from 'utils/style';

export const ProjectItemLayout = styled(({ ...props }) => <Card component="li" elevation={2} {...props} />)`
  padding: 24px;
  margin-bottom: 24px;

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 12px 18px;
  }
`;

export const ContentBox = styled(CardContent)`
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

  ${getMediaQueries({ type: 'mobile' })} {
    padding: 0;
  }
`;

export const AccordionBox = styled(Accordion)`
  &.Mui-expanded {
    margin: 0;
  }
  &:before {
    display: none;
  }
`;

export const AccordionOpenSummary = styled(({ ...props }) => (<AccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />))`
  min-height: 48px;
  padding: 0;
  &.Mui-expanded {
    min-height: 48px;
  }
  .MuiAccordionSummary-content {
    margin: 0;
  }
  svg {
    font-size: ${({ theme }) => theme.fontSizes['20']};
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
