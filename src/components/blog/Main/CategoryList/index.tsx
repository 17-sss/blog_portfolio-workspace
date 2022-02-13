import { FunctionComponent, useMemo } from 'react';
import { PostNodeType } from '@hooks/queries';
import * as S from './style';

export interface CategoryListProps {
  selectedCategory: string;
  postData: PostNodeType[];
  excludeCategories: string[];
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  postData,
  excludeCategories,
}) {
  // 카테고리를 기준으로 게시물들 카운팅
  const categoryInfoMap = useMemo(
    () =>
      postData.reduce((resultMap, { node: { frontmatter } }) => {
        const { categories, options } = frontmatter;
        const isHide = options?.hide;
        const isExcludedCategory =
          categories && categories.some(category => category && excludeCategories.includes(category));
        if (isHide || isExcludedCategory) return resultMap;

        let categoryName = '';
        categories.forEach(category => {
          if (categoryName) categoryName += `/${category}`;
          if (!categoryName) categoryName = `${category}`;

          if (resultMap.has(categoryName)) {
            const value = resultMap.get(categoryName) ?? 0;
            resultMap.set(categoryName, value + 1);
          } else resultMap.set(categoryName, 1);

          resultMap.set('All', (resultMap.get('All') ?? 0) + 1);
        });
        return resultMap;
      }, new Map<string, number>([['All', 0]])),
    [postData],
  );

  // 카테고리 아이템들 생성
  const categoryItems = useMemo(() => {
    const arrMapEntries = [...categoryInfoMap.entries()];
    return arrMapEntries.map(([name, count]) => {
      if (excludeCategories.includes(name)) return;
      const isActive = name === selectedCategory;
      return (
        <S.CategoryItem to={`/?category=${name}`} active={isActive} key={name}>
          #{name}({count})
        </S.CategoryItem>
      );
    });
  }, [selectedCategory, categoryInfoMap]);

  return <S.CategoryListLayout>{categoryItems}</S.CategoryListLayout>;
};

export default CategoryList;
