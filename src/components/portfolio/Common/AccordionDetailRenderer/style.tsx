import styled from "@emotion/styled";
import { Accordion, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MarkdownRenderer } from 'components/common';
import { getMediaQueries } from "utils/style";

export const AccordionLayout = styled(Accordion)`
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
