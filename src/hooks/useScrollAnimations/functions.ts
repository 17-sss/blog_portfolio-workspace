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
export const setSlideInlineStyle = ({
  target,
  duration = 1,
  idx,
  direction,
  isMarginAuto,
  isIdxDelay,
}: SetSlideInlineStyleProps) => {
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

// 받아온 선택자들 분석 (DFSforObserve 함수에서 사용)
type AnalyzeSelectorType = { [key in 'TAG' | 'TYPE' | 'NAME']?: string };
const execAnalyzeSelector = (selector: string) => {
  const REG_EX = /(?<TAG>\w+)?((?<TYPE>\.|\#)(?<NAME>\w+))?/gi;
  const matchs = [...selector.matchAll(REG_EX)];
  if (!matchs || !matchs.length) return null;

  const filterMatchs = matchs.filter(match => {
    if (!match.groups) return;
    const groupValues = Object.values(match.groups);
    return !groupValues.every(v => !v);
  });

  const groups = (filterMatchs[0].groups as AnalyzeSelectorType) ?? null;
  return groups;
};

// 분석된 선택자들과 현재 탐색하고 있는 target의 조건과 부합하다면 true (DFSforObserve 함수에서 사용)
const getSelectorMatchTarget = (target: HTMLElement, analyzedSelectors: (AnalyzeSelectorType | null)[]) => {
  const { tagName, classList, id } = target;
  const result = analyzedSelectors.find(analyzedSelector => {
    if (!analyzedSelector) return;
    const { TYPE, NAME } = analyzedSelector;
    const TAG = analyzedSelector.TAG?.toUpperCase();

    const isIdOK = TYPE && TYPE === '#' && id === NAME;
    const isClassName = TYPE && TYPE === '.' && NAME && classList.contains(NAME);
    if (!TAG) return isIdOK || isClassName;
    if (isIdOK || isClassName) return TAG === tagName && (isIdOK || isClassName);
    return TAG === tagName;
  });
  return Boolean(result);
};

// dfs를 활용하여 받아온 최상위 요소 (eleRef.current)의 모든 자식들을 탐색하여 허용된 요소만 감시하거나 전부 감시
type DFSforObserveProps = {
  root: Element;
  observer?: IntersectionObserver | null;
  allowSelectors?: string[];
  excludeOptions?: {
    excludeSelectors?: string[];
    isExceptTarget?: boolean;
  };
  checkAlreadyObserve?: boolean;
};
export const DFSforObserve = ({ root, observer, allowSelectors, excludeOptions, checkAlreadyObserve }: DFSforObserveProps) => {
  const excludeSelectors = excludeOptions?.excludeSelectors;
  const isExceptTarget = excludeOptions?.isExceptTarget;

  const allowAnalyzedSelectors = allowSelectors?.map(selector => execAnalyzeSelector(selector));
  const excludeAnalyzedSelectors = excludeSelectors?.map(selector => execAnalyzeSelector(selector));

  const setObserve = (ele: Element, observer: IntersectionObserver) => {
    (ele as HTMLElement).style.visibility = 'hidden';
    const isExists = checkAlreadyObserve && observer.takeRecords().find(entry => entry.target === ele);
    isExists || observer.observe(ele);
  };

  const DFS = (element: Element) => {
    if (!element || !observer) return;
    const children = Array.from(element.children) as HTMLElement[];
    if (!children || !children.length) return;

    children.forEach(ele => {
      const isNotObserve = excludeAnalyzedSelectors && getSelectorMatchTarget(ele, excludeAnalyzedSelectors);
      if (isNotObserve) {
        if (isExceptTarget) DFS(ele); // 현재 타겟만 제외 (자식들은 제외하지 않음)
        return;
      };
      DFS(ele);

      if (allowAnalyzedSelectors) {
        const isMatch = getSelectorMatchTarget(ele, allowAnalyzedSelectors);
        isMatch && setObserve(ele, observer);
      } else setObserve(ele, observer);
    });
  };

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
