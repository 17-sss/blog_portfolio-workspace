import { forwardRef, HTMLAttributes } from 'react';
import { Paragraph } from '..';
import * as S from './style';

type TitleBoxProps = HTMLAttributes<HTMLDivElement> & { title?: string; subTitle?: string };
const TitleBox = forwardRef<HTMLDivElement, TitleBoxProps>(({ title, subTitle, children, ...props }, ref) => {
  return (
    <S.TitleBoxLayout ref={ref} {...props}>
      {title && (
        <Paragraph align="center" variant="h2" isTitle>
          {title}
        </Paragraph>
      )}
      <S.SubTitleParagraph>{subTitle}</S.SubTitleParagraph>
    </S.TitleBoxLayout>
  );
});

export default TitleBox;
