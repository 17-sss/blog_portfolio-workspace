import styled from '@emotion/styled';
import { Accordion, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

