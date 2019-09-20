import styled from 'styled-components';

import { theme } from '../constants';
import { Button } from '../components';

export const Direction = styled.Text`
  font-size: ${theme.size.m};
  font-weight: 700;
  color: ${theme.color.lighter};
`;

export const Distance = styled.Text`
  font-size: ${theme.size.s};
  color: ${theme.color.light};
`;

export const ButtonStop = styled(Button)`
  background-color: hsl(360, 81%, 45%);
  width: 100;
  height: 44;
`;

export const Number = styled.Text`
  font-weight: 700;
  font-size: ${theme.size.m};
  color: ${theme.color.lighter};
`;

export const Unit = styled.Text`
  color: ${theme.color.light};
  font-size: ${theme.size.s};
  font-weight: 400;
`;
