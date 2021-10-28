import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type CategoryItemProps = {
  active: boolean;
  to: string;
  children: React.ReactNode;
  className?: string;
};

const CategoryItem: FunctionComponent<CategoryItemProps> = function ({ active, to, children, className }) {
  return (
    <CategoryItemLayout to={to} active={active} className={className}>
      {children}
    </CategoryItemLayout>
  );
};

export default CategoryItem;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItemLayout = styled(({ active, to, ...props }: CategoryItemProps) => <Link to={to} {...props} />)<
  Pick<CategoryItemProps, 'active'>
>`
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
