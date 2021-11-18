import { MutableRefObject, useEffect, useRef, useState } from 'react';

type Props = {
  data: any[];
  unit?: number;
  observeOptions?: IntersectionObserverInit;
};

type ReturnDataType<T, ReturnType> = {
  ref: MutableRefObject<T | null>;
  sliceData: ReturnType[];
};

const useObserveItems = function <T extends Element, ReturnType>({
  data,
  unit = 1,
  observeOptions = { threshold: 0.8 },
}: Props) : ReturnDataType<T, ReturnType> {

  const [viewCount, setViewCount] = useState<number>(0);
  const ref: MutableRefObject<T | null> = useRef<T>(null);
  const observer: MutableRefObject<IntersectionObserver | null> = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      // observer.current.observe(element) 호출 시, 이 callback 함수 실행
      if (!entries[0].isIntersecting) return;
      setViewCount(state => state + 1);
      observer.unobserve(entries[0].target);
    }, observeOptions);
  }, []);

  useEffect(() => {
    data.length > 0 && setViewCount(() => 1);
  }, [data]);

  useEffect(() => {
    if (viewCount <= 0 || !ref.current || !observer.current) return;
    const children = Array.from(ref.current.children);
    observer.current.observe(children[children.length - 1]);

    if (data.length === children.length) observer.current.disconnect();
  }, [viewCount]);

  return { ref, sliceData: data?.slice(0, unit * viewCount) };
};

export default useObserveItems;
