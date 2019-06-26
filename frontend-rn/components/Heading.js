import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.Text`
  color: ${theme.color.lighter};
  font-size: ${props => (props.large ? theme.size.xl : theme.size.m)};
  font-weight: bold;
  text-align: left;
  margin-bottom: ${theme.space.m};
`;
