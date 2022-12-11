import { FunctionComponent, useEffect } from 'react';

import Template, { TemplateProps } from './Template';
import { GlobalStyle, Header, Footer, MainContainer } from '@components/portfolio/Common';
import { HomeSection, IntroduceSection, ProjectSection, /* SkillSection */ } from '@components/portfolio/Main';

import { PortfolioMarkdownNodeEdges, PortfolioMetaDataQuery, PortfolioConfigType } from '@hooks/queries';
import { portfolioSectionIdInfo as IdInfo } from '@utils/constants';
import { usePortfolioDispatch } from '@utils/contexts/PortfolioContext';

type PortfolioImageTypes = Omit<Omit<PortfolioMetaDataQuery, 'site'>, 'profileImg'>;

interface PortfolioTemplateProps extends TemplateProps, PortfolioImageTypes {
  configData: PortfolioConfigType;
  markdownData: PortfolioMarkdownNodeEdges[]; // Section - Projects (Markdown Data)
}

const PortfolioTemplate: FunctionComponent<PortfolioTemplateProps> = ({
  configData,
  waveBackImg,
  waveImg,
  markdownData,
  ...props
}) => {
  const { sections, footer, header } = configData;

  const portfolioDispatch = usePortfolioDispatch();

  useEffect(() => portfolioDispatch({ type: 'SET_MARKDOWN_DATA', payload: markdownData }), [markdownData]);
  useEffect(
    () =>
      portfolioDispatch({
        type: 'SET_WAVE_IMG_URL',
        payload: { waveImg, waveBackImg },
      }),
    [waveImg, waveBackImg],
  );

  return (
    <Template {...{ ...props }}>
      <GlobalStyle />
      <Header {...header} />
      <MainContainer>
        <HomeSection layoutId={IdInfo.home} {...sections.home} />
        <IntroduceSection layoutId={IdInfo.introduce} {...sections.introduce} />
        {/* <SkillSection layoutId={IdInfo.skills} {...sections.skills} /> */}
        <ProjectSection layoutId={IdInfo.projects} {...sections.projects} />
      </MainContainer>
      <Footer {...footer} />
    </Template>
  );
};

export default PortfolioTemplate;
