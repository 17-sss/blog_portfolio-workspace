import { FunctionComponent } from 'react';
import * as S from './style';

const AboutSection: FunctionComponent = function ({ ...props }) {
  return <S.AboutSectionLayout {...props}></S.AboutSectionLayout>;
};

export default AboutSection;
