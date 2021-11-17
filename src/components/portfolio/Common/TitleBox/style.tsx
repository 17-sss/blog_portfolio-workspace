import styled from '@emotion/styled';
import { Paragraph } from '..';

export const TitleBoxLayout = styled.div`
  *:last-child {
    margin-bottom: 20px;
  }
`;

export const SubTitleParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  font-size: ${({ theme }) => theme.fontSizes['16']};
`;
