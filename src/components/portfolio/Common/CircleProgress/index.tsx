import React, { FunctionComponent, useMemo } from 'react';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import CustomIcon, { IconNameType } from 'components/portfolio/Common/CustomIcon';
import { getSeparateNumStr } from 'utils/functions';
import * as S from './style';

export type CircleProgressProps = CircularProgressProps & {
  value: number;
  customColor?: { text?: string; progress?: string };
  iconName?: IconNameType;
};
const CircleProgress: FunctionComponent<CircleProgressProps> = function ({ iconName, value, customColor, ...props }) {
  const sizeInfo = useMemo(() => {
    if (!props.size) return;
    const { size } = props;

    const FONT_DIV_UNIT = 10;
    const ICON_DIV_UNIT = 2.5;
    if (typeof size === 'number')
      return {
        fontSize: `${size / FONT_DIV_UNIT}px`,
        iconSize: `${size / ICON_DIV_UNIT}px`,
      };

    const separateNumStr = getSeparateNumStr(size);
    if (!separateNumStr) return;

    const { num, str } = separateNumStr;
    return {
      fontSize: `${num / FONT_DIV_UNIT}${str}`,
      iconSize: `${num / ICON_DIV_UNIT}${str}`,
    };
  }, [props.size]);

  return (
    <S.CircleProgressLayout>
      <S.Progress
        variant="determinate"
        customColor={customColor?.progress}
        value={value}
        aria-label={`Technical proficiency for ${iconName}`}
        {...props}
      />
      <S.ProgressInfoBox>
        {iconName && <CustomIcon type={iconName} color={customColor?.progress} size={sizeInfo?.iconSize} />}
        <S.InfoParagraph fontSize={sizeInfo?.fontSize} customColor={customColor?.text}>
          {`${Math.round(value)}%`}
        </S.InfoParagraph>
      </S.ProgressInfoBox>
    </S.CircleProgressLayout>
  );
};

export default CircleProgress;
