import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.Text`
  color: ${theme.color.lighter};
  font-size: ${props => (props.large ? theme.size.l : theme.size.m)};
  font-weight: bold;
`;