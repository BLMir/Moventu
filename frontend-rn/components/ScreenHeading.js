import { Text } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.Text`
  color: ${theme.color.lighter};
  font-size: ${theme.size.xl};
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding-top: ${theme.space.xs};
  padding-bottom: ${theme.space.xs};
  padding-right: ${theme.space.xs};
  padding-left: ${theme.space.xs};
  margin-bottom: ${theme.space.m};
`;
