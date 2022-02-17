import { FunctionComponent, HTMLAttributes } from 'react';
import * as S from './style';

export type CodeColorType = 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
export interface CodeProps extends HTMLAttributes<HTMLElement> {
  color?: CodeColorType;
  isBold?: boolean;
}

const Code: FunctionComponent<CodeProps> = function ({ ...props }) {
  return <S.CodeLayout {...props}></S.CodeLayout>;
};

export default Code;