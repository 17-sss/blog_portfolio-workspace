import styled from '@emotion/styled';
import { setFlex } from '@utils/style';

export const IntroductionLayout = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;

  .inner {
    ${setFlex({ flexDirection: 'column', justifyContent: 'center' })};
    width: 768px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
      padding: 0 20px;
    }
  }
`;

const DefaultRow = styled.div`
  display: flex;
  padding: 12px 0;
`;

export const BetweenRow = styled(DefaultRow)`
  justify-content: space-between;
  align-items: center;
`;
export const NormalCol = styled(DefaultRow)`
  flex-direction: column;
  justify-content: center;
`;

export const SubTitleText = styled.p`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TitleText = styled.p`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
