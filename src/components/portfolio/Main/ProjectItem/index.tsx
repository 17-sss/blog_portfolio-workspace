import { FunctionComponent } from 'react';
import { Paragraph } from 'components/portfolio/Common';
import * as S from './style';
import { PortfolioMarkdownNode } from 'utils/types';

import { Accordion, AccordionDetails } from '@material-ui/core';

const ProjectItem: FunctionComponent<PortfolioMarkdownNode> = function (props) {
  const {
    frontmatter: { portfolioInfo },
    html,
  } = props;
  const { title, duration, memberInfo, skills, images } = portfolioInfo;

  return (
    <S.ProjectItemLayout>
      <Paragraph paragraph align="center" variant="h3" additionalFonts={['Do Hyeon']}>
        {title}
      </Paragraph>
      <S.ContentBox>
        {/* title, m이외 */}
        <div>이미지</div>
        <div>내용</div>

        {/* Content */}
        {html && (
          <S.AccordionBox elevation={0}>
            <S.AccordionOpenSummary />
            <AccordionDetails children={<S.DetailRenderer html={html} />} />
          </S.AccordionBox>
        )}
      </S.ContentBox>
    </S.ProjectItemLayout>
  );
};

export default ProjectItem;
