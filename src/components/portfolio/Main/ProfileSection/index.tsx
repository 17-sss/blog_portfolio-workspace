import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const ProfileSection: FunctionComponent = function ({ ...props }) {
  const { layoutId } = PORTFOLIO_SECTION_INFO.profile;

  return (
    <S.ProfileSectionLayout id={layoutId} {...props}>
      <S.ProfileSectionInnerBox>스킬</S.ProfileSectionInnerBox>
    </S.ProfileSectionLayout>
  );
};

export default ProfileSection;