import { FunctionComponent, useMemo } from 'react';
import { AccordionDetailRenderer, Paragraph } from 'components/portfolio/Common';
import ImageCarousel from '../ImageCarousel';
import { PortfolioMarkdownNode } from 'utils/types';
import { changeFirstCharUpperCase } from 'utils/functions';
import * as S from './style';

export type ProjectItemProps = PortfolioMarkdownNode & {
  idx?: number;
};
const ProjectItem: FunctionComponent<ProjectItemProps> = function ({ idx, ...props }) {
  const { frontmatter: { portfolioInfo }, html } = props;
  const { title, subTitle, duration: { startDate, endDate }, memberInfo, skills, images, type, links } = portfolioInfo;

  const skillItems = useMemo(() => skills.map((v, i) => <S.Code key={i}>{v}</S.Code>), [skills]);
  const linkItems = useMemo(
    () =>
      links.map(({ name, href }, i) => (
        <S.ExternalLink key={i} href={href}>
          {name}
        </S.ExternalLink>
      )),
    [links],
  );

  return (
    <S.ProjectItemLayout idx={idx}>
      <Paragraph paragraph align="center" variant="h3" additionalFonts={['Do Hyeon']}>
        {title}
      </Paragraph>
      <S.ContentBox>
        {/* Images */}
        <S.ImageBox>
          <div className="inner">
            <ImageCarousel id="image__carousel" title={title} images={images} />
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
            <S.ValueText>{skillItems}</S.ValueText>
          </S.TextBox>
          <S.TextBox>
            <S.NameText>분류</S.NameText>
            <S.TypeText isLibrary={type === 'library'}>{changeFirstCharUpperCase(type)}</S.TypeText>
          </S.TextBox>
          <S.TextBox>
            <S.NameText>링크</S.NameText>
            <S.ValueText>{linkItems}</S.ValueText>
          </S.TextBox>
        </S.InfoBox>
        {/* Detail */}
        {/* 마크다운의 상세 설명이 들어감. (Accordion, MarkdownRenderer 활용) */}
        {html && <AccordionDetailRenderer ariaLabelText={`ProjectItem - ${title}`} html={html} />}
      </S.ContentBox>
    </S.ProjectItemLayout>
  );
};

export default ProjectItem;
