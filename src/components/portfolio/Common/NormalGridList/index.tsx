import { forwardRef, HTMLAttributes } from 'react';
import * as S from './style';

export type NormalGridListProps = HTMLAttributes<HTMLUListElement> & { isUseTabletSize?: boolean };
const NormalGridList = forwardRef<HTMLUListElement, NormalGridListProps>((props, ref) => {
  return (
    <S.NormalGridListLayout {...props} ref={ref}>
      {props.children}
    </S.NormalGridListLayout>
  );
});
export default NormalGridList;
