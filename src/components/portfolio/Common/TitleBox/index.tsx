import { FunctionComponent } from 'react';
import { Paragraph } from '..';
import * as S from './style';

type TitleBoxProps = { title?: string; subTitle?: string };
const TitleBox: FunctionComponent<TitleBoxProps> = function ({ title, subTitle, children, ...props }) {
  return (
    <S.TitleBoxLayout {...props}>
      {title && (
        <Paragraph variant="h2" isTitle>
          {title}
        </Paragraph>
      )}
      <S.SubTitleParagraph>{subTitle}</S.SubTitleParagraph>
    </S.TitleBoxLayout>
  );
};

export default TitleBox;
