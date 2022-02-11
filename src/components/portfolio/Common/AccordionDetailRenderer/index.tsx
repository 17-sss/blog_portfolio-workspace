import { FunctionComponent } from 'react';
import { AccordionDetails } from '@material-ui/core';

import { DetailRenderer } from '..';
import * as S from './style';

export interface AccordionDetailRendererProps {
  ariaLabelText?: string;
  html: string;
}
const AccordionDetailRenderer: FunctionComponent<AccordionDetailRendererProps> = function ({
  ariaLabelText,
  html,
  ...props
}) {
  return (
    <S.AccordionLayout elevation={0} {...props}>
      <S.AccordionOpenSummary aria-label={ariaLabelText ?? 'AccordionDetailRenderer'} />
      <AccordionDetails>
        <DetailRenderer html={html} />
      </AccordionDetails>
    </S.AccordionLayout>
  );
};

export default AccordionDetailRenderer;
