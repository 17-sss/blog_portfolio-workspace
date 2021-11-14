import { FunctionComponent, useMemo } from 'react';
import { Paragraph } from 'components/portfolio/Common';
import * as S from './style';

type ProfileBoxProps = { name: string; antecedents: string[]; imageInfo: { alt: string; staticSrc: string } };
const ProfileBox: FunctionComponent<ProfileBoxProps> = function ({ imageInfo, name, antecedents }) {
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

  return (
    <S.ProfileCardLayout>
      <S.ProfileCard elevation={4}>
        <S.ProfileCardContent>
          <S.ImageBox>
            <S.ImageAvatar src={imageInfo.staticSrc} alt={imageInfo.alt} />
          </S.ImageBox>
          <S.InfoBox>
            <Paragraph paragraph variant="h4">{name}</Paragraph>
            <ul>{antecedentitems}</ul>
          </S.InfoBox>
        </S.ProfileCardContent>
        <S.ProfileCardContent align="center">깃헙, 인스타, 메일 등..</S.ProfileCardContent>
      </S.ProfileCard>
    </S.ProfileCardLayout>
  );
};

export default ProfileBox;
