import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { CategoryItemProps } from './props';

const CategoryListLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItemLayout = styled(({ active, to, ...props }: CategoryItemProps) => <Link to={to} {...props} />)<Pick<CategoryItemProps, 'active'>>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export { CategoryListLayout, CategoryItemLayout };
