import { forwardRef } from 'react';
import * as S from './style';

export type NormalGridListProps = React.HTMLProps<HTMLUListElement>;
export const NormalGridList = forwardRef<HTMLUListElement, NormalGridListProps>((props, ref) => {
  return (
    <S.NormalGridListLayout {...{ props }} ref={ref}>
      {props.children}
    </S.NormalGridListLayout>
  );
});
export default NormalGridList;
