import { FunctionComponent } from 'react';
import { AccordionDetails } from '@material-ui/core';
import { PortfolioMarkdownNode } from 'utils/types';
import * as S from './style';

export type AccordionDetailRendererProps = Pick<PortfolioMarkdownNode, 'html'> & {
  ariaLabelText?: string;
};
const AccordionDetailRenderer: FunctionComponent<AccordionDetailRendererProps> = function ({ ariaLabelText, html, ...props }) {
  return (
    <S.AccordionLayout elevation={0} {...props}>
      <S.AccordionOpenSummary aria-label={ariaLabelText ?? 'AccordionDetailRenderer'} />
      <AccordionDetails>
        <S.DetailRenderer html={html} />
      </AccordionDetails>
    </S.AccordionLayout>
  );
};

export default AccordionDetailRenderer;
