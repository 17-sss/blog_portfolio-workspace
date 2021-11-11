import { Fragment, FunctionComponent } from 'react';
import { HomeSection, IntroduceSection, SkillSection, ProjectSection } from 'components/portfolio/Main';

const PortfolioComposition: FunctionComponent = function () {
  return (
    <Fragment>
      <HomeSection />
      <IntroduceSection />
      <SkillSection />
      <ProjectSection />
    </Fragment>
  );
};

export default PortfolioComposition;
