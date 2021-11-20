import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { getMediaQueries, setFlex } from 'utils/style';
import { Paragraph } from '..';

export const FooterLayout = styled(({ ...props }) => <Card elevation={2} component="footer" {...props} />)`
  ${setFlex({ justifyContent: 'center', alignItems: 'center' })};
  margin-top: 36px;
  padding: 36px 0;
`;

export const FooterParagraph = styled(({ ...props }) => <Paragraph paragraph {...props} />)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes['14']};
  font-family: 'Comfortaa', 'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;

  ${getMediaQueries({ type: 'mobile' })} {
    font-size: ${({ theme }) => theme.fontSizes['12']};
  }
`;
