import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { setBlinkInlineStyle, setClearInlineStyle, setSlideInlineStyle } from './functions';
import './scrollAnimations.css';

type ScrollAnimationsTypes = 'left' | 'right' | 'blink' | 'zigzag';
type ScrollAnimationsOptionProps = {
  type: ScrollAnimationsTypes;
  duration?: number;
  isIdxDelay?: boolean;
};

type Props<T> = {
  eleRef: MutableRefObject<T | null>;
  options?: ScrollAnimationsOptionProps;
  observeOptions?: IntersectionObserverInit;
};
type ExecAnmationProps = ScrollAnimationsOptionProps & { idx: number; target: HTMLElement };

const useScrollAnimations = function <T extends Element>({
  eleRef,
  options: { type = "blink", duration = 1.5, isIdxDelay } = { duration: 2, type: 'blink' },
  observeOptions = { threshold: 0.2 },
}: Props<T>) {

  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);
  const childrenInfoRef: MutableRefObject<HTMLElement[] | null> = useRef(null);

  const execAnmations = useCallback(({ type, duration, ...props }: ExecAnmationProps) => {
    switch (type) {
      case 'left':
        return setSlideInlineStyle({ ...props, duration, direction: 'left' });
      case 'right':
        return setSlideInlineStyle({ ...props, duration, direction: 'right' });
      case 'blink':
        return setBlinkInlineStyle({ ...props, duration });
      case 'zigzag': {
        const isIdx = props.idx >= 0;
        if (!isIdx) return;
        const direction = (props.idx + 1) % 2 === 0 ? 'right' : 'left';
        return setSlideInlineStyle({ ...props, duration, direction });
      }
      default:
        return;
    }
  }, []);

  const handleScroll = useCallback<IntersectionObserverCallback>((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target as HTMLElement;
      const findIdx = childrenInfoRef.current?.findIndex(v => v === target) ?? -1;
      execAnmations({ target, duration, type, idx: findIdx, isIdxDelay });

      const MS = (isIdxDelay ? (findIdx + 1) * duration : duration) * 1000;
      window.setTimeout(() => setClearInlineStyle(target), MS);
      observer.unobserve(target);
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, observeOptions);
  }, [handleScroll]);

  useEffect(() => {
    if (!eleRef || !eleRef.current) return;
    const children = Array.from(eleRef.current.children) as HTMLElement[];
    if (!children || !children.length || !observer.current) return;

    childrenInfoRef.current = children;
    children.forEach(ele => {
      ele.style.visibility = 'hidden';
      observer.current?.observe(ele);
    });
  }, []);
};

export default useScrollAnimations;
