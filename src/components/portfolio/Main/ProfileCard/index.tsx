import { FunctionComponent, useMemo } from 'react';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { Paragraph } from 'src/components/portfolio/Common';
import { changeFirstCharUpperCase } from 'src/utils/functions';
import { ProfileCardType as ProfileCardProps } from 'src/queries';

import * as S from './style';

type IconKeys = keyof ProfileCardProps['contactInfo'];
type IconType = { [key in IconKeys]: JSX.Element };

const contactIcons: IconType = {
  github: <GitHubIcon />,
  instagram: <InstagramIcon />,
  email: <MailOutlineIcon />,
};

const ProfileCard: FunctionComponent<ProfileCardProps> = function ({ imageInfo, name, antecedents, contactInfo }) {
  const antecedentitems = useMemo(
    () =>
      antecedents.map((texts, i) => {
        const arrTexts = texts.split('|');
        return (
          <S.AntecedentItem key={i}>
            {arrTexts.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </S.AntecedentItem>
        );
      }),
    [antecedents],
  );

  const contactIconButtons = useMemo(
    () =>
      Object.entries(contactInfo).map(([name, href], i) => {
        const label = `${changeFirstCharUpperCase(name)} Icon`;
        return (
          <IconButton key={i} href={href} aria-label={label}>
            {contactIcons[name as IconKeys]}
          </IconButton>
        );
      }),
    [contactInfo],
  );

  return (
    <S.ProfileCardLayout>
      <S.ProfileCard elevation={4}>
        <S.ProfileCardContent>
          <S.ImageBox>
            <S.ImageAvatar src={imageInfo.staticSrc} alt={imageInfo.alt} />
          </S.ImageBox>
          <S.InfoBox>
            <Paragraph paragraph variant="h4">
              {name}
            </Paragraph>
            <ul>{antecedentitems}</ul>
          </S.InfoBox>
        </S.ProfileCardContent>

        <S.ProfileCardContent>
          <S.IconButtonBox>{contactIconButtons}</S.IconButtonBox>
        </S.ProfileCardContent>
      </S.ProfileCard>
    </S.ProfileCardLayout>
  );
};

export default ProfileCard;
