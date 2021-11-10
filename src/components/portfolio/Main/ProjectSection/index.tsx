import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const ProjectSection: FunctionComponent = function ({ ...props }) {
  const { layoutId } = PORTFOLIO_SECTION_INFO.project;

  return (
    <S.ProjectSectionLayout id={layoutId} {...props}>
      <S.ProjectSectionInnerBox>프로젝트</S.ProjectSectionInnerBox>
    </S.ProjectSectionLayout>
  );
};

export default ProjectSection;
