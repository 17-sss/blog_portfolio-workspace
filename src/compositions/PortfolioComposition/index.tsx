import { Fragment, FunctionComponent } from 'react';
import { HomeSection, IntroduceSection, ProfileSection, ProjectSection } from 'components/portfolio/Main';

const PortfolioComposition: FunctionComponent = function () {
  return (
    <Fragment>
      <HomeSection />
      <IntroduceSection />
      <ProfileSection />
      <ProjectSection />
    </Fragment>
  );
};

export default PortfolioComposition;
