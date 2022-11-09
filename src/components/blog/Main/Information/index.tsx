import * as S from './style';

export interface InformationProps {
  text: string;
  description: string;
}

const Information: React.FC<InformationProps> = ({ text, description, ...props }) => {
  return (
    <S.InformationLayout {...props}>
      <S.InformationInnerLayout>
        <p>{text}</p>
        {description && <p className="description">{description}</p>}
      </S.InformationInnerLayout>
    </S.InformationLayout>
  );
};

export default Information;
