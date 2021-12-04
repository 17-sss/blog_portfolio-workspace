import { Dispatch, SetStateAction } from 'react';

export const changeFirstCharUpperCase = (str: string): string =>
  str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

export const getSeparateNumStr = (str: string) => {
  const REG_EX = /(?<num>([\d\.]+))(?<str>([a-z]+))/gi;
  const matchs = [...str.matchAll(REG_EX)];
  if (!matchs || !matchs.length) return null;
  const groups = matchs[0].groups;
  if (!groups) return null;

  const result = {
    num: +groups.num,
    str: groups.str,
  };
  return result;
};

export const isNullOrUndefined = (param: any) => param === null || typeof param === 'undefined';

export const getExtension = (str: string) => {
  const match = str.match(/\.\w+$/gi);
  if (!match || !match.length) return;
  return match[0];
};

type DebounceProps = {
  timer: number;
  setTimer?: Dispatch<SetStateAction<number>>;
  fn: () => void;
  delay?: number;
};
export const debounce =
  ({ timer, setTimer, fn, delay = 1000 }: DebounceProps) =>
  () => {
    const isExistTimer = Boolean(timer || typeof timer === 'number');
    if (isExistTimer) {
      if (!setTimer) window.clearTimeout(timer);
      else
        setTimer(timer => {
          window.clearTimeout(timer);
          return timer;
        });
    }

    if (!setTimer) timer = window.setTimeout(() => fn(), delay);
    else setTimer(() => window.setTimeout(() => fn(), delay));
  };

type ThrottleProps = Omit<DebounceProps, 'timer' | 'setTimer'> & {
  timer: number | null;
  setTimer?: Dispatch<SetStateAction<number | null>>;
};
export const throttle =
  ({ timer, setTimer, fn, delay = 1000 }: ThrottleProps) =>
  () => {
    if (timer || typeof timer === 'number') {
      if (!setTimer) timer = null;
      else setTimer(() => null);
      return;
    }
    if (!setTimer) timer = window.setTimeout(() => (fn(), (timer = null)), delay);
    else setTimer(() => window.setTimeout(() => (fn(), (timer = null)), delay));
  };
