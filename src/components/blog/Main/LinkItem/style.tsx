import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const LinkItemLayout = styled.li`
  list-style: none;
  & + & {
    margin-top: 4px;
  }
`;

interface AnchorItemProps {
  isGatsbyLink?: boolean;
  href: string;
}
export const AnchorItem = styled(({ isGatsbyLink, href, ...props }: AnchorItemProps) =>
  isGatsbyLink ? <Link to={href} {...props} /> : <a href={href} {...props} />,
)`
  cursor: pointer;
  color: inherit;
  word-wrap: break-word;
  text-decoration: inherit;

  span {
    border-bottom: 0.05em solid #8ba3b85e;
    opacity: 0.7;
  }
`;
