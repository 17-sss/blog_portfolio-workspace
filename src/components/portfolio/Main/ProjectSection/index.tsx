import { InnerContainer } from 'components/portfolio/Common';
import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const ProjectSection: FunctionComponent = function ({ ...props }) {
  const { layoutId } = PORTFOLIO_SECTION_INFO.project;

  return (
    <S.ProjectSectionLayout id={layoutId} {...props}>
      <InnerContainer>프로젝트</InnerContainer>
    </S.ProjectSectionLayout>
  );
};

export default ProjectSection;
