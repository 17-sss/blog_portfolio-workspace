import React, { FunctionComponent } from 'react';

import { Paragraph } from 'components/portfolio/Common';
import * as S from './style';

export type IntroduceListItemProps = {
  subject?: string;
  contents?: string;
  icon?: JSX.Element;
  idx?: number;
  duration?: number;
};
const IntroduceListItem: FunctionComponent<IntroduceListItemProps> = function ({ subject, contents, icon, ...props }) {
  return (
    <S.IntroduceListItemLayout {...props}>
      <S.IntroduceCard>
        <S.IntroduceCardContent>
          {icon ? <S.IntroduceIconBox><div className="inner">{icon}</div></S.IntroduceIconBox> : <></>}
          {subject ? <Paragraph variant="h3">{subject}</Paragraph> : <></>}
          {contents ? <Paragraph paragraph variant="h5" isContent>{contents}</Paragraph> : <></>}
        </S.IntroduceCardContent>
      </S.IntroduceCard>
    </S.IntroduceListItemLayout>
  );
};
export default IntroduceListItem;