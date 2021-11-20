import { FunctionComponent, MutableRefObject, useMemo, useRef } from 'react';
import { useScrollAnimations, ScrollAnimationsProps } from 'hooks';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import ProjectItem from '../ProjectItem';
import * as S from './style';
import {} from 'hooks/useScrollAnimations';

const ProjectSection: FunctionComponent = function ({ ...props }) {
  const { markdownData } = usePortfolioState();
  const { layoutId, subTitle } = PORTFOLIO_SECTION_INFO.projects;

  const eleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const animationsProps: ScrollAnimationsProps = {
    eleRef,
    options: { excludeSelectors: ['#image__carousel'] },
    deps: [markdownData],
  };
  useScrollAnimations(animationsProps);

  const projectItems = useMemo(
    () => markdownData.map(({ node }, i) => <ProjectItem idx={i} key={i} {...node} />),
    [markdownData],
  );

  return (
    <S.ProjectSectionLayout id={layoutId} {...props}>
      <S.ProjectSectionInnerBox ref={eleRef}>
        <S.ProjectTitleBox title={'Projects'} subTitle={subTitle} />
        <S.ProjectList>{projectItems}</S.ProjectList>
      </S.ProjectSectionInnerBox>
    </S.ProjectSectionLayout>
  );
};

export default ProjectSection;
