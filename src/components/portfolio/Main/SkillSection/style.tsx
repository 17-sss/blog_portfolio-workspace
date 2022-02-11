import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Button, Card, CardProps } from '@material-ui/core';
import { InnerContainer, NormalGridList, Paragraph, TitleBox } from 'src/components/portfolio/Common';
import { getMediaQueries, setFlex } from 'src/utils/style';
import { PORTFOLIO_HEADER_HEIGHT } from 'src/utils/constants';

export const SkillSectionLayout = styled.section`
  background-color: ${({ theme }) => theme.sectionColors.skills};

  padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 48px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  ${getMediaQueries({type: 'mobile'})} {
    padding: ${`${PORTFOLIO_HEADER_HEIGHT}px`} 12px ${`${Math.floor(PORTFOLIO_HEADER_HEIGHT / 2)}px`};
  }
`;

export const SkillSectionInnerBox = styled(InnerContainer)`
  min-height: ${`calc(100vh - ${PORTFOLIO_HEADER_HEIGHT}px)`};
  ${setFlex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })}
`;

export const SkillTitleBox = styled(TitleBox)``;
export const SubTitleParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
`;

export const TopSkillCard = styled(({ ...props }: CardProps) => <Card elevation={2} {...props} />)`
  position: relative;
  width: 100%;
  padding: 24px 0;

  ${getMediaQueries({ type: 'desktop' })} {
    padding: 32px 0;
    margin: 0 auto 16px;
  }
  ${getMediaQueries({ type: 'tablet' })} {
    margin: 0 auto 8px;
  }
  ${getMediaQueries({ type: 'mobile' })} {
    margin: 0 auto;
  }
`;
export const TopSkillList = styled(({ ...props }) => <NormalGridList isUseTabletSize {...props} />)`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
  flex-wrap: wrap;
  li {
    flex-basis: ${`calc(100% / 3)`};
  }

  ${getMediaQueries({ type: 'mobile' })} {
    ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
    flex-wrap: wrap;
    li {
      flex-basis: ${`calc(100% / 2)`};
    }
  }
`;

export const TopSkillImageItem = styled.li`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })};
  img {
    max-height: 200px;
    width: auto;
  }
`;

type TopSkillDetailBoxProps = HTMLAttributes<HTMLDivElement> & { isHover?: boolean };
export const TopSkillDetailBox = styled(({ isHover, ...props }: TopSkillDetailBoxProps) => <div {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${({ isHover }) => (isHover ? 10 : -1)};
  padding: 16px;

  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 0.5s;

  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  background-color: ${({ theme }) => theme.grayScaleColors.offWhite};
`;

export const TopSkillDetailCloseButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
  min-width: fit-content;
`;

export const SkillContainerBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));

  ${getMediaQueries({ type: 'mobile' })} {
    grid-template-columns: none;
  }
`;
