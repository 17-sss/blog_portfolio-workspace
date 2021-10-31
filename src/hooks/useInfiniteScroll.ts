import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { INFINITE_SCROLL_NUM_OF_ITEMS_PER_PAGE } from 'utils/constants';
import { PostListItemType } from 'utils/types';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
};

const useInfiniteScroll = function (selectedCategory: string, posts: PostListItemType[]) {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(1);

  // 현재 카테고리에 부합하는 데이터 반환
  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      selectedCategory !== 'All'
        ? posts.filter((postListItemData: PostListItemType) => {
            const { node } = postListItemData;
            const categories = node.frontmatter.categories;
            return categories.includes(selectedCategory);
          })
        : posts,
    [selectedCategory],
  );

  // IntersectionObserver 설정
  const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
    // 여기서 쓰이는 IntersectionObserverEntry는 단 하나뿐!
    // 새로운 아이템이 들어와야할 때, 여기서 그전 observe한거를 완전히 끊어내고
    // 아래 "마지막 요소 관찰"할 때, 하나만 observe하니까!
    if (!entries[0].isIntersecting) return; 
    setCount(state => state + 1);
    observer.disconnect();
  });

  // 카테고리가 변경될 때 count 초기화
  useEffect(() => setCount(1), [selectedCategory]);

  // 마지막 요소 관찰 (IntersectionObserver)
  useEffect(() => {
    const LAST_SIZE = INFINITE_SCROLL_NUM_OF_ITEMS_PER_PAGE * count;
    const isOverSize = LAST_SIZE >= postListByCategory.length;
    if (!containerRef.current || !containerRef.current.children.length || isOverSize) return;

    const children = containerRef.current.children;
    const lastChild = children[children.length - 1];
    observer.observe(lastChild);
  }, [count, selectedCategory]);

  const postList = postListByCategory.slice(0, count * INFINITE_SCROLL_NUM_OF_ITEMS_PER_PAGE);
  return { containerRef, postList };
};

export default useInfiniteScroll;