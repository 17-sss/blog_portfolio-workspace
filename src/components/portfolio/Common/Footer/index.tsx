import { FunctionComponent } from 'react';
import * as S from './style';

interface FooterProps {
  text: string;
}
const Footer: FunctionComponent<FooterProps> = function ({ text }) {
  return (
    <S.FooterLayout>
      <S.FooterParagraph>{text}</S.FooterParagraph>
    </S.FooterLayout>
  );
};

export default Footer;
