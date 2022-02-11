import { FunctionComponent } from 'react';
import * as S from './style';

interface DetailRendererProps {
  html: string;
}
const DetailRenderer: FunctionComponent<DetailRendererProps> = function ({ html, ...props }) {
  return <S.DetailRendererLayout html={html} {...props} />;
};

export default DetailRenderer;
