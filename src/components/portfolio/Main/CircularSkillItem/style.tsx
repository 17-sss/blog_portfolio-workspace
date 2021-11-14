import styled from '@emotion/styled';
import { getMediaQueries, setFlex } from 'utils/style';

export const CircularSkillItemLayout = styled.li`
  ${setFlex({ alignItems: 'center', justifyContent: 'center' })}
  ${getMediaQueries({ type: 'tabletDesktop' })} {
    padding: 0 8px;
  }
  ${getMediaQueries({ type: 'mobile' })} {
    padding: 8px 0;
  }
`;
