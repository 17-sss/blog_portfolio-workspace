import { Fragment, FunctionComponent } from 'react';
import { HomeSection, AboutSection, SkillSection, ProjectSection } from 'components/portfolio/Main';

const PortfolioComposition: FunctionComponent = function () {
  return (
    <Fragment>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </Fragment>
  );
};

export default PortfolioComposition;
