import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { BLOG_NUM_ITEMS_PER_PAGE } from 'utils/constants';
import { PostListItemType } from 'utils/types';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
};

const useInfiniteScroll = function (selectedCategory: string, posts: PostListItemType[]) {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> = useRef<IntersectionObserver>(null);
  const [count, setCount] = useState<number>(1);

  // 현재 카테고리에 부합하는 데이터 반환
  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      selectedCategory !== 'All'
        ? posts.filter((postListItemData: PostListItemType) => {
            const { node } = postListItemData;
            const categories = node.frontmatter.categories;

            const isHide = node.frontmatter.hide;
            if (isHide) return false;

            const categoryTmp = categories.reduce((result, category) => {
              if (result) result += `/${category}`;
              else result = `${category}`;
              return result;
            }, '');

            const isSameCategory = categoryTmp === selectedCategory;
            return isSameCategory || categories.includes(selectedCategory);
          })
        : posts,
    [selectedCategory],
  );

  // IntersectionObserver 설정
  // (gatsby는 기본적으로 빌드 시 node.js 환경애서 진행됨, 브라우저 API들을 사용할 수 없으니 useEffect를 통해 Ref에 생성해주고 지정 )
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      // 여기서 쓰이는 IntersectionObserverEntry는 단 하나뿐!
      // 새로운 아이템이 들어와야할 때, 여기서 그전 observe한거를 완전히 끊어내고
      // 아래 "마지막 요소 관찰"할 때, 하나만 observe하니까!
      if (!entries[0].isIntersecting) return;
      setCount(state => state + 1);
      observer.unobserve(entries[0].target);
    });
  }, []);

  // 카테고리가 변경될 때 count 초기화
  useEffect(() => setCount(1), [selectedCategory]);

  // 마지막 요소 관찰 (IntersectionObserver)
  useEffect(() => {
    const LAST_SIZE = BLOG_NUM_ITEMS_PER_PAGE * count;
    const isOverSize = LAST_SIZE >= postListByCategory.length;
    if (!containerRef.current || !containerRef.current.children.length || !observer.current || isOverSize) return;

    const children = containerRef.current.children;
    const lastChild = children[children.length - 1];
    observer.current.observe(lastChild);
  }, [count, selectedCategory]);

  const postList = postListByCategory.slice(0, count * BLOG_NUM_ITEMS_PER_PAGE);
  return { containerRef, postList };
};

export default useInfiniteScroll;
