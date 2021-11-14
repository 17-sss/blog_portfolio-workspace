import { FunctionComponent } from 'react';
import CircleProgress, { CircleProgressProps } from 'components/portfolio/Common/CircleProgress';
import * as S from './style';

type CircularSkillItemProps = Pick<CircleProgressProps, 'size' | 'value'> & { name: string; color: string };
const CircularSkillItem: FunctionComponent<CircularSkillItemProps> = function ({ name, color, size, value, ...props }) {
  return (
    <S.CircularSkillItemLayout {...props}>
      <CircleProgress customColor={{ progress: color }} {...{ name, size, value }} />
    </S.CircularSkillItemLayout>
  );
};

export default CircularSkillItem;
