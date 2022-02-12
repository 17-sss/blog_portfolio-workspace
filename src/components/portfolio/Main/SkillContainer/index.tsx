import { FunctionComponent, HTMLAttributes } from 'react';
import { changeFirstCharUpperCase } from '@utils/functions';
import * as S from './style';

export type SkillContainerProps = HTMLAttributes<HTMLDivElement> & { idx?: number; subject?: string };

const SkillContainer: FunctionComponent<SkillContainerProps> = function ({ subject, children, ...props }) {
  return (
    <S.SkillContainerLayout {...props}>
      {subject && <S.SubjectParagraph>{changeFirstCharUpperCase(subject)}</S.SubjectParagraph>}
      <S.SkillList>{children}</S.SkillList>
    </S.SkillContainerLayout>
  );
};
export default SkillContainer;
