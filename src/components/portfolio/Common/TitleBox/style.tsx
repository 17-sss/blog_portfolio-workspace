import styled from '@emotion/styled';
import { Paragraph } from '..';

export const TitleBoxLayout = styled.div`
  *:last-child {
    margin-bottom: 2vh;
  }
`;

export const SubTitleParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
`;
