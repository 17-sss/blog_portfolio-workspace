import { FunctionComponent } from 'react';
import CustomIcon, { IconNameType } from 'src/components/portfolio/Common/CustomIcon';
import * as S from './style';

export type SkillItemProps = { iconType?: IconNameType, color?: string; };
const SkillItem: FunctionComponent<SkillItemProps> = function ({ iconType, children, ...props }) {
  return (
    <S.SkillItemLayout {...props}>
      <CustomIcon type={iconType} />
    </S.SkillItemLayout>
  );
};
export default SkillItem;
