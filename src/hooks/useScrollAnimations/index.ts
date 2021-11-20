import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { DFSforFindElementIndex, DFSforObserve, setBlinkInlineStyle, setClearInlineStyle, setSlideInlineStyle } from './functions';
import './scrollAnimations.css';

type ScrollAnimationsTypes = 'left' | 'right' | 'blink' | 'zigzag';
type ScrollAnimationsOptionProps = {
  type: ScrollAnimationsTypes;
  duration?: number;
  isIdxDelay?: boolean;
  allowSelectors?: string[];
};

export type ScrollAnimationsProps = {
  eleRef: MutableRefObject<Element | HTMLElement | null>;
  options?: ScrollAnimationsOptionProps;
  observeOptions?: IntersectionObserverInit;
  deps?: React.DependencyList;
};
type ExecAnmationProps = ScrollAnimationsOptionProps & { idx: number; target: HTMLElement };

const useScrollAnimations = function ({
  eleRef,
  options: { type = 'blink', duration = 1.2, isIdxDelay, allowSelectors = ['div', 'ul', 'li'] } = {
    duration: 1.2,
    type: 'blink',
    allowSelectors: ['div', 'ul', 'li'],
  },
  observeOptions = { threshold: 0.2 },
  deps = [],
}: ScrollAnimationsProps) {
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

  const execAnmations = useCallback(({ target, type, duration, ...props }: ExecAnmationProps) => {
    switch (type) {
      case 'left': setSlideInlineStyle({ ...props, target, duration, direction: 'left' }); break;
      case 'right': setSlideInlineStyle({ ...props, target, duration, direction: 'right' }); break;
      case 'blink': setBlinkInlineStyle({ ...props, target, duration }); break;
      case 'zigzag': {
        const isIdx = props.idx >= 0;
        if (!isIdx) break;
        const direction = (props.idx + 1) % 2 === 0 ? 'right' : 'left';
        setSlideInlineStyle({ ...props, target, duration, direction });
        break;
      }
      default: break;
    }
    target.style.visibility = 'visible';
  }, []);

  const handleScroll = useCallback<IntersectionObserverCallback>((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target as HTMLElement;
      const findIdx = (eleRef.current && DFSforFindElementIndex({ root: eleRef.current, target })) || 0;
      execAnmations({ target, duration, type, idx: findIdx, isIdxDelay });

      const MS = (isIdxDelay ? (findIdx + 1) * duration : duration) * 1000;
      window.setTimeout(() => setClearInlineStyle(target), MS);
      observer.unobserve(target);
    });
  }, [type, duration, isIdxDelay]);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, observeOptions);
  }, [handleScroll]);

  useEffect(() => {
    if (!eleRef || !eleRef.current) return;
    const checkAlreadyObserve = deps && deps.length > 0;
    DFSforObserve({ root: eleRef.current, observer: observer.current, allowSelectors, checkAlreadyObserve });
  }, [...deps, handleScroll]);
};

export default useScrollAnimations;
