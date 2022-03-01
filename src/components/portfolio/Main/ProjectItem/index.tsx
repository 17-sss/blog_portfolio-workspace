import { Fragment, FunctionComponent, useMemo } from 'react';
import ImageCarousel from '../ImageCarousel';
import { AccordionDetailRenderer, Paragraph } from '@components/portfolio/Common';
import { changeFirstCharUpperCase } from '@utils/functions';
import { PortfolioMarkdownNode } from '@hooks/queries';
import * as S from './style';

export interface ProjectItemProps extends PortfolioMarkdownNode {
  idx?: number;
}
const ProjectItem: FunctionComponent<ProjectItemProps> = function ({ idx, ...props }) {
  const {
    frontmatter: { portfolioInfo },
    html,
  } = props;
  const { title, subTitle, duration, memberInfo, skills, images, type, links } = portfolioInfo;

  // 스킬
  const skillItems = useMemo(() => skills.map((v, i) => <S.CodeItem key={i}>{v}</S.CodeItem>), [skills]);

  // 링크
  const linkItems = useMemo(
    () =>
      links.map(({ name, href }, i) => (
        <S.ExternalLink key={i} href={href}>
          {name}
        </S.ExternalLink>
      )),
    [links],
  );

  // 기간
  const durationItems = useMemo(() => {
    if (!duration) return;
    const { startDate, endDate, isIng } = duration;
    return (
      <Fragment>
        <S.CodeItem color="orange">{startDate}</S.CodeItem>
        <span>&nbsp;{'~'}&nbsp;</span>
        {endDate && <S.CodeItem color="orange">{endDate}</S.CodeItem>}
        {isIng && (
          <Fragment>
            <span>&nbsp;{'/'}&nbsp;</span>
            <S.CodeItem color="orange" isBold>{`~ing`}</S.CodeItem>
          </Fragment>
        )}
      </Fragment>
    );
  }, [duration]);

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
            <S.ValueText>{durationItems}</S.ValueText>
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
