import { FunctionComponent } from 'react';
import { PortfolioMarkdownNode } from 'utils/types';
import * as S from './style';

export type DetailRendererProps = Pick<PortfolioMarkdownNode, 'html'>;
const DetailRenderer: FunctionComponent<DetailRendererProps> = function ({ html, ...props }) {
  return <S.DetailRendererLayout html={html} {...props} />;
};

export default DetailRenderer;
