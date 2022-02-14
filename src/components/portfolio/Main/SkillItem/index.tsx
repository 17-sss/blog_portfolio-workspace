import { FunctionComponent } from 'react';
import CustomIcon, { IconNameType } from '@components/portfolio/Common/CustomIcon';
import * as S from './style';

export interface SkillItemProps {
  iconType?: IconNameType;
  color?: string;
}
const SkillItem: FunctionComponent<SkillItemProps> = function ({ iconType, color, ...props }) {
  return (
    <S.SkillItemLayout color={color} {...props}>
      <CustomIcon iconType={iconType} />
    </S.SkillItemLayout>
  );
};
export default SkillItem;
