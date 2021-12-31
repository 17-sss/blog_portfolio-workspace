import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { Paragraph } from 'components/portfolio/Common';
import { getMediaQueries } from 'utils/style';
import { SkillContainerProps } from '.';

export const SkillContainerLayout = styled(({ ...props }: SkillContainerProps) => <Card elevation={2} {...props} />)`
  padding: 16px 4px;
  margin: 12px 4px;

  ${getMediaQueries({ type: 'desktop' })} {
    &:first-of-type {
      margin-left: 0px;
    }
    &:last-of-type {
      margin-right: 0px;
    }
  }

  ${getMediaQueries({ type: 'tablet' })} {
    margin: 12px 0;
    &:nth-of-type(2n - 1) {
      margin-right: 6px;
    }
    &:nth-of-type(2n) {
      margin-left: 6px;
    }
  }

  ${getMediaQueries({ type: 'mobile' })} {
    margin: 12px 0;
    padding: 0 0 12px;
    position: relative;
    width: 100%;
  }
`;

export const SubjectParagraph = styled(({ ...props }) => <Paragraph paragraph align="center" isTitle {...props} />)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
`;
