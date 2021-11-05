import { FunctionComponent, useMemo } from 'react';
import * as S from './style';

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

export type CategoryItemProps = {
  active: boolean;
  to: string;
  children: React.ReactNode;
  className?: string;
};


const CategoryItem: FunctionComponent<CategoryItemProps> = function ({ active, to, children, className }) {
  return (
    <S.CategoryItemLayout to={to} active={active} className={className}>
      {children}
    </S.CategoryItemLayout>
  );
};

const CategoryList: FunctionComponent<CategoryListProps> = function ({ selectedCategory, categoryList }) {
  const categoryItems = useMemo(
    () =>
      Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      )),
    [selectedCategory],
  );

  return <S.CategoryListLayout>{categoryItems}</S.CategoryListLayout>;
};

export default CategoryList;
