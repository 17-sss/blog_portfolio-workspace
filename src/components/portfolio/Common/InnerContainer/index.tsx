import { forwardRef, HTMLAttributes } from 'react';
import * as S from './style';

export type InnerContainerProps = HTMLAttributes<HTMLDivElement>;
export const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(({ children, ...props }, ref) => {
  return (
    <S.InnerContainerLayout ref={ref} {...props}>
      {children}
    </S.InnerContainerLayout>
  );
});
export default InnerContainer;
