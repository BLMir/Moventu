import { View } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.View`
  display: flex;
  flex-grow: 1;
  background-color: ${theme.color.dark};
  align-items: center;
  justify-content: flex-start;
  padding-top: ${theme.space.xl};
`;
