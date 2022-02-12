import styled from '@emotion/styled';
import { getMediaQueries, setFlex } from '@utils/style';

export const CircularSkillItemLayout = styled.li`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })}
  ${getMediaQueries({ type: 'tablet', customWidth: { minWidth: 0 } })} {
    padding: 12px 0 0;
  }
`;
