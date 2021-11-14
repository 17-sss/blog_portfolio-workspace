import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import * as S from './style';
import { getSeparateNumStr } from 'utils/functions';

export type CircleProgressProps = CircularProgressProps & {
  value: number;
  customColor?: { text?: string; progress?: string };
};
const CircleProgress: FunctionComponent<CircleProgressProps> = function ({ value, customColor, ...props }) {
  const [progressValue, setProgressValue] = useState<number>(0);

  // S.InfoParagraph의 fontSize는 (size / 7)
  const fontSize = useMemo(() => {
    if (!props.size) return;

    const { size } = props;
    const DIV_UNIT = 7;
    if (typeof size === 'number') return `${size / DIV_UNIT}px`;

    const separateNumStr = getSeparateNumStr(size);
    if (!separateNumStr) return;

    const { num, str } = separateNumStr;
    return `${num / DIV_UNIT}${str}`;
  }, [props.size]);

  useEffect(() => {
    if (progressValue >= value) return;
    const timer = window.setTimeout(() => setProgressValue(progressValue => progressValue + 5), 20);
    return () => clearTimeout(timer);
  }, [progressValue]);

  return (
    <S.CircleProgressLayout>
      <S.Progress variant="determinate" customColor={customColor?.progress} value={progressValue} {...props} />
      <S.ProgressInfoBox>
        <S.InfoParagraph fontSize={fontSize} customColor={customColor?.text}>{`${Math.round(value)}%`}</S.InfoParagraph>
      </S.ProgressInfoBox>
    </S.CircleProgressLayout>
  );
};

export default CircleProgress;
