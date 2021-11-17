import { FunctionComponent } from 'react';
import { PORTFOLIO_FOOTER } from 'utils/constants';
import * as S from './style';

const Footer: FunctionComponent = function () {
  const text = PORTFOLIO_FOOTER.text;
  return (
    <S.FooterLayout>
      <S.FooterParagraph>{text}</S.FooterParagraph>
    </S.FooterLayout>
  );
};

export default Footer;
