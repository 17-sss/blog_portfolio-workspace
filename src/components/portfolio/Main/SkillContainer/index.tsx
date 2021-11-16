import { FunctionComponent, HTMLAttributes } from 'react';
import * as S from './style';

type SkillContainerProps = HTMLAttributes<HTMLDivElement> & { subject?: string };

const SkillContainer: FunctionComponent<SkillContainerProps> = function ({ subject, children, ...props }) {
  return (
    <S.SkillContainerLayout {...props}>
      {subject && <S.SubjectParagraph>{subject}</S.SubjectParagraph>}
      <S.SkillList>{children}</S.SkillList>
    </S.SkillContainerLayout>
  );
};
export default SkillContainer;
