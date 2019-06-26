import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.Text`
  color: ${theme.color.light};
  font-size: ${props => (props.large ? theme.size.m : theme.size.s)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;