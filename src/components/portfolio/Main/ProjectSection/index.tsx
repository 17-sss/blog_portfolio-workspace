import { FunctionComponent, MutableRefObject, useMemo, useRef } from 'react';
import { TitleBox } from '@components/portfolio/Common';
import { usePortfolioState } from '@utils/contexts/PortfolioContext';
import { useScrollAnimations, ScrollAnimationsProps } from '@hooks/common';
import ProjectItem from '../ProjectItem';
import * as S from './style';

interface ProjectSectionProps {
  layoutId: string;
  text: string;
}

const ProjectSection: FunctionComponent<ProjectSectionProps> = function ({ ...props }) {
  const { layoutId, text: subTitle } = props;
  const { markdownData } = usePortfolioState();

  const eleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const animationsProps: ScrollAnimationsProps = {
    eleRef,
    options: { excludeOptions: { excludeSelectors: ['#project__list'], isExceptTarget: true } },
    deps: [markdownData],
  };
  useScrollAnimations(animationsProps);

  const projectItems = useMemo(
    () =>
      markdownData.reduce((result, { node }, i) => {
        const {
          frontmatter: { portfolioInfo },
        } = node;
        const sectionType = portfolioInfo.sectionType;
        if (sectionType !== 'projects') return result;
        result.push(<ProjectItem idx={i} key={i} {...node} />);
        return result;
      }, [] as JSX.Element[]),
    [markdownData],
  );

  return (
    <S.ProjectSectionLayout id={layoutId} {...props}>
      <S.ProjectSectionInnerBox ref={eleRef}>
        <TitleBox title={'Projects'} subTitle={subTitle} />
        <S.ProjectList id="project__list">{projectItems}</S.ProjectList>
      </S.ProjectSectionInnerBox>
    </S.ProjectSectionLayout>
  );
};

export default ProjectSection;
