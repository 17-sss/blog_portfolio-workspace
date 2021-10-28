import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { PROFILE_IMAGE_LINK } from 'utils/constants';

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageLayout src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;

const ProfileImageLayout = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
