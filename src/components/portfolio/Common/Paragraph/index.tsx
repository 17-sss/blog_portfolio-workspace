import { FunctionComponent } from 'react';
import { TypographyTypeMap } from '@material-ui/core';
import * as S from './style';

type AdditionalProps = {
  className?: string;
  isContent?: boolean;
  isTitle?: boolean;
  component?: React.ElementType;
  additionalFonts?: string[];
};
export type ParagraphProps = TypographyTypeMap<AdditionalProps>['props'];

const Paragraph: FunctionComponent<ParagraphProps> = function ({ children, ...props }) {
  return <S.ParagraphLayout {...props}>{children}</S.ParagraphLayout>;
};

export default Paragraph;
