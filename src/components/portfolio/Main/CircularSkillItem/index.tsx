import { FunctionComponent, useMemo } from 'react';
import CircleProgress, { CircleProgressProps } from 'components/portfolio/Common/CircleProgress';
import { iconNames, IconNameType } from 'components/portfolio/Common/CustomIcon';
import * as S from './style';

type CircularSkillItemProps = Pick<CircleProgressProps, 'size' | 'value'> & { name: string; color: string };
const CircularSkillItem: FunctionComponent<CircularSkillItemProps> = function ({ name, color, size, value, ...props }) {
  const iconName = useMemo(() => {
    const iconKeys = Object.values(iconNames) as IconNameType[];
    const findName = iconKeys.find(
      v => name.toLowerCase().includes(v.toLowerCase()) || v.toLowerCase().includes(name.toLowerCase()),
    );
    return findName;
  }, [name]);

  return (
    <S.CircularSkillItemLayout {...props}>
      <CircleProgress customColor={{ progress: color }} {...{ name, size, value }} iconName={iconName} />
    </S.CircularSkillItemLayout>
  );
};

export default CircularSkillItem;
