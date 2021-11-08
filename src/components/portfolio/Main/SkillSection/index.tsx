import { FunctionComponent } from 'react';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  return <S.SkillSectionLayout {...props}></S.SkillSectionLayout>;
};

export default SkillSection;
