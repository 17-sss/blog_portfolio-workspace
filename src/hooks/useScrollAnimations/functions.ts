type SetInlineStyleProps = {
  target: HTMLElement;
  duration?: number;
  idx?: number;
  isIdxDelay?: boolean;
};

export const setBlinkInlineStyle = ({ target, isIdxDelay, duration = 1.2, idx }: SetInlineStyleProps) => {
  const isIdx = typeof idx !== 'undefined' && idx >= 0;
  const strDuration = `${isIdxDelay && isIdx ? (idx + 1) * duration : duration}s`;
  target.style.animation = `${strDuration} animations__blink`;
};

type SetSlideInlineStyleProps = SetInlineStyleProps & {
  direction: 'left' | 'right';
  isMarginAuto?: boolean;
};
export const setSlideInlineStyle = ({ target, duration = 1, idx, direction, isMarginAuto, isIdxDelay }: SetSlideInlineStyleProps) => {
  const isIdx = typeof idx !== 'undefined' && idx >= 0;
  const strDuration = `${isIdxDelay && isIdx ? (idx + 1) * duration : duration}s`;
  const isLeft = direction === 'left';
  if (isMarginAuto) {
    if (isLeft) target.style.marginLeft = 'auto';
    else target.style.marginRight = 'auto';
  }

  target.style.position = 'relative';
  target.style.animation = `${strDuration} animations__slide--${isLeft ? 'left' : 'right'}`;
};

export const setClearInlineStyle = (target: HTMLElement) => {
  const { position, animation, visibility, marginLeft, marginRight } = target.style;
  position && (target.style.position = '');
  animation && (target.style.animation = '');
  visibility && (target.style.visibility = '');
  marginLeft && (target.style.marginLeft = '');
  marginRight && (target.style.marginRight = '');
};

// ---

// dfs를 활용하여 받아온 최상위 요소 (eleRef.current)의 모든 자식들을 탐색하여 허용된 노드만 감시하거나 전부 감시
type DFSforObserveProps = {
  root: Element;
  observer?: IntersectionObserver | null;
  allowList?: string[];
  checkAlreadyObserve?: boolean;
};
export const DFSforObserve = ({ root, observer, allowList, checkAlreadyObserve }: DFSforObserveProps) => {
  const setObserve = (ele: Element, observer: IntersectionObserver) => {
    (ele as HTMLElement).style.visibility = 'hidden';
    const isExists = checkAlreadyObserve && observer.takeRecords().find(entry => entry.target === ele);
    isExists || observer.observe(ele);
  };
  const allowListTmp = allowList?.map(v => v.toUpperCase());
  const DFS = (element: Element) => {
    if (!element) return;
    const children = Array.from(element.children) as HTMLElement[];
    if (!children || !children.length) return;

    children.forEach(ele => {
      DFS(ele);
      if (!observer) return;
      const { tagName } = ele;
      if (allowListTmp) allowListTmp.includes(tagName) && setObserve(ele, observer);
      else setObserve(ele, observer);
    });
  };

  if (!observer) return;
  DFS(root);
};

// 각 children내에서의 index 찾아 반환
type DFSforFindElementIndexProps = {
  root: Element;
  target: Element;
};

export const DFSforFindElementIndex = ({ root, target }: DFSforFindElementIndexProps) => {
  let result: number | undefined;
  const DFS = (element: Element | HTMLElement) => {
    if (!element || typeof result !== 'undefined') return;
    const children = Array.from(element.children) as HTMLElement[];
    if (!children || !children.length) return;
    for (let i = 0; i < children.length; i++) {
      const curr = children[i];
      if (curr === target) result = i;
      else DFS(curr);
    }
  };

  DFS(root);
  return result;
};
