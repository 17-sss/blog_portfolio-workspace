import { FunctionComponent, HTMLAttributes } from 'react';
import { AdditionalLinkInfo } from '@hooks/queries';
import * as S from './style';

export interface LinkItemProps extends HTMLAttributes<HTMLLIElement>, AdditionalLinkInfo {}

const LinkItem: FunctionComponent<LinkItemProps> = function ({ href, text, isGatsbyLink, ...props }) {
  return (
    <S.LinkItemLayout {...props}>
      <S.AnchorItem {...{ href, isGatsbyLink }}>
        <span>{text}</span>
      </S.AnchorItem>
    </S.LinkItemLayout>
  );
};

export default LinkItem;
