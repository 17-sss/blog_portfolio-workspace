import { FunctionComponent, useMemo } from 'react';
import CircleProgress, { CircleProgressProps } from 'src/components/portfolio/Common/CircleProgress';
import { findIconName } from 'src/components/portfolio/Common/CustomIcon';
import * as S from './style';

type CircularSkillItemProps = Pick<CircleProgressProps, 'size' | 'value'> & { name: string; color: string };
const CircularSkillItem: FunctionComponent<CircularSkillItemProps> = function ({ name, color, size, value, ...props }) {
  const iconName = useMemo(() => findIconName(name), [name]);

  return (
    <S.CircularSkillItemLayout {...props}>
      <CircleProgress customColor={{ progress: color }} {...{ name, size, value }} iconName={iconName} />
    </S.CircularSkillItemLayout>
  );
};

export default CircularSkillItem;
