import { Fragment, FunctionComponent, useMemo } from 'react';
import useObserveItems from 'hooks/useObserveItems';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import ProjectItem from '../ProjectItem';
import * as S from './style';

const ProjectSection: FunctionComponent = function ({ ...props }) {
  const { markdownData } = usePortfolioState();
  const { layoutId, subTitle } = PORTFOLIO_SECTION_INFO.projects;

  const projectItems = useMemo(
    () => markdownData.map(({ node }, i) => <ProjectItem idx={i} key={i} {...node} />),
    [markdownData],
  );

  // 최종적으로 렌더링 할 JSX.Elements
  const resultElements = useMemo(() => {
    if (!projectItems) return;
    return [
      <S.ProjectTitleBox title={'Projects'} subTitle={subTitle} />,
      <S.ProjectList>{projectItems}</S.ProjectList>,
    ];
  }, [projectItems]);

  const { ref, sliceData } = useObserveItems<HTMLDivElement, JSX.Element>({
    data: resultElements ?? [],
  });
  // --

  return (
    <S.ProjectSectionLayout id={layoutId} {...props}>
      <S.ProjectSectionInnerBox
        ref={ref}
        children={sliceData?.map((ele, i) => (
          <Fragment key={i} children={ele} />
        ))}
      />
    </S.ProjectSectionLayout>
  );
};

export default ProjectSection;
