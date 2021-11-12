import { FunctionComponent } from 'react';
import { TypographyTypeMap } from '@material-ui/core';
import * as S from './style';

export type ParagrphProps = TypographyTypeMap['props'] & { isContent?: boolean };
const Paragrph: FunctionComponent<ParagrphProps> = function ({ children, ...props }) {
  return <S.ParagraphLayout {...props}>{children}</S.ParagraphLayout>;
};

export default Paragrph;
