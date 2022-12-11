import { AdditionalLinkInfo } from '@hooks';
import * as S from './style';

export interface InformationProps {
  text: string;
  externalLink?: AdditionalLinkInfo;
}

const Information: React.FC<InformationProps> = ({ text, externalLink, ...props }) => {
  return (
    <S.InformationLayout {...props}>
      <S.InformationInnerLayout>
        <p>{text}</p>
        {externalLink && (
          <a className="link" href={externalLink.href}>
            {externalLink.text}
          </a>
        )}
      </S.InformationInnerLayout>
    </S.InformationLayout>
  );
};

export default Information;
