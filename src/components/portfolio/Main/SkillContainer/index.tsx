import { FunctionComponent, HTMLAttributes } from 'react';
import * as S from './style';

export type SkillContainerProps = HTMLAttributes<HTMLDivElement> & { idx?: number; subject?: string };

const SkillContainer: FunctionComponent<SkillContainerProps> = function ({ subject, children, ...props }) {
  return (
    <S.SkillContainerLayout {...props}>
      {subject && <S.SubjectParagraph>{subject}</S.SubjectParagraph>}
      <S.SkillList>{children}</S.SkillList>
    </S.SkillContainerLayout>
  );
};
export default SkillContainer;
