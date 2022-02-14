import { Fragment, FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { AdditionalLinkInfo } from '@hooks/queries';
import LinkItem from '../LinkItem';
import * as S from './style';

export interface LinkProps extends HTMLAttributes<HTMLUListElement> {
  links: AdditionalLinkInfo[];
}

const LinkList: FunctionComponent<LinkProps> = function ({ links, ...props }) {
  const linkItems = useMemo(() => {
    if (!links.length) return null;
    const result = links.map((props, i) => <LinkItem key={i} {...props} />);
    return result;
  }, [links]);

  return linkItems ? <S.LinkListLayout {...props}>{linkItems}</S.LinkListLayout> : <Fragment />;
};

export default LinkList;
