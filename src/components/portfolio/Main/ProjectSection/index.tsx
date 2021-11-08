import { FunctionComponent } from 'react';
import * as S from './style';

const ProjectSection: FunctionComponent = function ({ ...props }) {
  return <S.ProjectSectionLayout {...props}></S.ProjectSectionLayout>;
};

export default ProjectSection;
