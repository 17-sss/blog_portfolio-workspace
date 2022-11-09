import styled from '@emotion/styled';
import { setFlex } from '@utils/style';

export const InformationLayout = styled.div`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })}
  background-color: #F9FAFB;
  padding: 16px 0;
  width: 100%;
`;

export const InformationInnerLayout = styled.div`
  width: 768px;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }

  .description {
    font-size: 14px;
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;
