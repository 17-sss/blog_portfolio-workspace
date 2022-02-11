import { Fragment, FunctionComponent } from 'react';
import { HomeSection, IntroduceSection, SkillSection, ProjectSection } from 'src/components/portfolio/Main';
import { Header, MainContainer, Footer } from 'src/components/portfolio/Common';
import { getPortfolioConfig } from 'src/queries';
import { portfolioSectionIdInfo as IdInfo } from 'src/utils/constants';

const PortfolioComposition: FunctionComponent = function () {
  const { footer, header, sections } = getPortfolioConfig();
  const { home, introduce, projects, skills } = sections;

  return (
    <Fragment>
      <Header {...header} />
      <MainContainer>
        <HomeSection layoutId={IdInfo.home} {...home} />
        <IntroduceSection layoutId={IdInfo.introduce} {...introduce} />
        <SkillSection layoutId={IdInfo.skills} {...skills} />
        <ProjectSection layoutId={IdInfo.projects} {...projects} />
      </MainContainer>
      <Footer {...footer} />
    </Fragment>
  );
};

export default PortfolioComposition;
