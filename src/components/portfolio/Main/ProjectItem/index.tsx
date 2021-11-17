import { FunctionComponent } from 'react';
import { AccordionDetails } from '@material-ui/core';
import { Paragraph } from 'components/portfolio/Common';
import ImageCarousel from '../ImageCarousel';
import { PortfolioMarkdownNode } from 'utils/types';
import * as S from './style';
import { changeFirstCharUpperCase } from 'utils/functions';

const ProjectItem: FunctionComponent<PortfolioMarkdownNode> = function (props) {
  const { frontmatter: { portfolioInfo }, html } = props;
  const { title, subTitle, duration: { startDate, endDate }, memberInfo, skills, images, type } = portfolioInfo;

  return (
    <S.ProjectItemLayout>
      <Paragraph paragraph align="center" variant="h3" additionalFonts={['Do Hyeon']}>
        {title}
      </Paragraph>
      <S.ContentBox>
        {/* Images */}
        <S.ImageBox>
          <div className="inner">
            <ImageCarousel title={title} images={images} />{' '}
          </div>
        </S.ImageBox>
        {/* Info */}
        <S.InfoBox>
          <S.SubTitleText>{subTitle}</S.SubTitleText>
          <S.MemberInfoText>{`(${memberInfo})`}</S.MemberInfoText>
          <S.TextBox>
            <S.NameText>기간</S.NameText>
            <S.ValueText>{`${startDate} ~ ${endDate || 'ing'}`}</S.ValueText>
          </S.TextBox>
          <S.TextBox>
            <S.NameText>사용 기술</S.NameText>
            <S.ValueText>{skills.map((v, i) => <S.Code key={i}>{v}</S.Code>)}</S.ValueText>
          </S.TextBox>
          <S.TextBox>
            <S.NameText>분류</S.NameText>
            <S.TypeText isLibrary={type === 'library'}>{changeFirstCharUpperCase(type)}</S.TypeText>
          </S.TextBox>
        </S.InfoBox>
        {/* Detail */}
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
